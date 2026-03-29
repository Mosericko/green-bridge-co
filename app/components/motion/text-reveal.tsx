import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  words: string;
  className?: string;
  duration: number;
}

export function TextReveal({ words, className, duration = 0.5 }: RevealProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
      },
    );
  }, [scope.current]);

  //   incase there are line breaks in the text
  const linesArray = words.split("\n");

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {linesArray.map((line, lineIndex) => (
          <div key={lineIndex}>
            {line.split(" ").map((word, i) => (
              <motion.span
                key={word + i}
                className="mr-2 inline-block opacity-0 blur-md"
                style={{
                  y: 10,
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };
  return <div className={cn("", className)}>{renderWords()}</div>;
}
