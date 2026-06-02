"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VoiceLog, VoiceLogCallout } from "@/data/projects";

interface VoiceLogPlayerProps {
  voiceLog: VoiceLog;
}

export function VoiceLogPlayer({ voiceLog }: VoiceLogPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeCallout, setActiveCallout] = useState<VoiceLogCallout | null>(null);
  const shownCallouts = useRef<Set<number>>(new Set());

  // Reset when voiceLog changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveCallout(null);
    shownCallouts.current.clear();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [voiceLog.src]);

  // Track which callouts have been shown and show new ones
  useEffect(() => {
    if (!isPlaying) return;

    const callout = voiceLog.callouts.find(
      (c) =>
        currentTime >= c.time &&
        currentTime < c.time + 4 &&
        !shownCallouts.current.has(c.time)
    );

    if (callout) {
      shownCallouts.current.add(callout.time);
      setActiveCallout(callout);

      // Auto-dismiss after 3.5 seconds
      const timer = setTimeout(() => {
        setActiveCallout((prev) => (prev?.time === callout.time ? null : prev));
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [currentTime, isPlaying, voiceLog.callouts]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    setActiveCallout(null);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={voiceLog.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Player bar */}
      <div className="flex items-center gap-4 bg-surface-container-high border-2 border-primary p-3" style={{ boxShadow: "4px 4px 0px 0px rgba(4,13,27,1)" }}>
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="sticker-btn sticker-btn-primary shrink-0 flex items-center justify-center w-10 h-10"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>

        {/* Progress bar */}
        <div className="flex-1 relative">
          <div className="h-2 bg-surface-container overflow-hidden">
            <motion.div
              className="h-full bg-secondary"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          {/* Callout markers on the timeline */}
          {voiceLog.callouts.map((callout) => (
            <div
              key={callout.time}
              className="absolute top-0 w-1 h-2 bg-primary/40"
              style={{
                left: duration > 0 ? `${(callout.time / duration) * 100}%` : "0%",
              }}
            />
          ))}
        </div>

        {/* Time display */}
        <span className="font-annotation text-annotation text-on-surface-variant shrink-0">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Label */}
        <span className="font-sticker-label text-sticker-label text-secondary uppercase hidden sm:inline shrink-0">
          🎙️ VOICE LOG
        </span>
      </div>

      {/* Active callout — TikTok-style subtitle popup */}
      <AnimatePresence>
        {activeCallout && (
          <motion.div
            key={activeCallout.time}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 z-30"
          >
            <div
              className="bg-primary text-on-primary font-annotation text-annotation px-4 py-2 whitespace-nowrap border-2 border-secondary"
              style={{ boxShadow: "4px 4px 0px 0px #8b6a4a" }}
            >
              {activeCallout.text}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
