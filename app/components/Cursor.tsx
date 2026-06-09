"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // dark theme 감지
      const el = document.elementFromPoint(mouseX, mouseY);
      const isDark = !!el?.closest("[data-cursor-theme='dark']");
      setDark(isDark);
    };

    const loop = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX - 3.5}px`;
        dotRef.current.style.top = `${mouseY - 3.5}px`;
      }
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX - 20}px`;
        ringRef.current.style.top = `${ringY - 20}px`;
      }
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const color = dark ? "#ffffff" : "#293465";

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 7,
          height: 7,
          borderRadius: "50%",
          backgroundColor: color,
          pointerEvents: "none",
          zIndex: 9999,
          transition: "background-color 0.3s",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          boxShadow: `0 0 0 1.5px ${color}`,
          opacity: 0.6,
          pointerEvents: "none",
          zIndex: 9999,
          transition: "box-shadow 0.3s",
        }}
      />
    </>
  );
}
