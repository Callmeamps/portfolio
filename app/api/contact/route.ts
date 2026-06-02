import { NextRequest, NextResponse } from "next/server";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  userAgent?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, honeypot } = body;

    // Honeypot — bots fill it, humans don't
    if (honeypot) {
      // Silently succeed so bots don't know they failed
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message too short. Give me something to work with." },
        { status: 400 }
      );
    }

    const id = `contact-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const submission: ContactSubmission = {
      id,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || undefined,
    };

    const writeParUrl = process.env.OCI_CONTACT_WRITE_PAR;
    if (!writeParUrl) {
      console.error("OCI_CONTACT_WRITE_PAR not set");
      return NextResponse.json(
        { error: "Service not configured. Try email instead." },
        { status: 503 }
      );
    }

    // Upload to OCI Object Storage via pre-authenticated request
    const objectName = `submissions/${id}.json`;
    const uploadUrl = writeParUrl.replace("/submissions/", `/${objectName}`);

    const uploadResp = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": String(JSON.stringify(submission).length),
      },
      body: JSON.stringify(submission, null, 2),
    });

    if (!uploadResp.ok) {
      console.error("OCI upload failed:", uploadResp.status, await uploadResp.text());
      return NextResponse.json(
        { error: "Failed to save your message. Try emailing instead." },
        { status: 502 }
      );
    }

    // Update submissions index
    const indexUrl = process.env.OCI_CONTACT_READ_PAR;
    const updateIndexUrl = process.env.OCI_CONTACT_WRITE_INDEX_PAR;

    if (updateIndexUrl) {
      let index: ContactSubmission[] = [];
      try {
        const getResp = await fetch(indexUrl!);
        if (getResp.ok) {
          index = await getResp.json();
        }
      } catch {
        // Index doesn't exist yet — that's fine
      }

      index.unshift(submission);

      await fetch(updateIndexUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": String(JSON.stringify(index).length),
        },
        body: JSON.stringify(index, null, 2),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Signal received. I'll get back to you.",
      id,
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}