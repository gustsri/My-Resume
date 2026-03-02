"use client";
import React from "react";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="w-full py-12 bg-black flex flex-col items-center justify-center border-t border-zinc-800">
      <div className="flex gap-6 mb-6">
        <a
          href="https://github.com/gustsri"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/kanitphong-gust/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://web.facebook.com/gus.kanitphong.sricharoen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="mailto:gustsri@gmail.com"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      <p className="text-zinc-500 text-sm">
        Copyright ©2026; Designed by{" "}
        <span className="text-white font-semibold">Kanitphong</span>
      </p>
    </footer>
  );
};

export default FooterSection;
