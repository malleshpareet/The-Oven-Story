"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
    );

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "Location", href: "/location" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <>
            <motion.nav
                style={{ backgroundColor }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md border-b border-white/5 transition-colors duration-300"
            >
                <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-black italic tracking-tighter uppercase z-[70]">
                    <span className="text-orange-500">The Oven</span>
                    <span className="text-white">Story</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-orange-500 transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                    <button className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">
                        Login
                    </button>
                    <button className="slanted-cta bg-orange-600 text-white px-5 md:px-6 py-2 text-[10px] md:text-xs font-black uppercase italic tracking-tighter hover:bg-orange-500 transition-all hover:scale-105 active:scale-95">
                        Order Now
                    </button>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col gap-1.5 md:hidden z-[70] p-2"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white rounded-full block origin-center"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-white rounded-full block"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white rounded-full block origin-center"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8 md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-black italic uppercase tracking-tighter text-white hover:text-orange-500 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="mt-8"
                            >
                                <button className="slanted-cta bg-orange-600 text-white px-12 py-4 text-xl font-black uppercase italic tracking-tighter">
                                    Order Now
                                </button>
                            </motion.div>
                        </div>

                        {/* Service Indicators (Mobile) */}
                        <div className="mt-16 flex gap-10 md:hidden">
                            {[
                                {
                                    name: "Dine-In",
                                    icon: (
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                                            <path d="M7 2v20" />
                                            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "Delivery",
                                    icon: (
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="6" cy="19" r="2" />
                                            <circle cx="18" cy="19" r="2" />
                                            <path d="M10 19h4" />
                                            <path d="m14 16 2-3h4" />
                                            <path d="M15 19H3" />
                                            <path d="M17 19h4" />
                                            <path d="M8 19V5c0-1.1.9-2 2-2h4l2 3" />
                                            <path d="M12 9h4" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "Takeaway",
                                    icon: (
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                                            <path d="M3 6h18" />
                                            <path d="M16 10a4 4 0 0 1-8 0" />
                                        </svg>
                                    )
                                }
                            ].map((service, i) => (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex flex-col items-center gap-3"
                                >
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-orange-500">
                                        {service.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{service.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Footer Decor */}
                        <div className="absolute bottom-12 text-center">
                            <p className="text-[8px] font-black uppercase tracking-[0.5em] text-white/20 italic">
                                Crafted in Bilgi • Baked at 900°F
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
