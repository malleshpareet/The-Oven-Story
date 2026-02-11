"use client";
import { useState, useEffect } from 'react';
import { products } from '@/data/products';
import ProductBottleScroll from '@/components/ProductBottleScroll';
import ProductTextOverlays from '@/components/ProductTextOverlays';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';

export default function Home() {
  // Triggering new build...
  const [index, setIndex] = useState(0);
  const current = products[index];

  const [autoProgress, setAutoProgress] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 8000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      setAutoProgress(progress);
      requestAnimationFrame(animate);
    };

    const requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--bg-gradient', current.gradient);
  }, [index, current.gradient]);

  return (
    <main className="relative transition-colors duration-1000 bg-black">
      <AnimatePresence mode="wait">
        <motion.div key={current.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

          {/* HERO SECTION */}
          <div className="relative h-screen w-full">
            <ProductBottleScroll product={current} autoProgress={autoProgress} />
            <ProductTextOverlays product={current} autoProgress={autoProgress} />
          </div>

          {/* SECTION 1: THE SECRET */}
          <section className="relative z-10 bg-black py-40 md:py-64 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Our secret weapon</span>
                <h3 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.9] mb-10 tracking-tighter">
                  {current.detailsSection.title}
                </h3>
                <p className="text-white/50 text-xl md:text-2xl leading-relaxed font-medium max-w-xl">
                  {current.detailsSection.description}
                </p>

                <div className="mt-16 grid grid-cols-3 gap-8">
                  {current.stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="border-t border-white/10 pt-6"
                    >
                      <div className="text-3xl font-black italic text-white mb-1">{stat.val}</div>
                      <div className="text-xs uppercase text-white/30 tracking-widest font-bold">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group"
              >
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none" />
              </motion.div>
            </div>
          </section>

          {/* SECTION 2: PILLARS */}
          <section className="bg-neutral-950 py-40 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "The Sourdough", desc: "Our 48-hour fermentation secret.", img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=600" },
                { title: "The Fire", desc: "Blistered at 900°F on volcanic stone.", img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&q=80&w=600" },
                { title: "The Drizzle", desc: "Finished with wild hot honey.", img: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&q=80&w=600" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative group h-[500px] rounded-3xl overflow-hidden"
                >
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-black/20 opacity-80" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <h4 className="text-3xl font-black italic uppercase mb-2">{item.title}</h4>
                    <p className="text-white/50 font-bold uppercase tracking-widest text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SECTION 3: CALL TO ACTION */}
          <section className="relative py-64 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=2000"
                className="w-full h-full object-cover opacity-30 fixed"
                alt="Pizza background"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-8xl md:text-[12rem] font-black italic uppercase leading-none tracking-tighter mb-12 drop-shadow-2xl text-white">
                  TASTE THE <br /> <span className="text-orange-600">MAGIC</span>
                </h2>
                <button className="slanted-cta bg-white text-black px-20 py-8 text-3xl font-black uppercase italic tracking-tighter hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-[0_0_80px_rgba(255,255,255,0.1)]">
                  ORDER {current.price}
                </button>
              </motion.div>
            </div>
          </section>

          <Footer />

        </motion.div>
      </AnimatePresence>
    </main>
  );
}
