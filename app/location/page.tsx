"use client";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function LocationPage() {
    const address = "Karnataka Bank, opposite Bilagi, Bilgi, Bilgi Rural, Karnataka 587116";
    const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_API_KEY&q=${encodeURIComponent(address)}`;

    return (
        <main className="min-h-screen bg-black pt-32 text-white">
            <div className="max-w-7xl mx-auto px-6 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center"
                >
                    <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">
                        OUR <span className="text-orange-600">HOME</span>
                    </h1>
                    <p className="text-white/40 uppercase tracking-[0.5em] font-bold text-sm">
                        Find us in the heart of Bilgi
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Location Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900/50 p-12 rounded-[2.5rem] border border-white/5 flex flex-col justify-between"
                    >
                        <div>
                            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-8 block">Official Branch</span>
                            <h2 className="text-5xl font-black italic uppercase mb-8 leading-tight">Bilgi Artisan Pizzeria</h2>
                            <div className="space-y-8 mb-12">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-600 flex-shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase text-white/30 font-black tracking-widest mb-2">Address</div>
                                        <p className="text-xl font-bold leading-relaxed">{address}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-600 flex-shrink-0">
                                        ⏰
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase text-white/30 font-black tracking-widest mb-2">Fire Hours</div>
                                        <p className="text-xl font-bold">11:00 AM — 11:00 PM</p>
                                        <p className="text-sm text-white/40 uppercase font-black tracking-tighter mt-1 italic">Open Seven Days a Week</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-600 flex-shrink-0">
                                        📞
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase text-white/30 font-black tracking-widest mb-2">Direct Line</div>
                                        <p className="text-xl font-bold">+91 900 PIZZA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps?daddr=Karnataka+bank,+opposite+Bilagi,+Bilgi,+Bilgi+Rural,+Karnataka+587116"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="slanted-cta w-full bg-orange-600 text-white py-6 text-xl font-black uppercase italic tracking-tighter hover:bg-orange-500 transition-all hover:scale-105 shadow-[0_20px_40px_rgba(234,88,12,0.2)] block text-center"
                        >
                            Get Directions
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[2.5rem] overflow-hidden border border-white/10 group min-h-[500px] bg-neutral-900"
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://maps.google.com/maps?q=Karnataka%20bank,%20opposite%20Bilagi,%20Bilgi,%20Bilgi%20Rural,%20Karnataka%20587116&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            className="absolute inset-0 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100"
                        ></iframe>

                        {/* Map UI Elements */}
                        <div className="absolute top-10 left-10 p-4 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4 pointer-events-none">
                            <div className="w-4 h-4 bg-orange-600 rounded-full animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">The Oven Story is Live</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
