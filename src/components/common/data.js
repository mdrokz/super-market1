export const categories = [ {
        'categoryId': 1,
        'category': 'Milk',
        'imgUrl': 'category_milk.jpg',
    },
    {
        'categoryId': 2,
        'category': 'Fresh Vegetables',
        'imgUrl': 'category_fresh_vegetables.jpg',
    },
    {
        'categoryId': 3,
        'category': 'Dairy Products',
        'imgUrl': 'category_dairy_products.jpg',
    },
    {
        'categoryId': 4,
        'category': 'Daily Needs',
        'imgUrl': 'category_daily_needs.jpg',
    },
    {
        'categoryId': 5,
        'category': 'Fresh Fruits',
        'imgUrl': 'category_fresh_fruits.jpg',
    },
    {
        'categoryId': 6,
        'category': 'Bakery & Biscuits',
        'imgUrl': 'category_bakery_and_biscuits.jpg',
    },
    {
        'categoryId': 7,
        'category': 'Ready To Cook',
        'imgUrl': 'category_ready_to_cook.jpg',
    },
    {
        'categoryId': 8,
        'category': 'Beverages',
        'imgUrl': 'category_beverages.jpg',
    },
    {
        'categoryId': 9,
        'category': 'Rice & Rice Products',
        'imgUrl': 'category_rice_and_rice_products.jpg',
    },
    {
        'categoryId': 10,
        'category': 'Snacks & Sweets',
        'imgUrl': 'category_snacks_and_sweets.jpg',
    },
    {
        'categoryId': 11,
        'category': 'Staples & Spices',
        'imgUrl': 'category_staples_and_spices.jpg',
    },
    {
        'categoryId': 12,
        'category': 'Flours & Pulses',
        'imgUrl': 'category_flours_and_pulses.jpg',
    },
    {
        'categoryId': 13,
        'category': 'Spread & Sauces',
        'imgUrl': 'category_spread_and_sauces.jpg',
    },
    {
        'categoryId': 14,
        'category': 'Breakfast cereals',
        'imgUrl': 'category_breakfast_cereals.jpg',
    },
    {
        'categoryId': 15,
        'category': 'Baby Food',
        'imgUrl': 'category_baby_food.jpg',
    },
    {
        'categoryId': 16,
        'category': 'Pet Food',
        'imgUrl': 'category_pet_food.jpg',
    }
];

export const suggestions = [
    {
        suggestionId: 1,
        suggestion:'Popular Picks',
        suggestionImage:'suggestions_popular_picks.jpg',
        categoryId: 1,
    },
    {
        suggestionId: 2,
        suggestion:'Raw Pressery',
        suggestionImage:'suggestions_raw_pressery.jpg',
        categoryId: 1,
    },
    {
        suggestionId: 3,
        suggestion:'Amul',
        suggestionImage:'suggestions_amul.jpg',
        categoryId: 1,
    },
    {
        suggestionId: 4,
        suggestion:'Chitale',
        suggestionImage:'suggestions_chitale.jpg',
        categoryId: 1,
    },
    {
        suggestionId: 5,
        suggestion:'Gokul',
        suggestionImage:'suggestions_gokul.jpg',
        categoryId: 1,
    },
    {
        suggestionId: 6,
        suggestion:'Britania',
        suggestionImage:'suggestions_britania.jpg',
        categoryId: 1,
    }
];

export const subCategories = [
    {
        subCategoryId:1,
        subCategory: 'Full Cream Milk',
        categoryId:1
    },
    {
        subCategoryId:2,
        subCategory: 'Toned Milk',
        categoryId:1
    }
];

export const subCategoryItems = [
    {
        subCategoryItemId:1,
        subCategoryItem: 'Gokul-Full Cream Milk(500 ml)',
        price: 29.00,
        imgUrl:'category_milk_full_cream_gokul_500ml.jpg',
        subCategoryId:1,
        categoryId:1
    },
    {
        subCategoryItemId:2,
        subCategoryItem: 'Chitale-Full Cream Milk(500 ml)',
        price: 29.00,
        imgUrl:'category_milk_full_cream_gokul_500ml.jpg',
        subCategoryId:1,
        categoryId:1
    },
    {
        subCategoryItemId:3,
        subCategoryItem: 'Amul-Gold Milk(500 ml)',
        price: 29.00,
        imgUrl:'category_milk_full_cream_amul_gold_500ml.jpg',
        subCategoryId:1,
        categoryId:1
    },
    {
        subCategoryItemId:4,
        subCategoryItem: 'Amul-Gold Milk(1 L)',
        price: 57.00,
        imgUrl:'category_milk_full_cream_amul_gold_1L.jpg',
        subCategoryId:1,
        categoryId:1
    },
    {
        subCategoryItemId:5,
        subCategoryItem: 'Katraj Toned(500 ml)',
        price: 24.00,
        imgUrl:'category_milk_full_cream_amul_gold_1L.jpg',
        subCategoryId:2,
        categoryId:1
    },
    {
        subCategoryItemId:6,
        subCategoryItem: 'Amul Taaza (pkt), 1 L',
        price: 45.00,
        imgUrl:'category_milk_full_cream_amul_gold_1L.jpg',
        subCategoryId:2,
        categoryId:1
    },
    {
        subCategoryItemId:7,
        subCategoryItem: 'Amul Taaza (pkt), 500 ml',
        price: 23.00,
        imgUrl:'category_milk_full_cream_amul_gold_1L.jpg',
        subCategoryId:2,
        categoryId:1
    }
];

export const category1_subCategories = [
    {
        subCategory: 'Full Cream Milk',
        subCategoryItems: [
            {
                subCategoryId:1,
                item:'Gokul-Full Cream Milk(500 ml)',
                price:29.00,
                imgUrl:'category_milk_full_cream_gokul_500ml.jpg'
            },
            {
                subCategoryId:2,
                item:'Amul-Gold Milk(500 ml)',
                price:29.00,
                imgUrl:'category_milk_full_cream_amul_gold_500ml.jpg'
            },
            {
                subCategoryId:3,
                item:'Amul-Gold Milk(1 L)',
                price:57.00,
                imgUrl:'category_milk_full_cream_amul_gold_1L.jpg'
            }
        ]
    }
];