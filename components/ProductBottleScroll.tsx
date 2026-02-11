"use client";
import { useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import { Product } from '@/data/products';

export default function ProductBottleScroll({ product, autoProgress = 0 }: { product: Product, autoProgress?: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        for (let i = 1; i <= 192; i++) {
            const img = new Image();
            img.src = `${product.folderPath}/${i}.jpg`;
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [product]);

    useEffect(() => {
        const render = () => {
            const context = canvasRef.current?.getContext('2d');
            if (!context || images.length < 192) return;

            // Use the infinite auto-looping progress directly
            const frameIndex = Math.min(Math.floor(autoProgress * 191), 191);
            const img = images[frameIndex];

            if (img) {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                context.drawImage(img, 0, 0, context.canvas.width, context.canvas.height);
            }
            requestAnimationFrame(render);
        };
        const animationFrame = requestAnimationFrame(render);
        return () => cancelAnimationFrame(animationFrame);
    }, [images, scrollYProgress, autoProgress]);

    return (
        <div ref={containerRef} className="h-screen relative overflow-hidden">
            <div className="h-full w-screen flex items-center justify-center">
                <canvas ref={canvasRef} width={1920} height={1080} className="w-full h-full object-cover" />
            </div>
        </div>
    );
}
