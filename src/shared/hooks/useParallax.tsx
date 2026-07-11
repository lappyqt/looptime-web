import type { MotionValue } from "motion/react";
import { useSpring, useTransform } from "motion/react";

export function useParallax(mouseX: MotionValue<number>, mouseY: MotionValue<number>, baseX: number, baseY: number, amplitude: number) {
    const springConfig = { stiffness: 400, damping: 30 };

    return {
        x: useSpring(
            useTransform(mouseX, [-1, 1], [baseX - amplitude, baseX + amplitude]), 
            springConfig
        ),
        y: useSpring(
            useTransform(mouseY, [-1, 1], [baseY - amplitude, baseY + amplitude]), 
            springConfig
        )
    }
}