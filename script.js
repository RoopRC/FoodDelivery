/* ========================================
   FOODIEEXPRESS — MAIN APPLICATION
   ======================================== */

// ===== RESTAURANT DATA =====
const restaurants = [
    {
        id: 1, name: "Spice Garden", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=350&fit=crop",
        cuisine: "North Indian, Mughlai", rating: 4.5, deliveryTime: 30, costForTwo: 500, featured: true,
        offer: "50% OFF up to ₹100",
        menu: [
            {
                category: "Starters", items: [
                    { id: 101, name: "Paneer Tikka", desc: "Marinated cottage cheese grilled in tandoor with spices", price: 249, veg: true, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" },
                    { id: 102, name: "Chicken Seekh Kebab", desc: "Minced chicken skewers with aromatic spices", price: 299, veg: false, image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=300&h=200&fit=crop" },
                    { id: 103, name: "Hara Bhara Kebab", desc: "Spinach and pea patties with mint chutney", price: 199, veg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Main Course", items: [
                    { id: 104, name: "Butter Chicken", desc: "Tender chicken in creamy tomato-butter gravy", price: 349, veg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop" },
                    { id: 105, name: "Dal Makhani", desc: "Slow-cooked black lentils in rich buttery gravy", price: 249, veg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
                    { id: 106, name: "Mutton Rogan Josh", desc: "Kashmiri-style mutton curry with aromatic spices", price: 449, veg: false, image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Breads", items: [
                    { id: 107, name: "Butter Naan", desc: "Soft tandoor bread brushed with butter", price: 59, veg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
                    { id: 108, name: "Garlic Naan", desc: "Naan topped with garlic and coriander", price: 79, veg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Desserts", items: [
                    { id: 109, name: "Gulab Jamun", desc: "Deep-fried milk dumplings in sugar syrup", price: 99, veg: true, image: "https://images.unsplash.com/photo-1666190720434-02084889b0f1?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 2, name: "Pizza Paradise", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=350&fit=crop",
        cuisine: "Italian, Pizza", rating: 4.3, deliveryTime: 25, costForTwo: 600, featured: true,
        offer: "FREE delivery",
        menu: [
            {
                category: "Pizzas", items: [
                    { id: 201, name: "Margherita Pizza", desc: "Classic pizza with mozzarella, tomato sauce, and basil", price: 299, veg: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop" },
                    { id: 202, name: "Pepperoni Pizza", desc: "Loaded with spicy pepperoni and mozzarella cheese", price: 399, veg: false, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop" },
                    { id: 203, name: "BBQ Chicken Pizza", desc: "Smoky BBQ sauce with grilled chicken and onions", price: 449, veg: false, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop" },
                    { id: 204, name: "Farmhouse Pizza", desc: "Bell peppers, mushrooms, onions, and olives", price: 349, veg: true, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Pasta", items: [
                    { id: 205, name: "Penne Arrabiata", desc: "Penne in spicy tomato sauce with herbs", price: 279, veg: true, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=200&fit=crop" },
                    { id: 206, name: "Alfredo Pasta", desc: "Creamy white sauce pasta with mushrooms", price: 329, veg: true, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Beverages", items: [
                    { id: 207, name: "Cold Coffee", desc: "Chilled coffee with cream and ice", price: 149, veg: true, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 3, name: "Dragon Wok", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&h=350&fit=crop",
        cuisine: "Chinese, Asian", rating: 4.1, deliveryTime: 35, costForTwo: 450, featured: true,
        offer: "20% OFF on orders above ₹300",
        menu: [
            {
                category: "Starters", items: [
                    { id: 301, name: "Veg Spring Rolls", desc: "Crispy rolls stuffed with mixed vegetables", price: 179, veg: true, image: "https://images.unsplash.com/photo-1539735257881-5700bac4b5c4?w=300&h=200&fit=crop" },
                    { id: 302, name: "Chicken Momos", desc: "Steamed dumplings with spicy chicken filling", price: 199, veg: false, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=200&fit=crop" },
                    { id: 303, name: "Crispy Chilli Paneer", desc: "Deep-fried paneer tossed in chilli sauce", price: 229, veg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Main Course", items: [
                    { id: 304, name: "Veg Fried Rice", desc: "Wok-tossed rice with mixed vegetables", price: 199, veg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
                    { id: 305, name: "Chicken Manchurian", desc: "Chicken balls in tangy Manchurian sauce", price: 279, veg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" },
                    { id: 306, name: "Hakka Noodles", desc: "Stir-fried noodles with vegetables and soy sauce", price: 219, veg: true, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 4, name: "Burger Barn", image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&h=350&fit=crop",
        cuisine: "Burgers, American", rating: 4.4, deliveryTime: 20, costForTwo: 400, featured: true,
        offer: "Buy 1 Get 1 FREE",
        menu: [
            {
                category: "Burgers", items: [
                    { id: 401, name: "Classic Cheese Burger", desc: "Juicy patty with cheddar cheese from fresh lettuce and tomato", price: 199, veg: false, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 402, name: "Veg Supreme Burger", desc: "Crispy veggie patty with special sauce", price: 179, veg: true, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop" },
                    { id: 403, name: "Double Smash Burger", desc: "Two smashed patties with bacon and cheese", price: 349, veg: false, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Sides", items: [
                    { id: 404, name: "French Fries", desc: "Crispy golden fries with seasoning", price: 129, veg: true, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop" },
                    { id: 405, name: "Onion Rings", desc: "Crispy battered onion rings", price: 149, veg: true, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Beverages", items: [
                    { id: 406, name: "Chocolate Shake", desc: "Thick and creamy chocolate milkshake", price: 179, veg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 5, name: "Biryani Blues", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop",
        cuisine: "Biryani, Hyderabadi", rating: 4.6, deliveryTime: 40, costForTwo: 550, featured: false,
        offer: "₹75 OFF on first order",
        menu: [
            {
                category: "Biryani", items: [
                    { id: 501, name: "Hyderabadi Chicken Biryani", desc: "Aromatic basmati rice layered with spiced chicken", price: 329, veg: false, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=200&fit=crop" },
                    { id: 502, name: "Mutton Biryani", desc: "Rich and flavorful mutton dum biryani", price: 429, veg: false, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop" },
                    { id: 503, name: "Veg Biryani", desc: "Mixed vegetables in fragrant basmati rice", price: 249, veg: true, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Sides", items: [
                    { id: 504, name: "Raita", desc: "Cool yogurt with cucumber and mint", price: 59, veg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
                    { id: 505, name: "Mirchi Ka Salan", desc: "Spicy peanut-sesame curry with green chillies", price: 149, veg: true, image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 6, name: "Sushi Samurai", image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=500&h=350&fit=crop",
        cuisine: "Japanese, Sushi", rating: 4.7, deliveryTime: 45, costForTwo: 900, featured: false,
        offer: "15% OFF on orders above ₹500",
        menu: [
            {
                category: "Sushi Rolls", items: [
                    { id: 601, name: "California Roll", desc: "Crab, avocado, cucumber wrapped in nori", price: 399, veg: false, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop" },
                    { id: 602, name: "Veg Tempura Roll", desc: "Crispy vegetable tempura in sushi rice", price: 349, veg: true, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop" },
                    { id: 603, name: "Salmon Nigiri", desc: "Fresh salmon over pressed sushi rice", price: 449, veg: false, image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Bowls", items: [
                    { id: 604, name: "Teriyaki Chicken Bowl", desc: "Grilled chicken with teriyaki glaze over rice", price: 379, veg: false, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop" },
                    { id: 605, name: "Edamame", desc: "Steamed soybeans with sea salt", price: 179, veg: true, image: "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 7, name: "Dosa Factory", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&h=350&fit=crop",
        cuisine: "South Indian", rating: 4.2, deliveryTime: 25, costForTwo: 300, featured: false,
        offer: "FREE filter coffee",
        menu: [
            {
                category: "Dosas", items: [
                    { id: 701, name: "Masala Dosa", desc: "Crispy crepe with spiced potato filling", price: 149, veg: true, image: "https://images.unsplash.com/photo-1668236543090-82eb5eace780?w=300&h=200&fit=crop" },
                    { id: 702, name: "Mysore Masala Dosa", desc: "Dosa with spicy chutney spread and potato", price: 179, veg: true, image: "https://images.unsplash.com/photo-1668236543090-82eb5eace780?w=300&h=200&fit=crop" },
                    { id: 703, name: "Rava Dosa", desc: "Crispy semolina dosa with onions", price: 159, veg: true, image: "https://images.unsplash.com/photo-1668236543090-82eb5eace780?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Meals", items: [
                    { id: 704, name: "South Indian Thali", desc: "Rice, sambar, rasam, curd, papad, pickle", price: 199, veg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
                    { id: 705, name: "Idli Sambar", desc: "Steamed rice cakes with lentil soup", price: 99, veg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Beverages", items: [
                    { id: 706, name: "Filter Coffee", desc: "Traditional South Indian filter coffee", price: 69, veg: true, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 8, name: "Taco Fiesta", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=350&fit=crop",
        cuisine: "Mexican, Tex-Mex", rating: 4.0, deliveryTime: 30, costForTwo: 500, featured: false,
        offer: "Combo meals from ₹299",
        menu: [
            {
                category: "Tacos & Burritos", items: [
                    { id: 801, name: "Chicken Tacos", desc: "Soft tortilla with spiced chicken and salsa", price: 249, veg: false, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=200&fit=crop" },
                    { id: 802, name: "Veg Burrito", desc: "Loaded burrito with beans, rice and veggies", price: 279, veg: true, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 803, name: "Quesadilla", desc: "Grilled tortilla filled with cheese and veggies", price: 229, veg: true, image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Sides", items: [
                    { id: 804, name: "Nachos with Salsa", desc: "Crispy tortilla chips with fresh salsa", price: 179, veg: true, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop" },
                    { id: 805, name: "Guacamole", desc: "Freshly made avocado dip", price: 149, veg: true, image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 9, name: "Sweet Tooth Bakery", image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=500&h=350&fit=crop",
        cuisine: "Desserts, Bakery", rating: 4.8, deliveryTime: 20, costForTwo: 350, featured: false,
        offer: "Free brownie on orders above ₹250",
        menu: [
            {
                category: "Cakes", items: [
                    { id: 901, name: "Chocolate Truffle Cake", desc: "Rich and decadent chocolate layer cake", price: 499, veg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop" },
                    { id: 902, name: "Red Velvet Cake", desc: "Classic red velvet with cream cheese frosting", price: 549, veg: true, image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Pastries", items: [
                    { id: 903, name: "Chocolate Brownie", desc: "Warm fudgy brownie with walnuts", price: 149, veg: true, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop" },
                    { id: 904, name: "Blueberry Cheesecake", desc: "Creamy cheesecake with blueberry compote", price: 249, veg: true, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop" },
                    { id: 905, name: "Croissant", desc: "Buttery flaky French croissant", price: 129, veg: true, image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 10, name: "Tandoori Junction", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&h=350&fit=crop",
        cuisine: "Tandoori, Kebabs, North Indian", rating: 4.3, deliveryTime: 35, costForTwo: 650, featured: false,
        offer: "30% OFF on kebab platters",
        menu: [
            {
                category: "Tandoori Specials", items: [
                    { id: 1001, name: "Tandoori Chicken", desc: "Whole chicken marinated in yogurt and spices", price: 399, veg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" },
                    { id: 1002, name: "Paneer Tikka Platter", desc: "Assortment of grilled cottage cheese tikka", price: 329, veg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop" },
                    { id: 1003, name: "Seekh Kebab Platter", desc: "Mix of chicken and mutton seekh kebabs", price: 449, veg: false, image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Curries", items: [
                    { id: 1004, name: "Kadhai Paneer", desc: "Paneer cooked in spicy kadhai masala", price: 279, veg: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
                    { id: 1005, name: "Chicken Tikka Masala", desc: "Grilled chicken in rich tomato-cream gravy", price: 349, veg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Breads", items: [
                    { id: 1006, name: "Tandoori Roti", desc: "Whole wheat bread baked in tandoor", price: 39, veg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 11, name: "Royal Mughlai Kitchen", image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=500&h=350&fit=crop",
        cuisine: "North Indian, Mughlai", rating: 4.4, deliveryTime: 35, costForTwo: 600, featured: false,
        offer: "Flat ₹120 OFF",
        menu: [
            {
                category: "Starters", items: [
                    { id: 1101, name: "Reshmi Kebab", desc: "Silky smooth chicken kebabs with cream", price: 319, veg: false, image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=300&h=200&fit=crop" },
                    { id: 1102, name: "Dahi Ke Kebab", desc: "Hung curd kebabs with aromatic spices", price: 229, veg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Main Course", items: [
                    { id: 1103, name: "Mughlai Chicken Curry", desc: "Rich and creamy chicken curry with nuts", price: 379, veg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop" },
                    { id: 1104, name: "Shahi Paneer", desc: "Paneer in rich tomato and cashew gravy", price: 289, veg: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
                    { id: 1105, name: "Nihari", desc: "Slow-cooked mutton stew with spices", price: 449, veg: false, image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Breads", items: [
                    { id: 1106, name: "Sheermal", desc: "Sweet saffron-flavored naan", price: 89, veg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 12, name: "Cheesy Slice", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=350&fit=crop",
        cuisine: "Italian, Pizza", rating: 4.2, deliveryTime: 20, costForTwo: 500, featured: false,
        offer: "Buy 2 Get 1 FREE",
        menu: [
            {
                category: "Pizzas", items: [
                    { id: 1201, name: "Four Cheese Pizza", desc: "Mozzarella, parmesan, cheddar and gouda", price: 449, veg: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop" },
                    { id: 1202, name: "Meat Lovers Pizza", desc: "Pepperoni, sausage, ham and bacon", price: 499, veg: false, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop" },
                    { id: 1203, name: "Veggie Supreme", desc: "Loaded with fresh vegetables and herbs", price: 379, veg: true, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Sides", items: [
                    { id: 1204, name: "Garlic Breadsticks", desc: "Oven-baked with garlic butter and herbs", price: 159, veg: true, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 13, name: "Wok & Roll", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=500&h=350&fit=crop",
        cuisine: "Chinese, Asian", rating: 4.3, deliveryTime: 30, costForTwo: 400, featured: false,
        offer: "Free soup with every main",
        menu: [
            {
                category: "Starters", items: [
                    { id: 1301, name: "Honey Chilli Potato", desc: "Crispy potatoes tossed in sweet chilli sauce", price: 189, veg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop" },
                    { id: 1302, name: "Chicken Lollipop", desc: "Crispy fried chicken drumettes with spicy glaze", price: 249, veg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Main Course", items: [
                    { id: 1303, name: "Schezwan Noodles", desc: "Spicy Schezwan sauce tossed noodles", price: 229, veg: true, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" },
                    { id: 1304, name: "Dragon Chicken", desc: "Crispy chicken in fiery dragon sauce", price: 299, veg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" },
                    { id: 1305, name: "Veg Manchurian Gravy", desc: "Vegetable balls in tangy Manchurian sauce", price: 219, veg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 14, name: "Smashville Burgers", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=350&fit=crop",
        cuisine: "Burgers, American", rating: 4.5, deliveryTime: 15, costForTwo: 450, featured: false,
        offer: "₹99 Burger Combo",
        menu: [
            {
                category: "Burgers", items: [
                    { id: 1401, name: "Truffle Mushroom Burger", desc: "Juicy patty with truffle aioli and mushrooms", price: 349, veg: false, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 1402, name: "Crispy Chicken Burger", desc: "Crispy fried chicken with spicy mayo", price: 249, veg: false, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=200&fit=crop" },
                    { id: 1403, name: "Black Bean Veggie Burger", desc: "Homemade black bean patty with fresh salsa", price: 219, veg: true, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Wraps", items: [
                    { id: 1404, name: "Chicken Caesar Wrap", desc: "Grilled chicken with caesar dressing in tortilla", price: 229, veg: false, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 15, name: "Dum Biryani House", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&h=350&fit=crop",
        cuisine: "Biryani, Hyderabadi", rating: 4.5, deliveryTime: 45, costForTwo: 500, featured: false,
        offer: "Extra raita free",
        menu: [
            {
                category: "Biryani", items: [
                    { id: 1501, name: "Lucknowi Chicken Biryani", desc: "Awadhi-style light and fragrant chicken biryani", price: 349, veg: false, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=200&fit=crop" },
                    { id: 1502, name: "Egg Biryani", desc: "Spiced rice with perfectly boiled eggs", price: 229, veg: false, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop" },
                    { id: 1503, name: "Paneer Biryani", desc: "Cottage cheese biryani with saffron", price: 279, veg: true, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Sides", items: [
                    { id: 1504, name: "Double Ka Meetha", desc: "Hyderabadi bread pudding dessert", price: 129, veg: true, image: "https://images.unsplash.com/photo-1666190720434-02084889b0f1?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 16, name: "Sakura Bento", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&h=350&fit=crop",
        cuisine: "Japanese, Sushi", rating: 4.6, deliveryTime: 40, costForTwo: 850, featured: false,
        offer: "10% OFF on bento boxes",
        menu: [
            {
                category: "Sushi Rolls", items: [
                    { id: 1601, name: "Dragon Roll", desc: "Eel and cucumber topped with avocado", price: 499, veg: false, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop" },
                    { id: 1602, name: "Avocado Maki", desc: "Simple avocado roll with wasabi", price: 299, veg: true, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Bento Boxes", items: [
                    { id: 1603, name: "Chicken Katsu Bento", desc: "Breaded chicken cutlet with rice and salad", price: 449, veg: false, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop" },
                    { id: 1604, name: "Ramen Bowl", desc: "Rich tonkotsu broth ramen with toppings", price: 399, veg: false, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 17, name: "Udupi Sagar", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&h=350&fit=crop",
        cuisine: "South Indian", rating: 4.3, deliveryTime: 20, costForTwo: 250, featured: false,
        offer: "Breakfast combo ₹99",
        menu: [
            {
                category: "Dosas", items: [
                    { id: 1701, name: "Paper Dosa", desc: "Ultra-thin crispy dosa served with chutneys", price: 119, veg: true, image: "https://images.unsplash.com/photo-1668236543090-82eb5eace780?w=300&h=200&fit=crop" },
                    { id: 1702, name: "Cheese Dosa", desc: "Dosa loaded with melted cheese", price: 179, veg: true, image: "https://images.unsplash.com/photo-1668236543090-82eb5eace780?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Snacks", items: [
                    { id: 1703, name: "Medu Vada", desc: "Crispy lentil donuts with sambar", price: 89, veg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop" },
                    { id: 1704, name: "Pongal", desc: "South Indian comfort food with ghee", price: 109, veg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 18, name: "El Mexicano", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=350&fit=crop",
        cuisine: "Mexican, Tex-Mex", rating: 4.2, deliveryTime: 35, costForTwo: 550, featured: false,
        offer: "Free nachos on ₹400+",
        menu: [
            {
                category: "Tacos & Burritos", items: [
                    { id: 1801, name: "Fish Tacos", desc: "Crispy fish with slaw and chipotle mayo", price: 299, veg: false, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=200&fit=crop" },
                    { id: 1802, name: "Chicken Burrito Bowl", desc: "Deconstructed burrito with all the fixings", price: 329, veg: false, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 1803, name: "Bean & Cheese Enchiladas", desc: "Corn tortillas filled with beans and cheese", price: 269, veg: true, image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 19, name: "The Cake Studio", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=350&fit=crop",
        cuisine: "Desserts, Bakery", rating: 4.7, deliveryTime: 25, costForTwo: 400, featured: false,
        offer: "20% off on cakes",
        menu: [
            {
                category: "Cakes", items: [
                    { id: 1901, name: "Tiramisu Cake", desc: "Italian coffee-flavored layered dessert", price: 599, veg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop" },
                    { id: 1902, name: "Mango Mousse Cake", desc: "Light and airy mango mousse layers", price: 499, veg: true, image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Ice Cream", items: [
                    { id: 1903, name: "Belgian Chocolate Sundae", desc: "Scoops of chocolate ice cream with fudge sauce", price: 199, veg: true, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop" },
                    { id: 1904, name: "Cookie Dough Shake", desc: "Thick shake with cookie dough chunks", price: 229, veg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 20, name: "Kebab Street", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=350&fit=crop",
        cuisine: "Kebabs, North Indian", rating: 4.4, deliveryTime: 30, costForTwo: 550, featured: false,
        offer: "Kebab platter ₹399",
        menu: [
            {
                category: "Kebabs", items: [
                    { id: 2001, name: "Galouti Kebab", desc: "Melt-in-mouth Lucknowi mutton kebabs", price: 399, veg: false, image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=300&h=200&fit=crop" },
                    { id: 2002, name: "Chicken Malai Tikka", desc: "Creamy and juicy chicken tikka", price: 329, veg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" },
                    { id: 2003, name: "Mushroom Galouti", desc: "Vegetarian galouti with mushrooms and spices", price: 279, veg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Rolls", items: [
                    { id: 2004, name: "Chicken Kathi Roll", desc: "Spiced chicken wrapped in paratha", price: 179, veg: false, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 2005, name: "Paneer Tikka Roll", desc: "Grilled paneer wrapped in soft paratha", price: 159, veg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 21, name: "Punjab Da Dhaba", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=350&fit=crop",
        cuisine: "North Indian, Punjabi", rating: 4.1, deliveryTime: 30, costForTwo: 400, featured: false,
        offer: "Thali combo ₹199",
        menu: [
            {
                category: "Main Course", items: [
                    { id: 2101, name: "Chole Bhature", desc: "Spiced chickpea curry with fried bread", price: 179, veg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
                    { id: 2102, name: "Rajma Chawal", desc: "Kidney bean curry with steamed rice", price: 169, veg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
                    { id: 2103, name: "Sarson Ka Saag", desc: "Mustard greens with makki ki roti", price: 199, veg: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Lassi", items: [
                    { id: 2104, name: "Sweet Lassi", desc: "Thick creamy yogurt drink", price: 79, veg: true, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 22, name: "Napoli Express", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=350&fit=crop",
        cuisine: "Italian, Pizza", rating: 4.6, deliveryTime: 30, costForTwo: 700, featured: false,
        offer: "Free garlic bread",
        menu: [
            {
                category: "Pizzas", items: [
                    { id: 2201, name: "Neapolitan Pizza", desc: "Authentic wood-fired with San Marzano tomatoes", price: 549, veg: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop" },
                    { id: 2202, name: "Prosciutto & Arugula", desc: "Thin crust with prosciutto and fresh arugula", price: 599, veg: false, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Pasta", items: [
                    { id: 2203, name: "Carbonara", desc: "Classic Roman pasta with egg, pecorino, guanciale", price: 399, veg: false, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=200&fit=crop" },
                    { id: 2204, name: "Aglio e Olio", desc: "Spaghetti with garlic, olive oil and chili flakes", price: 299, veg: true, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 23, name: "Golden Dragon", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=500&h=350&fit=crop",
        cuisine: "Chinese, Asian", rating: 4.0, deliveryTime: 25, costForTwo: 350, featured: false,
        offer: "Combo meal ₹249",
        menu: [
            {
                category: "Soups", items: [
                    { id: 2301, name: "Hot & Sour Soup", desc: "Classic spicy and tangy vegetable soup", price: 129, veg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
                    { id: 2302, name: "Chicken Sweet Corn Soup", desc: "Creamy chicken soup with sweet corn", price: 149, veg: false, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Main Course", items: [
                    { id: 2303, name: "Kung Pao Chicken", desc: "Sichuan spiced chicken with peanuts", price: 289, veg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" },
                    { id: 2304, name: "Crispy Chilli Corn", desc: "Golden fried corn kernels in chilli sauce", price: 179, veg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 24, name: "Patty King", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=350&fit=crop",
        cuisine: "Burgers, American", rating: 4.2, deliveryTime: 18, costForTwo: 350, featured: false,
        offer: "Meal deal ₹199",
        menu: [
            {
                category: "Burgers", items: [
                    { id: 2401, name: "BBQ Bacon Burger", desc: "Smoky BBQ sauce with crispy bacon strips", price: 299, veg: false, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 2402, name: "Spicy Paneer Burger", desc: "Crispy paneer patty with jalapeños", price: 199, veg: true, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Sides", items: [
                    { id: 2403, name: "Loaded Fries", desc: "Fries topped with cheese sauce and jalapeños", price: 169, veg: true, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop" },
                    { id: 2404, name: "Chicken Wings", desc: "Buffalo-style hot wings with blue cheese dip", price: 249, veg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 25, name: "Bawarchi Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=350&fit=crop",
        cuisine: "Biryani, Mughlai", rating: 4.3, deliveryTime: 40, costForTwo: 450, featured: false,
        offer: "Family pack ₹599",
        menu: [
            {
                category: "Biryani", items: [
                    { id: 2501, name: "Kolkata Chicken Biryani", desc: "Light biryani with potato and egg", price: 279, veg: false, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=200&fit=crop" },
                    { id: 2502, name: "Keema Biryani", desc: "Minced meat biryani with fragrant spices", price: 329, veg: false, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop" },
                    { id: 2503, name: "Mushroom Biryani", desc: "Aromatic rice with mixed mushrooms", price: 249, veg: true, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 26, name: "Tokyo Ramen Bar", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=350&fit=crop",
        cuisine: "Japanese, Asian", rating: 4.5, deliveryTime: 35, costForTwo: 750, featured: false,
        offer: "Ramen + Gyoza combo",
        menu: [
            {
                category: "Ramen", items: [
                    { id: 2601, name: "Spicy Miso Ramen", desc: "Rich miso broth with chashu pork", price: 449, veg: false, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" },
                    { id: 2602, name: "Vegetable Shoyu Ramen", desc: "Soy-based broth with seasonal vegetables", price: 379, veg: true, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Appetizers", items: [
                    { id: 2603, name: "Gyoza (6 pcs)", desc: "Pan-fried Japanese dumplings", price: 249, veg: false, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=200&fit=crop" },
                    { id: 2604, name: "Tempura Udon", desc: "Thick noodles in dashi broth with tempura", price: 399, veg: true, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 27, name: "Anna's Kitchen", image: "https://img.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
        cuisine: "South Indian", rating: 4.4, deliveryTime: 25, costForTwo: 280, featured: false,
        offer: "Mini meals ₹129",
        menu: [
            {
                category: "Dosas", items: [
                    { id: 2701, name: "Ghee Roast Dosa", desc: "Golden crispy dosa roasted in pure ghee", price: 169, veg: true, image: "https://img.unsplash.com/photo-1618164436241-4473ca686378?w=300&h=200&fit=crop" },
                    { id: 2702, name: "Set Dosa", desc: "Soft and spongy small dosas (3 pcs)", price: 139, veg: true, image: "https://img.unsplash.com/photo-1618164436241-4473ca686378?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Rice Varieties", items: [
                    { id: 2703, name: "Lemon Rice", desc: "Tangy rice tempered with peanuts and curry leaves", price: 129, veg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
                    { id: 2704, name: "Curd Rice", desc: "Comforting yogurt rice with tempering", price: 99, veg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 28, name: "Burrito Bros", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=350&fit=crop",
        cuisine: "Mexican, Tex-Mex", rating: 4.1, deliveryTime: 25, costForTwo: 450, featured: false,
        offer: "Wrap Wednesday 30% OFF",
        menu: [
            {
                category: "Burritos", items: [
                    { id: 2801, name: "Steak Burrito", desc: "Grilled steak with rice, beans and pico de gallo", price: 349, veg: false, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 2802, name: "Veggie Fajita Burrito", desc: "Grilled peppers and onions with guacamole", price: 279, veg: true, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Bowls", items: [
                    { id: 2803, name: "Mexican Rice Bowl", desc: "Cilantro lime rice with black beans and salsa", price: 249, veg: true, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 29, name: "Sugar Rush", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=350&fit=crop",
        cuisine: "Desserts, Bakery", rating: 4.5, deliveryTime: 20, costForTwo: 300, featured: false,
        offer: "Dessert box ₹449",
        menu: [
            {
                category: "Waffles & Pancakes", items: [
                    { id: 2901, name: "Belgian Waffles", desc: "Crispy waffles with maple syrup and berries", price: 229, veg: true, image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=300&h=200&fit=crop" },
                    { id: 2902, name: "Nutella Pancakes", desc: "Fluffy pancakes drizzled with Nutella", price: 199, veg: true, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Milkshakes", items: [
                    { id: 2903, name: "Oreo Shake", desc: "Thick Oreo cookie milkshake with whipped cream", price: 179, veg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop" },
                    { id: 2904, name: "Strawberry Cheesecake Shake", desc: "Blended strawberry cheesecake goodness", price: 199, veg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {
        id: 30, name: "Grill Masters", image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=500&h=350&fit=crop",
        cuisine: "Kebabs, Tandoori", rating: 4.3, deliveryTime: 35, costForTwo: 600, featured: false,
        offer: "Grill platter ₹499",
        menu: [
            {
                category: "Grills", items: [
                    { id: 3001, name: "Afghani Chicken", desc: "Cream and cheese marinated grilled chicken", price: 379, veg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" },
                    { id: 3002, name: "Lamb Chops", desc: "Tender lamb chops with rosemary and garlic", price: 549, veg: false, image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=300&h=200&fit=crop" },
                    { id: 3003, name: "Stuffed Mushroom Tikka", desc: "Mushrooms stuffed with cheese and herbs", price: 279, veg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop" }
                ]
            },
            {
                category: "Platters", items: [
                    { id: 3004, name: "Mixed Grill Platter", desc: "Assortment of grilled meats and veggies", price: 599, veg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" }
                ]
            }
        ]
    }
];

const cuisineCategories = [
    { name: "Pizza", emoji: "🍕", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=300&fit=crop", count: "50+ places" },
    { name: "Biryani", emoji: "🍛", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a104?w=300&h=300&fit=crop", count: "40+ places" },
    { name: "Burgers", emoji: "🍔", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop", count: "60+ places" },
    { name: "Chinese", emoji: "🥡", image: "https://images.unsplash.com/photo-1585238341710-4dab386b9b38?w=300&h=300&fit=crop", count: "35+ places" },
    { name: "South Indian", emoji: "🥘", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop", count: "30+ places" },
    { name: "Desserts", emoji: "🍰", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop", count: "45+ places" },
    { name: "Japanese", emoji: "🍣", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop", count: "15+ places" },
    { name: "Mexican", emoji: "🌮", image: "https://images.unsplash.com/photo-1565836409698-60af2b1c4368?w=300&h=300&fit=crop", count: "20+ places" },
    { name: "North Indian", emoji: "🍲", image: "https://images.unsplash.com/photo-1585518419759-6c6b0160a0c9?w=300&h=300&fit=crop", count: "55+ places" },
    { name: "Kebabs", emoji: "🥙", image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd0b4b8?w=300&h=300&fit=crop", count: "25+ places" }
];

// ===== CART MODULE =====
const Cart = {
    KEY: 'foodieexpress_cart',
    get() {
        try { return JSON.parse(localStorage.getItem(this.KEY)) || { restaurantId: null, restaurantName: '', items: [] }; }
        catch { return { restaurantId: null, restaurantName: '', items: [] }; }
    },
    save(cart) { localStorage.setItem(this.KEY, JSON.stringify(cart)); this.updateBadge(); },
    clear() { localStorage.removeItem(this.KEY); this.updateBadge(); },
    getTotalItems() { return this.get().items.reduce((sum, i) => sum + i.qty, 0); },
    getTotalPrice() { return this.get().items.reduce((sum, i) => sum + i.price * i.qty, 0); },
    addItem(restaurantId, restaurantName, item) {
        let cart = this.get();
        if (cart.restaurantId && cart.restaurantId !== restaurantId) {
            if (!confirm('Your cart has items from another restaurant. Clear cart and add this item?')) return false;
            cart = { restaurantId: null, restaurantName: '', items: [] };
        }
        cart.restaurantId = restaurantId;
        cart.restaurantName = restaurantName;
        const existing = cart.items.find(i => i.itemId === item.id);
        if (existing) { existing.qty++; }
        else { cart.items.push({ itemId: item.id, name: item.name, price: item.price, qty: 1, veg: item.veg }); }
        this.save(cart);
        return true;
    },
    updateQty(itemId, delta) {
        const cart = this.get();
        const item = cart.items.find(i => i.itemId === itemId);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) cart.items = cart.items.filter(i => i.itemId !== itemId);
        if (cart.items.length === 0) { this.clear(); return; }
        this.save(cart);
    },
    removeItem(itemId) {
        const cart = this.get();
        cart.items = cart.items.filter(i => i.itemId !== itemId);
        if (cart.items.length === 0) { this.clear(); return; }
        this.save(cart);
    },
    getItemQty(itemId) {
        const cart = this.get();
        const item = cart.items.find(i => i.itemId === itemId);
        return item ? item.qty : 0;
    },
    updateBadge() {
        const badges = document.querySelectorAll('#cartBadge');
        const total = this.getTotalItems();
        badges.forEach(b => { b.textContent = total; b.classList.toggle('show', total > 0); });
    }
};

// ===== TOAST NOTIFICATION =====
function showToast(message, icon = '✅') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span>${message}`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 2500);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.15 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar || !navbar.classList.contains('transparent')) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('transparent', window.scrollY <= 80);
        navbar.classList.toggle('scrolled', window.scrollY > 80);
    });
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    const links = document.getElementById('navLinks');
    if (links) links.classList.toggle('mobile-open');
}

// ===== RENDER HELPERS =====
function renderRestaurantCard(r) {
    const ratingClass = r.rating >= 4.0 ? '' : ' low';
    return `
    <a href="restaurant.html?id=${r.id}" class="restaurant-card" id="restaurant-${r.id}">
      <div class="restaurant-card-img">
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        ${r.offer ? `<div class="offer-badge">${r.offer}</div>` : ''}
      </div>
      <div class="restaurant-card-body">
        <div class="restaurant-card-header">
          <h3>${r.name}</h3>
          <div class="rating-badge${ratingClass}">★ ${r.rating}</div>
        </div>
        <p class="restaurant-card-cuisine">${r.cuisine}</p>
        <div class="restaurant-card-meta">
          <span>🕐 ${r.deliveryTime} min</span>
          <span>₹${r.costForTwo} for two</span>
        </div>
      </div>
    </a>`;
}

function renderMenuItemButton(item, restaurantId) {
    const qty = Cart.getItemQty(item.id);
    if (qty > 0) {
        return `<div class="qty-control" data-item-id="${item.id}">
      <button onclick="handleMenuQty(event, ${item.id}, -1, ${restaurantId})">−</button>
      <span class="qty-value">${qty}</span>
      <button onclick="handleMenuQty(event, ${item.id}, 1, ${restaurantId})">+</button>
    </div>`;
    }
    return `<button class="add-btn" onclick="handleAddToCart(event, ${item.id}, ${restaurantId})">ADD</button>`;
}

// ===== PAGE INITIALIZERS =====

// --- Landing Page ---
function initLandingPage() {
    // Render cuisine categories
    const scroll = document.getElementById('categoriesScroll');
    if (scroll) {
        scroll.innerHTML = cuisineCategories.map(c => `
      <a href="restaurants.html?cuisine=${encodeURIComponent(c.name)}" class="category-card">
        <div class="category-icon" style="background-image: url('${c.image}'); background-size: cover; background-position: center;">
          <div class="category-emoji-overlay">${c.emoji}</div>
        </div>
        <h3>${c.name}</h3>
        <p>${c.count}</p>
      </a>`).join('');
    }
    // Render popular restaurants (featured ones)
    const grid = document.getElementById('popularRestaurants');
    if (grid) {
        grid.innerHTML = restaurants.filter(r => r.featured).map(renderRestaurantCard).join('');
    }
    initNavbarScroll();
}

// --- Restaurants Listing Page ---
function initListingPage() {
    const grid = document.getElementById('restaurantsGrid');
    const chipsContainer = document.getElementById('cuisineChips');
    const searchInput = document.getElementById('searchInput');
    const sortDropdown = document.getElementById('sortDropdown');
    const resultCount = document.getElementById('resultCount');
    if (!grid) return;

    let activeCuisine = '';
    // Check URL params for cuisine filter
    const params = new URLSearchParams(window.location.search);
    if (params.get('cuisine')) activeCuisine = params.get('cuisine');

    // Render cuisine chips
    const allCuisines = ['All', ...new Set(restaurants.flatMap(r => r.cuisine.split(', ')))];
    if (chipsContainer) {
        chipsContainer.innerHTML = allCuisines.map(c => `
      <button class="cuisine-chip${(c === activeCuisine || (c === 'All' && !activeCuisine)) ? ' active' : ''}" 
              data-cuisine="${c}" onclick="filterByCuisine('${c}')">${c}</button>`).join('');
    }

    function renderList() {
        let filtered = [...restaurants];
        const query = searchInput ? searchInput.value.toLowerCase() : '';
        if (query) filtered = filtered.filter(r => r.name.toLowerCase().includes(query) || r.cuisine.toLowerCase().includes(query));
        if (activeCuisine && activeCuisine !== 'All') filtered = filtered.filter(r => r.cuisine.toLowerCase().includes(activeCuisine.toLowerCase()));
        const sort = sortDropdown ? sortDropdown.value : 'default';
        if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
        else if (sort === 'deliveryTime') filtered.sort((a, b) => a.deliveryTime - b.deliveryTime);
        else if (sort === 'costLow') filtered.sort((a, b) => a.costForTwo - b.costForTwo);
        else if (sort === 'costHigh') filtered.sort((a, b) => b.costForTwo - a.costForTwo);
        grid.innerHTML = filtered.length ? filtered.map(renderRestaurantCard).join('') : '<p style="text-align:center;padding:60px;color:var(--text-muted);grid-column:1/-1;">No restaurants found. Try a different search.</p>';
        if (resultCount) resultCount.textContent = filtered.length;
    }

    window.filterByCuisine = function (cuisine) {
        activeCuisine = cuisine === 'All' ? '' : cuisine;
        document.querySelectorAll('.cuisine-chip').forEach(c => c.classList.toggle('active', c.dataset.cuisine === cuisine));
        renderList();
    };

    if (searchInput) searchInput.addEventListener('input', renderList);
    if (sortDropdown) sortDropdown.addEventListener('change', renderList);
    renderList();
}

// --- Restaurant Detail Page ---
function initDetailPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) { document.getElementById('menuContent').innerHTML = '<p style="text-align:center;padding:80px;">Restaurant not found.</p>'; return; }

    document.title = `${restaurant.name} — FoodieExpress`;
    const breadcrumb = document.getElementById('breadcrumbName');
    if (breadcrumb) breadcrumb.textContent = restaurant.name;

    // Render restaurant info
    const infoCard = document.getElementById('restaurantInfoCard');
    if (infoCard) {
        infoCard.innerHTML = `
      <div class="restaurant-detail-img"><img src="${restaurant.image}" alt="${restaurant.name}"></div>
      <div class="restaurant-detail-info">
        <h1>${restaurant.name}</h1>
        <p class="cuisine-text">${restaurant.cuisine}</p>
        <div class="restaurant-meta-row">
          <div class="meta-chip"><span class="meta-icon">★</span> ${restaurant.rating}</div>
          <div class="meta-chip"><span class="meta-icon">🕐</span> ${restaurant.deliveryTime} min</div>
          <div class="meta-chip"><span class="meta-icon">💰</span> ₹${restaurant.costForTwo} for two</div>
          ${restaurant.offer ? `<div class="meta-chip" style="background:rgba(252,128,25,0.2);color:var(--primary);"><span class="meta-icon">🏷️</span> ${restaurant.offer}</div>` : ''}
        </div>
      </div>`;
    }

    // Render menu tabs
    const tabsContainer = document.getElementById('menuTabs');
    const menuContent = document.getElementById('menuContent');
    let activeTab = 'all';

    function renderMenu(category) {
        const cats = category === 'all' ? restaurant.menu : restaurant.menu.filter(c => c.category === category);
        menuContent.innerHTML = cats.map(cat => `
      <div class="menu-category">
        <h3 class="menu-category-title">${cat.category} <span>(${cat.items.length} items)</span></h3>
        ${cat.items.map(item => `
          <div class="menu-item" id="menu-item-${item.id}">
            <div class="menu-item-info">
              <div class="veg-badge${item.veg ? '' : ' non-veg'}"></div>
              <h4>${item.name}</h4>
              <p class="item-price">₹${item.price}</p>
              <p class="item-desc">${item.desc}</p>
            </div>
            <div class="menu-item-img">
              <img src="${item.image}" alt="${item.name}" loading="lazy">
              ${renderMenuItemButton(item, restaurant.id)}
            </div>
          </div>`).join('')}
      </div>`).join('');
    }

    if (tabsContainer) {
        tabsContainer.innerHTML = `<button class="menu-tab active" data-cat="all" onclick="switchMenuTab('all')">All</button>` +
            restaurant.menu.map(c => `<button class="menu-tab" data-cat="${c.category}" onclick="switchMenuTab('${c.category}')">${c.category}</button>`).join('');
    }

    window.switchMenuTab = function (cat) {
        activeTab = cat;
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
        renderMenu(cat);
    };

    window.handleAddToCart = function (e, itemId, restId) {
        e.preventDefault(); e.stopPropagation();
        const rest = restaurants.find(r => r.id === restId);
        let item = null;
        rest.menu.forEach(c => c.items.forEach(i => { if (i.id === itemId) item = i; }));
        if (!item) return;
        if (Cart.addItem(restId, rest.name, item)) {
            showToast(`${item.name} added to cart`, '🛒');
            renderMenu(activeTab);
            updateFloatingBar();
        }
    };

    window.handleMenuQty = function (e, itemId, delta, restId) {
        e.preventDefault(); e.stopPropagation();
        Cart.updateQty(itemId, delta);
        renderMenu(activeTab);
        updateFloatingBar();
    };

    function updateFloatingBar() {
        const bar = document.getElementById('floatingCartBar');
        const count = document.getElementById('floatingCartCount');
        const total = document.getElementById('floatingCartTotal');
        const totalItems = Cart.getTotalItems();
        if (bar) bar.classList.toggle('show', totalItems > 0);
        if (count) count.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
        if (total) total.textContent = `₹${Cart.getTotalPrice()}`;
    }

    renderMenu('all');
    updateFloatingBar();
}

// --- Cart Page ---
function initCartPage() {
    const container = document.getElementById('cartContent');
    if (!container) return;

    function render() {
        const cart = Cart.get();
        if (!cart.items || cart.items.length === 0) {
            container.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet. Browse restaurants and add your favorite items!</p>
          <a href="restaurants.html" class="btn btn-primary">Browse Restaurants →</a>
        </div>`;
            return;
        }
        const deliveryFee = 49;
        const subtotal = Cart.getTotalPrice();
        const tax = Math.round(subtotal * 0.05);
        const grandTotal = subtotal + deliveryFee + tax;

        container.innerHTML = `
      <div class="cart-layout">
        <div class="cart-items-section">
          <h2>Cart Items</h2>
          <p class="cart-restaurant-name">From: ${cart.restaurantName}</p>
          ${cart.items.map(item => `
            <div class="cart-item" id="cart-item-${item.itemId}">
              <div class="cart-item-veg"><div class="veg-badge${item.veg ? '' : ' non-veg'}"></div></div>
              <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-price">₹${item.price}</p>
              </div>
              <div class="cart-item-qty">
                <button onclick="cartUpdateQty(${item.itemId}, -1)">−</button>
                <span class="qty">${item.qty}</span>
                <button onclick="cartUpdateQty(${item.itemId}, 1)">+</button>
              </div>
              <div class="cart-item-total">₹${item.price * item.qty}</div>
            </div>`).join('')}
        </div>
        <div class="cart-summary">
          <h3>Bill Details</h3>
          <div class="summary-row label"><span>Item Total</span><span>₹${subtotal}</span></div>
          <div class="summary-row label"><span>Delivery Fee</span><span>₹${deliveryFee}</span></div>
          <div class="summary-row label"><span>Taxes (5%)</span><span>₹${tax}</span></div>
          <div class="summary-row total"><span>To Pay</span><span>₹${grandTotal}</span></div>
          <button class="btn btn-primary" onclick="placeOrder()">Place Order — ₹${grandTotal}</button>
        </div>
      </div>`;
    }

    window.cartUpdateQty = function (itemId, delta) {
        Cart.updateQty(itemId, delta);
        render();
    };

    window.placeOrder = function () {
        const modal = document.getElementById('orderModal');
        if (modal) modal.classList.add('show');
        Cart.clear();
        render();
        // Close modal on click outside
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });
    };

    render();
}

// ===== DETECT PAGE & INIT =====
document.addEventListener('DOMContentLoaded', () => {
    Cart.updateBadge();
    initScrollAnimations();
    const path = window.location.pathname;
    if (path.includes('restaurant.html') && window.location.search.includes('id=')) initDetailPage();
    else if (path.includes('restaurants.html')) initListingPage();
    else if (path.includes('cart.html')) initCartPage();
    else initLandingPage();
});
