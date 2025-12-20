import React, { useState, useEffect } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = text[currentIndex];

    if (isTyping) {
      // Typing forward
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting backward
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, typingSpeed / 2);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setCurrentIndex((currentIndex + 1) % text.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, currentIndex, isTyping, text, typingSpeed, pauseDuration]);

  return (
    <span className="inline-block">
      <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        {displayText}
      </span>
      {showCursor && (
        <span className="animate-pulse text-emerald-400 ml-1">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;