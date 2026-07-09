import { MotionValue, type SpringOptions, useSpring, useTransform } from "motion/react";

const defaultSpring: SpringOptions = {
  stiffness: 120,
  damping: 20,
  mass: 0.4
};

export function useScrollAnimation(
    progress: MotionValue<number>,
    range: [number, number],
    x: [number, number],
    spring: SpringOptions = defaultSpring) {
  return {
    x: useSpring(useTransform(progress, range, x), spring),
    opacity: useTransform(progress, range, [0, 1]),
  };
}