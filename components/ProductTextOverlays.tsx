"use client";
import { Product } from '@/data/products';

export default function ProductTextOverlays({ product, autoProgress = 0 }: { product: Product, autoProgress?: number }) {
    const p = autoProgress;

    // Calculate which section should be visible based on loop progress
    const isSection1 = p >= 0.05 && p <= 0.25;
    const isSection2 = p >= 0.30 && p <= 0.50;
    const isSection3 = p >= 0.55 && p <= 0.75;
    const isSection4 = p >= 0.80 && p <= 0.95;

    return (
        <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
            {/* Section 1 - Centered Reveal */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-10 text-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${isSection1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
                <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-[-0.05em] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-tight">
                    {product.section1.title}
                </h1>
                <p className="text-xl md:text-2xl text-orange-500 font-black tracking-[0.3em] uppercase mt-6 drop-shadow-lg">
                    {product.section1.subtitle}
                </p>
            </div>

            {/* Section 2 - Left Slide */}
            <div className={`absolute inset-0 flex flex-col items-start justify-center p-12 md:p-32 text-left transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${isSection2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <h2 className="text-6xl md:text-8xl font-black uppercase italic max-w-2xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-tight">
                    {product.section2.title}
                </h2>
                <p className="text-lg md:text-xl text-white/80 mt-8 max-w-lg font-bold leading-relaxed tracking-wide">
                    {product.section2.subtitle}
                </p>
            </div>

            {/* Section 3 - Right Slide */}
            <div className={`absolute inset-0 flex flex-col items-end justify-center p-12 md:p-32 text-right transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${isSection3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <h2 className="text-6xl md:text-8xl font-black uppercase italic max-w-2xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-tight">
                    {product.section3.title}
                </h2>
                <p className="text-lg md:text-xl text-white/80 mt-8 max-w-lg font-bold leading-relaxed tracking-wide">
                    {product.section3.subtitle}
                </p>
            </div>

            {/* Section 4 - Final Centered Reveal */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-10 text-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${isSection4 ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-sm'}`}>
                <h2 className="text-7xl md:text-9xl font-black uppercase italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-tight">
                    {product.section4.title}
                </h2>
                <p className="text-xl md:text-2xl text-orange-500 mt-8 font-black tracking-[0.3em] uppercase drop-shadow-lg">
                    {product.section4.subtitle}
                </p>
            </div>
        </div>
    );
}
