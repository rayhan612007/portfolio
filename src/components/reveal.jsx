"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades + rises its children into view the first time they enter the viewport.
 * Purely additive: without JS (or with reduced motion) content is fully visible.
 */
export default function Reveal({
    children,
    delay = 0,
    className = "",
    ...props
}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
