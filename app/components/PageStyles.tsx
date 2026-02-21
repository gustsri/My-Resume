"use client";
import React from 'react';

const PageStyles = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
      html { scroll-behavior: smooth; }
      
      .scanlines {
        background: linear-gradient(
          to bottom,
          transparent 50%,
          rgba(255, 255, 255, 0.05) 50%
        );
        background-size: 100% 4px;
      }

      .checkered-bg {
        background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E");
      }

      .glitch-text {
        position: relative;
      }

      .glitch-text::before,
      .glitch-text::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.8;
      }

      .glitch-text:hover::before {
        animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        color: #ffc906;
        z-index: -1;
      }

      .glitch-text:hover::after {
        animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
        color: #dc0000;
        z-index: -2;
      }

      .speed-line {
        position: absolute;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,201,6,0.6), transparent);
        animation: move-right 0.8s linear infinite;
      }

      @keyframes move-right {
        0% { transform: translateX(-100%) skewX(-45deg); opacity: 0; }
        50% { opacity: 0.5; }
        100% { transform: translateX(300%) skewX(-45deg); opacity: 0; }
      }

      @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-3px, 3px); }
        40% { transform: translate(-3px, -3px); }
        60% { transform: translate(3px, 3px); }
        80% { transform: translate(3px, -3px); }
        100% { transform: translate(0); }
      }

      @keyframes ticker {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.33%); }
      }

      .animate-ticker {
        animation: ticker 15s linear infinite;
      }

      .animation-delay-1000 { animation-delay: 1s; }
      .animation-delay-2000 { animation-delay: 2s; }

      .text-shadow-red {
        text-shadow: 0 0 15px rgba(220, 0, 0, 0.5);
      }
      
      .text-shadow-yellow {
        text-shadow: 0 0 15px rgba(255, 201, 6, 0.4);
      }

      section[id] {
        scroll-margin-top: 70px;
      }

      @media (min-width: 768px) {
        * { cursor: none !important; }
      }
    `}} />
  );
};

export default PageStyles;
