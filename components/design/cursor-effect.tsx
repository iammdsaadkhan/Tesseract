"use client";

import { useEffect } from "react";
import { fairyDustCursor } from "cursor-effects";

export default function CursorEffect() {
  useEffect(() => {
    // @ts-ignore - The cursor-effects library lacks proper TypeScript construct signatures
    const cursor = new fairyDustCursor({
      // We are using Tesseract's neon theme colors (Red, Blue, Purple)
      colors: ["#ef4444", "#3b82f6", "#a855f7"],
    });

    // Cleanup function: React strict mode renders twice in development.
    // This destroys the previous canvas so you don't get duplicate effects!
    return () => {
      cursor.destroy();
    };
  }, []);

  return null; 
}