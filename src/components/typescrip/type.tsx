import React, { useEffect, useState } from "react";

type TypingIntroProps = {
  phrases?: string[];
  typingSpeed?: number;   // ms per character when typing
  deletingSpeed?: number; // ms per character when deleting
  loop?: boolean;         // whether to loop phrases
};

const TypingIntro: React.FC<TypingIntroProps> = ({
  phrases = ["Web Developer", "Frontend Developer", "React Learner"],
  typingSpeed = 80,
  deletingSpeed = 40,
  loop = true,
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    if (index >= phrases.length) {
      if (loop) setIndex(0);
      return;
    }

        const current = phrases[index];
    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (!isDeleting && subIndex < current.length) {
      timeout = setTimeout(() => setSubIndex((s) => s + 1), typingSpeed);
    } else if (isDeleting && subIndex > 0) {
      timeout = setTimeout(() => setSubIndex((s) => s - 1), deletingSpeed);
    } else if (!isDeleting && subIndex === current.length) {
      setIsDeleting(true);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((i) => i + 1);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };

  }, [subIndex, isDeleting, index, phrases, typingSpeed, deletingSpeed, loop]);

  const currentText = index < phrases.length ? phrases[index].substring(0, subIndex) : "";

  return (
    <span className="font-bold text-amber-400">
      {currentText}
      <span className={`ml-1 ${blink ? "opacity-100" : "opacity-0"}`}>|</span>
    </span>
  );
};

export default TypingIntro;
