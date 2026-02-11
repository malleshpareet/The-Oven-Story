"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 pt-32 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div className="text-3xl font-black italic tracking-tighter uppercase whitespace-nowrap">
                            The <span className="text-orange-600">Oven</span> Story.
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs font-medium uppercase tracking-wider">
                            Crafting artisan perfection at 900°F. We don't just bake pizza; we fire masterpieces.
                        </p>
                        <div className="flex gap-6">
                            {['IG', 'TW', 'FB'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/40 hover:border-orange-600 hover:text-orange-600 transition-all font-sans">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-8">Navigation</h4>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/60">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/menu" className="hover:text-white transition-colors">The Menu</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-8">Visit Us</h4>
                        <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-white/40">
                            <li className="leading-relaxed">
                                Opposite Karnataka Bank,<br />
                                Bilgi, Bilgi Rural,<br />
                                Karnataka 587116
                            </li>
                            <li className="text-white/80">+91 (900) PIZZA</li>
                            <li className="text-white/80 lowercase">hello@theovenstory.com</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-8">Join the Heat</h4>
                        <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-6 font-sans">Receive exclusive drops and secret recipes.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-[10px] font-black tracking-widest text-white placeholder:text-white/20 outline-none focus:border-orange-600 transition-colors"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-orange-600 text-white px-6 rounded-full text-[10px] font-black uppercase italic hover:bg-orange-500 transition-all">
                                GO
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
                        © 2026 THE OVEN STORY. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
