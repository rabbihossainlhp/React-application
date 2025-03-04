const products = [
    {   
        id: 1,
        name: "Samsung Galaxy S21",
        category: "Mobile",
        price: 799.99,
        description: "Latest Samsung Galaxy S21 with 128GB storage and 8GB RAM.",
        imageUrl: "../public/images/products/Samsung_Galaxy_S21_smartphone3.jpg"
    },
    {
        id: 2,
        name: "Apple iPhone 13",
        category: "Mobile",
        price: 999.99,
        description: "New Apple iPhone 13 with 256GB storage and A15 Bionic chip.",
        imageUrl: "../public/images/products/Apple_iPhone_13.jpg"
    },
    {
        id: 3,
        name: "Sony Bravia 55-inch 4K TV",
        category: "TV",
        price: 699.99,
        description: "Sony Bravia 55-inch 4K Ultra HD Smart LED TV with HDR.",
        imageUrl: "../public/images/products/Sony_Bravia_4K_Ultra.jpg"
    },
    {
        id: 4,
        name: "Dell XPS 13",
        category: "Laptop",
        price: 1199.99,
        description: "Dell XPS 13 with 11th Gen Intel Core i7, 16GB RAM, and 512GB SSD.",
        imageUrl: "../public/images/products/Dell_XPS_13_laptop.jpg"
    },
    {
        id: 5,
        name: "Apple MacBook Pro 16",
        category: "Laptop",
        price: 2399.99,
        description: "Apple MacBook Pro 16-inch with M1 Pro chip, 16GB RAM, and 1TB SSD.",
        imageUrl: "../public/images/products/Apple_MacBook_Pro_16inc.jpg"
    },
    {
        id: 6,
        name: "Samsung QLED 65-inch TV",
        category: "TV",
        price: 1299.99,
        description: "Samsung QLED 65-inch 4K Ultra HD Smart TV with Quantum Dot technology.",
        imageUrl: "../public/images/products/Samsung_QLED_65inch_4K_Ultra_HD_Smart_TV.jpg"
    },
    {
        id: 7,
        name: "Google Pixel 6",
        category: "Mobile",
        price: 599.99,
        description: "Google Pixel 6 with 128GB storage and Google Tensor chip.",
        imageUrl: "../public/images/products/Google_pixel_Mobile.jpeg"
    },
    {
        id: 8,
        name: "HP Spectre x360",
        category: "Laptop",
        price: 1399.99,
        description: "HP Spectre x360 2-in-1 laptop with 11th Gen Intel Core i7, 16GB RAM, and 512GB SSD.",
        imageUrl: "../public/images/products/ HP_Spectre_x360.jpeg"
    },
    {
        id: 9,
        name: "LG OLED 55-inch TV",
        category: "TV",
        price: 1499.99,
        description: "LG OLED 55-inch 4K Ultra HD Smart TV with AI ThinQ.",
        imageUrl: "../public/images/products/LG_OLED_55-inch_4K_Ultra_HD_Smart_TV.jpeg"
    },
    {
        id: 10,
        name: "OnePlus 9 Pro",
        category: "Mobile",
        price: 729.99,
        description: "OnePlus 9 Pro with 256GB storage and 12GB RAM.",
        imageUrl: "../public/images/products/ OnePlus9_Pro_smartphone .jpeg"
    },
    {
        id: 11,
        name: "Microsoft Surface Laptop 4",
        category: "Laptop",
        price: 1599.99,
        description: "Microsoft Surface Laptop 4 with AMD Ryzen 7, 16GB RAM, and 512GB SSD.",
        imageUrl: "../public/images/products/Microsof_ Surface_Laptop_4_with_AMD.jpeg"
    },
    {
        id: 12,
        name: "Sony Xperia 1 III",
        category: "Mobile",
        price: 1199.99,
        description: "Sony Xperia 1 III with 256GB storage and 12GB RAM.",
        imageUrl: "../public/images/products/Sony_Xperia1III.jpeg"
    },
    {
        id: 13,
        name: "Asus ROG Zephyrus G14",
        category: "Laptop",
        price: 1499.99,
        description: "Asus ROG Zephyrus G14 gaming laptop with AMD Ryzen 9, 16GB RAM, and 1TB SSD.",
        imageUrl: "../public/images/products/Asus_ROG_ZephyrusG14.jpeg"
    },
    {
        id: 14,
        name: "Samsung Galaxy Tab S7",
        category: "Tablet",
        price: 649.99,
        description: "Samsung Galaxy Tab S7 with 128GB storage and 6GB RAM.",
        imageUrl: "../public/images/products/Samsung_Galaxy_Tab_S7.jpeg"
    },
    {
        id: 15,
        name: "Apple iPad Pro 12.9",
        category: "Tablet",
        price: 1099.99,
        description: "Apple iPad Pro 12.9-inch with M1 chip, 128GB storage, and 8GB RAM.",
        imageUrl: "../public/images/products/ Apple_iPad_Pro_12.9.jpeg"
    },
    {
        id: 16,
        name: "Lenovo ThinkPad X1 Carbon",
        category: "Laptop",
        price: 1799.99,
        description: "Lenovo ThinkPad X1 Carbon with 11th Gen Intel Core i7, 16GB RAM, and 1TB SSD.",
        imageUrl: "../public/images/products/ Lenovo_ThinkPad_X1_Carbon.jpeg"
    },
    {
        id: 17,
        name: "Samsung Galaxy Watch 4",
        category: "Wearable",
        price: 249.99,
        description: "Samsung Galaxy Watch 4 with advanced health monitoring features.",
        imageUrl: "../public/images/products/Samsung_Galaxy_Watch_4.jpeg"
    },
    {
        id: 18,
        name: "Apple Watch Series 7",
        category: "Wearable",
        price: 399.99,
        description: "Apple Watch Series 7 with larger display and advanced health features.",
        imageUrl: "../public/images/products/ Apple_Watch_Serie_ 7.jpeg"
    },
    {
        id: 19, 
        name: "Sony WH-1000XM4",
        category: "Headphones",
        price: 349.99,
        description: "Sony WH-1000XM4 wireless noise-canceling over-ear headphones.",
        imageUrl: "../public/images/products/Sony_WH-1000XM4.jpeg"
    },
    {
        id: 20,
        name: "Bose QuietComfort 35 II",
        category: "Headphones",
        price: 299.99,
        description: "Bose QuietComfort 35 II wireless noise-canceling headphones.",
        imageUrl: "../public/images/products/Bose_QuietComfort 35 .jpeg"
    },
    {
        id: 21,
        name: "Canon EOS R5",
        category: "Camera",
        price: 3899.99,
        description: "Canon EOS R5 full-frame mirrorless camera with 45MP sensor.",
        imageUrl: "../public/images/products/Canon_EOS_R5.jpeg"
    },
    {
        id: 22,
        name: "Nikon Z6 II",
        category: "Camera",
        price: 1999.99,
        description: "Nikon Z6 II full-frame mirrorless camera with 24.5MP sensor.",
        imageUrl: "../public/images/products/Nikon_Z6.jpeg"
    }
];

export default products;