"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const services = [
    {
        name: "Dine-In",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path d="M7 2v20" />
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
        )
    },
    {
        name: "Delivery",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="19" r="2" />
                <circle cx="18" cy="19" r="2" />
                <path d="M10 19h4" />
                <path d="M15 19H3" />
                <path d="M8 19V5c0-1.1.9-2 2-2h4l2 3" />
            </svg>
        )
    },
    {
        name: "Takeaway",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        )
    }
];

export default function ServiceSidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-cycle through services every 3 seconds
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % services.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div
            className="fixed right-6 md:right-12 top-[120px] z-50 hidden lg:flex flex-col items-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative flex flex-col items-center p-3 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Background Runner */}
                <motion.div
                    className="absolute w-12 h-12 rounded-full bg-orange-600/20 border border-orange-500/50"
                    animate={{ y: activeIndex * 60 }} // 60px gap between icons
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                <div className="flex flex-col gap-6 relative z-10">
                    {services.map((service, i) => {
                        const isActive = activeIndex === i;

                        return (
                            <motion.div
                                key={service.name}
                                className="relative flex items-center justify-center w-12 h-12 cursor-pointer group"
                                onClick={() => setActiveIndex(i)}
                            >
                                {/* Icon */}
                                <motion.div
                                    animate={{
                                        color: isActive || isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.2)",
                                        scale: isActive ? 1.1 : 1
                                    }}
                                    className={isActive ? "text-orange-500" : ""}
                                >
                                    {service.icon}
                                </motion.div>

                                {/* Label Sidebar Overlay */}
                                <AnimatePresence>
                                    {(isActive || isHovered) && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                            animate={{ opacity: 1, x: -16, scale: 1 }}
                                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                            className="absolute right-full mr-4 px-4 py-2 rounded-lg bg-white text-black text-[10px] font-black uppercase italic tracking-widest whitespace-nowrap shadow-2xl pointer-events-none"
                                        >
                                            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
                                            {service.name}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Progress Ring (Only for Active in Auto-mode) */}
                                {isActive && !isHovered && (
                                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                                        <motion.circle
                                            cx="24"
                                            cy="24"
                                            r="22"
                                            stroke="url(#gradient)"
                                            strokeWidth="2"
                                            fill="transparent"
                                            strokeDasharray="138"
                                            initial={{ strokeDashoffset: 138 }}
                                            animate={{ strokeDashoffset: 0 }}
                                            transition={{ duration: 3, ease: "linear" }}
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#f97316" />
                                                <stop offset="100%" stopColor="#ea580c" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Vertical Caption */}
            <div className="mt-8 flex flex-col items-end gap-2 pr-2">
                <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white/20">Available Now</span>
                <div className="w-12 h-px bg-white/10" />
            </div>
        </div>
    );
}
