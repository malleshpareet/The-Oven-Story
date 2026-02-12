"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const menuCategories = [
    {
        title: "Artisan Pizzas",
        description: "Stone-baked masterpieces with premium toppings",
        items: [
            { name: "Mix vegetable Pizza", price: "₹150", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800" },
            { name: "Sweet corn Pizza", price: "₹160", image: "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=800" },
            { name: "Paneer Pizza", price: "₹160", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=800" },
            { name: "Red Paprika Pizza (Spicy)", price: "₹180", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=800" },
            { name: "Black Olives Pizza", price: "₹190", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800" },
            { name: "Double Cheese Pizza", price: "₹200", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800" },
            { name: "Mushroom Pizza", price: "₹200", image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?auto=format&fit=crop&q=80&w=800" },
            { name: "Mexican Jalapeno Pizza", price: "₹200", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800" },
            { name: "Veggie Supreme Pizza", price: "₹240", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800" },
        ],
    },
    {
        title: "Sides & Snacks",
        description: "Perfect companions for your pizza journey",
        items: [
            { name: "French Fries", price: "₹90", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800" },
            { name: "Momos", price: "₹120", image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=800" },
            { name: "Fried Momos", price: "₹140", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800" },
            { name: "Veggie Fingers", price: "₹140", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800" },
            { name: "Cheesy Sandwich", price: "₹70", image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&q=80&w=800" },
            { name: "Paneer Cheese Sandwich", price: "₹80", image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&q=80&w=800" },
        ],
    },
    {
        title: "Beverages & Desserts",
        description: "Sweet endings and refreshing sips",
        items: [
            { name: "Coca-Cola", price: "₹30", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800" },
            { name: "Vanilla Ice Cream", price: "₹40", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800" },
            { name: "Strawberry Ice Cream", price: "₹40", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800" },
        ],
    },
];

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center"
                >
                    <h1 className="text-8xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-none mb-6">
                        THE <span className="text-orange-600">MENU</span>
                    </h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[2px] w-12 bg-orange-600/50" />
                        <p className="text-white/40 uppercase tracking-[0.4em] font-bold text-xs">
                            Artisan Craftsmanship in Every Bite
                        </p>
                        <div className="h-[2px] w-12 bg-orange-600/50" />
                    </div>
                </motion.div>

                {/* Service Icons Section */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24 border-y border-white/5 py-12">
                    {[
                        {
                            name: "Dine-In",
                            desc: "Premium Ambient Seating",
                            icon: (
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                                    <path d="M7 2v20" />
                                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                                </svg>
                            )
                        },
                        {
                            name: "Delivery",
                            desc: "Fast & Fresh to your Door",
                            icon: (
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="6" cy="19" r="2" /><circle cx="18" cy="19" r="2" />
                                    <path d="M10 19h4" /><path d="M15 19H3" /><path d="M8 19V5c0-1.1.9-2 2-2h4l2 3" />
                                </svg>
                            )
                        },
                        {
                            name: "Takeaway",
                            desc: "Click & Collect in 15m",
                            icon: (
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                                    <path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                                </svg>
                            )
                        }
                    ].map((service, i) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center group cursor-default"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center mb-4 text-white/40 group-hover:text-orange-600 group-hover:border-orange-600/50 group-hover:bg-orange-600/5 transition-all duration-500">
                                {service.icon}
                            </div>
                            <span className="text-xs font-black uppercase tracking-[0.3em] mb-1 group-hover:text-white transition-colors">
                                {service.name}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                                {service.desc}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {menuCategories.map((category, catIdx) => (
                    <div key={category.title} className="mb-32">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight mb-2">
                                {category.title}
                            </h2>
                            <p className="text-white/30 font-medium tracking-wide uppercase text-xs">
                                {category.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.items.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    viewport={{ once: true }}
                                    className="group relative bg-neutral-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-orange-600/30 transition-all duration-500"
                                >
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                            <div className="max-w-[70%]">
                                                <h3 className="text-2xl font-black uppercase italic tracking-tight leading-tight group-hover:text-orange-500 transition-colors">
                                                    {item.name}
                                                </h3>
                                            </div>
                                            <span className="text-2xl font-black italic text-orange-600">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-16 bg-gradient-to-br from-neutral-900 to-black rounded-[3rem] text-center border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] pointer-events-none" />
                    <h3 className="text-5xl md:text-7xl font-black uppercase italic mb-8 tracking-tighter">
                        READY FOR THE <span className="text-orange-600">HEAT?</span>
                    </h3>
                    <button className="slanted-cta bg-orange-600 text-white px-16 py-5 text-2xl font-black uppercase italic tracking-tighter hover:bg-orange-500 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(234,88,12,0.3)]">
                        ORDER NOW
                    </button>
                </motion.div>
            </div>
        </main>
    );
}
