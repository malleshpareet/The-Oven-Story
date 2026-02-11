"use client";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black pt-32 text-white">
            <div className="max-w-7xl mx-auto px-6 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 text-center"
                >
                    <h1 className="text-7xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-none mb-6">
                        GET IN <span className="text-orange-600">TOUCH</span>
                    </h1>
                    <p className="text-white/40 uppercase tracking-[0.5em] font-bold text-sm">
                        Burning questions? We've got the heat.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900/40 p-10 md:p-16 rounded-[3rem] border border-white/5 backdrop-blur-xl"
                    >
                        <form className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase font-black tracking-[0.3em] text-white/30 ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="ARTISAN"
                                        className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-xs font-bold tracking-widest text-white outline-none focus:border-orange-600 transition-colors uppercase"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase font-black tracking-[0.3em] text-white/30 ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="HELLO@OVENSTORY.COM"
                                        className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-xs font-bold tracking-widest text-white outline-none focus:border-orange-600 transition-colors uppercase"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-white/30 ml-4">Subject</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-xs font-bold tracking-widest text-white outline-none focus:border-orange-600 transition-colors uppercase appearance-none cursor-pointer">
                                    <option>Feedback</option>
                                    <option>Catering Inquiry</option>
                                    <option>Franchise</option>
                                    <option>Career</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-white/30 ml-4">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="TELL US EVERYTHING..."
                                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-8 px-8 text-xs font-bold tracking-widest text-white outline-none focus:border-orange-600 transition-colors uppercase resize-none"
                                />
                            </div>

                            <button className="slanted-cta w-full bg-orange-600 text-white py-8 text-2xl font-black uppercase italic tracking-tighter hover:bg-orange-500 transition-all hover:scale-[1.02] shadow-[0_20px_60px_rgba(234,88,12,0.2)]">
                                SEND MESSAGE
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Narrative */}
                    <div className="space-y-20">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-8 leading-none">
                                Direct <br /> <span className="text-orange-600">Channels.</span>
                            </h2>
                            <p className="text-white/40 text-lg md:text-xl font-medium leading-relaxed max-w-md mb-12 uppercase tracking-wide">
                                Whether you're craving a franchise or just want to tell us how much you loved the char, we're listening.
                            </p>

                            <div className="grid grid-cols-1 gap-12">
                                <div className="group cursor-default">
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-3">Email Us</div>
                                    <div className="text-2xl md:text-3xl font-black italic hover:text-orange-500 transition-colors uppercase tracking-tight">hello@theovenstory.com</div>
                                </div>
                                <div className="group cursor-default">
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-3">Call the Kitchen</div>
                                    <div className="text-2xl md:text-3xl font-black italic hover:text-orange-500 transition-colors uppercase tracking-tight">+91 900 PIZZA</div>
                                </div>
                                <div className="group cursor-default">
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-3">Follow the Smoke</div>
                                    <div className="flex gap-8 text-xl font-black italic uppercase tracking-tighter">
                                        <a href="#" className="hover:text-orange-600 transition-colors">Instagram</a>
                                        <a href="#" className="hover:text-orange-600 transition-colors">Twitter</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Quote */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="p-12 border-l-2 border-orange-600 bg-white/5 rounded-r-3xl"
                        >
                            <p className="text-2xl italic font-bold text-white/80 leading-relaxed mb-4">
                                "The best conversations happen over sourdough and a 900°F fire."
                            </p>
                            <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">— The Founder</span>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
