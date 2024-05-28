"use client";

import React, { useEffect, useRef, useState } from "react";

import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from "@/utils";

interface VelocityScrollProps {
  text: React.ReactNode;
  default_velocity?: number;
  className?: string;
  top?: boolean;
  bottom?: boolean;
}

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
}

export function VelocityScroll({
  text,
  default_velocity = 5,
  className,
  top = false,
  bottom = false,
}: VelocityScrollProps) {
  function ParallaxText({ children, baseVelocity = 100, className }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();

      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    const directionFactor = React.useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="h-full w-full overflow-hidden whitespace-nowrap" ref={containerRef}>
        <motion.div className={cn("inline-block", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <span key={i} ref={i === 0 ? textRef : null}>
              {children}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="bg-muted border-foreground relative mx-auto w-[95%] overflow-hidden rounded-3xl border-2 border-dashed">
      {!bottom && (
        <ParallaxText baseVelocity={default_velocity} className={className}>
          {text}
        </ParallaxText>
      )}
      {!top && !bottom && <div className="border-foreground border-2 border-dashed" />}
      {!top && (
        <ParallaxText baseVelocity={-default_velocity} className={className}>
          {text}
        </ParallaxText>
      )}
    </section>
  );
}
