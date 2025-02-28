const products = [
    {   
        id: 1,
        name: "Samsung Galaxy S21",
        category: "Mobile",
        price: 799.99,
        description: "Latest Samsung Galaxy S21 with 128GB storage and 8GB RAM.",
        imageUrl: "https://example.com/images/samsung-galaxy-s21.jpg"
    },
    {
        id: 2,
        name: "Apple iPhone 13",
        category: "Mobile",
        price: 999.99,
        description: "New Apple iPhone 13 with 256GB storage and A15 Bionic chip.",
        imageUrl: "https://example.com/images/iphone-13.jpg"
    },
    {
        id: 3,
        name: "Sony Bravia 55-inch 4K TV",
        category: "TV",
        price: 699.99,
        description: "Sony Bravia 55-inch 4K Ultra HD Smart LED TV with HDR.",
        imageUrl: "https://example.com/images/sony-bravia-55.jpg"
    },
    {
        id: 4,
        name: "Dell XPS 13",
        category: "Laptop",
        price: 1199.99,
        description: "Dell XPS 13 with 11th Gen Intel Core i7, 16GB RAM, and 512GB SSD.",
        imageUrl: "https://example.com/images/dell-xps-13.jpg"
    },
    {
        id: 5,
        name: "Apple MacBook Pro 16",
        category: "Laptop",
        price: 2399.99,
        description: "Apple MacBook Pro 16-inch with M1 Pro chip, 16GB RAM, and 1TB SSD.",
        imageUrl: "https://example.com/images/macbook-pro-16.jpg"
    },
    {
        id: 6,
        name: "Samsung QLED 65-inch TV",
        category: "TV",
        price: 1299.99,
        description: "Samsung QLED 65-inch 4K Ultra HD Smart TV with Quantum Dot technology.",
        imageUrl: "https://example.com/images/samsung-qled-65.jpg"
    },
    {
        id: 7,
        name: "Google Pixel 6",
        category: "Mobile",
        price: 599.99,
        description: "Google Pixel 6 with 128GB storage and Google Tensor chip.",
        imageUrl: "https://example.com/images/google-pixel-6.jpg"
    },
    {
        id: 8,
        name: "HP Spectre x360",
        category: "Laptop",
        price: 1399.99,
        description: "HP Spectre x360 2-in-1 laptop with 11th Gen Intel Core i7, 16GB RAM, and 512GB SSD.",
        imageUrl: "https://example.com/images/hp-spectre-x360.jpg"
    },
    {
        id: 9,
        name: "LG OLED 55-inch TV",
        category: "TV",
        price: 1499.99,
        description: "LG OLED 55-inch 4K Ultra HD Smart TV with AI ThinQ.",
        imageUrl: "https://example.com/images/lg-oled-55.jpg"
    },
    {
        id: 10,
        name: "OnePlus 9 Pro",
        category: "Mobile",
        price: 729.99,
        description: "OnePlus 9 Pro with 256GB storage and 12GB RAM.",
        imageUrl: "https://example.com/images/oneplus-9-pro.jpg"
    },
    {
        id: 11,
        name: "Microsoft Surface Laptop 4",
        category: "Laptop",
        price: 1599.99,
        description: "Microsoft Surface Laptop 4 with AMD Ryzen 7, 16GB RAM, and 512GB SSD.",
        imageUrl: "https://example.com/images/surface-laptop-4.jpg"
    },
    {
        id: 12,
        name: "Sony Xperia 1 III",
        category: "Mobile",
        price: 1199.99,
        description: "Sony Xperia 1 III with 256GB storage and 12GB RAM.",
        imageUrl: "https://example.com/images/sony-xperia-1-iii.jpg"
    },
    {
        id: 13,
        name: "Asus ROG Zephyrus G14",
        category: "Laptop",
        price: 1499.99,
        description: "Asus ROG Zephyrus G14 gaming laptop with AMD Ryzen 9, 16GB RAM, and 1TB SSD.",
        imageUrl: "https://example.com/images/asus-rog-zephyrus-g14.jpg"
    },
    {
        id: 14,
        name: "Samsung Galaxy Tab S7",
        category: "Tablet",
        price: 649.99,
        description: "Samsung Galaxy Tab S7 with 128GB storage and 6GB RAM.",
        imageUrl: "https://example.com/images/galaxy-tab-s7.jpg"
    },
    {
        id: 15,
        name: "Apple iPad Pro 12.9",
        category: "Tablet",
        price: 1099.99,
        description: "Apple iPad Pro 12.9-inch with M1 chip, 128GB storage, and 8GB RAM.",
        imageUrl: "https://example.com/images/ipad-pro-12-9.jpg"
    },
    {
        id: 16,
        name: "Lenovo ThinkPad X1 Carbon",
        category: "Laptop",
        price: 1799.99,
        description: "Lenovo ThinkPad X1 Carbon with 11th Gen Intel Core i7, 16GB RAM, and 1TB SSD.",
        imageUrl: "https://example.com/images/thinkpad-x1-carbon.jpg"
    },
    {
        id: 17,
        name: "Samsung Galaxy Watch 4",
        category: "Wearable",
        price: 249.99,
        description: "Samsung Galaxy Watch 4 with advanced health monitoring features.",
        imageUrl: "https://example.com/images/galaxy-watch-4.jpg"
    },
    {
        id: 18,
        name: "Apple Watch Series 7",
        category: "Wearable",
        price: 399.99,
        description: "Apple Watch Series 7 with larger display and advanced health features.",
        imageUrl: "https://example.com/images/apple-watch-series-7.jpg"
    },
    {
        id: 19,
        name: "Sony WH-1000XM4",
        category: "Headphones",
        price: 349.99,
        description: "Sony WH-1000XM4 wireless noise-canceling over-ear headphones.",
        imageUrl: "https://example.com/images/sony-wh-1000xm4.jpg"
    },
    {
        id: 20,
        name: "Bose QuietComfort 35 II",
        category: "Headphones",
        price: 299.99,
        description: "Bose QuietComfort 35 II wireless noise-canceling headphones.",
        imageUrl: "https://example.com/images/bose-qc35-ii.jpg"
    },
    {
        id: 21,
        name: "Canon EOS R5",
        category: "Camera",
        price: 3899.99,
        description: "Canon EOS R5 full-frame mirrorless camera with 45MP sensor.",
        imageUrl: "https://example.com/images/canon-eos-r5.jpg"
    },
    {
        id: 22,
        name: "Nikon Z6 II",
        category: "Camera",
        price: 1999.99,
        description: "Nikon Z6 II full-frame mirrorless camera with 24.5MP sensor.",
        imageUrl: "https://example.com/images/nikon-z6-ii.jpg"
    },
    {
        id: 23,
        name: "GoPro HERO10",
        category: "Camera",
        price: 499.99,
        description: "GoPro HERO10 Black action camera with 5.3K video recording.",
        imageUrl: "https://example.com/images/gopro-hero10.jpg"
    },
    {
        id: 24,
        name: "DJI Mavic Air 2",
        category: "Drone",
        price: 799.99,
        description: "DJI Mavic Air 2 drone with 48MP camera and 4K video recording.",
        imageUrl: "https://example.com/images/dji-mavic-air-2.jpg"
    },
    {
        id: 25,
        name: "Apple AirPods Pro",
        category: "Earbuds",
        price: 249.99,
        description: "Apple AirPods Pro with active noise cancellation and transparency mode.",
        imageUrl: "https://example.com/images/airpods-pro.jpg"
    },
    {
        id: 26,
        name: "Samsung Galaxy Buds Pro",
        category: "Earbuds",
        price: 199.99,
        description: "Samsung Galaxy Buds Pro with active noise cancellation and 360 Audio.",
        imageUrl: "https://example.com/images/galaxy-buds-pro.jpg"
    },
    {
        id: 27,
        name: "Amazon Echo Dot (4th Gen)",
        category: "Smart Home",
        price: 49.99,
        description: "Amazon Echo Dot (4th Gen) smart speaker with Alexa.",
        imageUrl: "https://example.com/images/echo-dot-4th-gen.jpg"
    },
    {
        id: 28,
        name: "Google Nest Hub (2nd Gen)",
        category: "Smart Home",
        price: 99.99,
        description: "Google Nest Hub (2nd Gen) smart display with Google Assistant.",
        imageUrl: "https://example.com/images/nest-hub-2nd-gen.jpg"
    },
    {
        id: 29,
        name: "Ring Video Doorbell 4",
        category: "Smart Home",
        price: 199.99,
        description: "Ring Video Doorbell 4 with 1080p HD video and improved motion detection.",
        imageUrl: "https://example.com/images/ring-video-doorbell-4.jpg"
    },
    {
        id: 30,
        name: "Philips Hue White and Color Ambiance",
        category: "Smart Home",
        price: 49.99,
        description: "Philips Hue White and Color Ambiance smart bulb with Bluetooth.",
        imageUrl: "https://example.com/images/philips-hue.jpg"
    },
    {
        id: 31,
        name: "Roku Streaming Stick+",
        category: "Streaming Device",
        price: 49.99,
        description: "Roku Streaming Stick+ with 4K HDR streaming and voice remote.",
        imageUrl: "https://example.com/images/roku-streaming-stick-plus.jpg"
    },
    {
        id: 32,
        name: "Apple TV 4K",
        category: "Streaming Device",
        price: 179.99,
        description: "Apple TV 4K with A12 Bionic chip and 64GB storage.",
        imageUrl: "https://example.com/images/apple-tv-4k.jpg"
    },
    {
        id: 33,
        name: "NVIDIA Shield TV Pro",
        category: "Streaming Device",
        price: 199.99,
        description: "NVIDIA Shield TV Pro with 4K HDR streaming and AI upscaling.",
        imageUrl: "https://example.com/images/nvidia-shield-tv-pro.jpg"
    }
];

export default products;