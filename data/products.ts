export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "pepperoni",
        name: "Double Char",
        subName: "The OG Crisp.",
        price: "₹599",
        description: "Cup-and-char pepperoni - Hot Honey - 48hr Sourdough",
        folderPath: "/images/pepperoni",
        themeColor: "#E64A19",
        gradient: "linear-gradient(135deg, #2C0E0E 0%, #000000 100%)",
        features: ["Aged Pepperoni", "Hot Honey Drizzle", "Wood Fired"],
        stats: [{ label: "Heat", val: "Med" }, { label: "Hydration", val: "75%" }, { label: "Char", val: "100%" }],
        section1: { title: "Art of the Char.", subtitle: "Smoke, Fire, and 48-Hour Patience." },
        section2: { title: "900°F Volcanic Heat.", subtitle: "Stone-baked in 90 seconds for the ultimate leopard-spotted crust." },
        section3: { title: "Liquid Gold.", subtitle: "Finished with a drizzle of wild hot honey and aged parmesan." },
        section4: { title: "The Oven Story.", subtitle: "Where every pie is a masterpiece of tradition and fire." },
        detailsSection: {
            title: "The Sourdough Secret",
            description: "Our crust isn't just a vessel; it's the main event. Fermented for 48 hours using a 50-year-old starter, it creates a light, airy 'cornicione' with the signature leopard spotting that only high-intensity wood fire can achieve.",
            imageAlt: "Crust Details"
        },
        freshnessSection: {
            title: "Farm to Table Toppings",
            description: "We source our pepperoni from local heritage pork farmers. Each slice is designed to 'cup' in the oven, trapping its natural oils and creating that perfect crispy edge that snap when you bite.",
        },
        buyNowSection: {
            price: "₹599",
            unit: "12-inch Artisan Pie",
            processingParams: ["Stone Baked", "Hand Stretched", "Organic Flour"],
            deliveryPromise: "Delivered in insulated thermal bags. Guaranteed 140°F upon arrival.",
            returnPolicy: "Perfect Crust Guarantee. If it's soggy, it's on us."
        }
    }
];
