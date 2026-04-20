"use client";

import { useEffect } from "react";
// You can import different effects here! 
// Other options: ghostCursor, trailingCursor, followingDotCursor, emojiCursor
import { fairyDustCursor } from "cursor-effects";

export default function CursorEffect() {
  useEffect(() => {
    // We initialize the cursor inside useEffect so it only runs in the browser
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

  // This component doesn't render any HTML itself; the library injects a canvas into the <body>
  return null; 
}