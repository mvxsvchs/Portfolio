import { useRef, useEffect, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
    children: ReactNode;
    scrollContainerRef?: RefObject<HTMLElement>;
    y?: number;
    opacity?: number;
    start?: string;
    end?: string;
    scrub?: number | boolean;
    ease?: string;
    className?: string;
}

export default function ScrollFloat({
                                        children,
                                        scrollContainerRef,
                                        y = 40, // Wie weit floatet es nach oben
                                        opacity = 0, // Start-Opacity
                                        start = "top bottom",
                                        end = "bottom center",
                                        scrub = 1,
                                        ease = "power2.out",
                                        className = "",
                                    }: ScrollFloatProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const scroller =
            scrollContainerRef && scrollContainerRef.current
                ? scrollContainerRef.current
                : window;

        gsap.fromTo(
            el,
            { y, opacity, ease },
            {
                y: 0,
                opacity: 1,
                ease,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start,
                    end,
                    scrub,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [scrollContainerRef, y, opacity, start, end, scrub, ease]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
