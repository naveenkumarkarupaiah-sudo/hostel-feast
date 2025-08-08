import { MenuItem } from '@/types';

export const menuItems: Record<string, MenuItem[]> = {
  '1': [ // Sugarcane Juice
    {
      id: 's1',
      name: 'Fresh Sugarcane Juice',
      price: 25,
      description: 'Freshly extracted sugarcane juice',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&h=200&fit=crop',
      category: 'Beverages',
      isVeg: true
    },
    {
      id: 's2',
      name: 'Ginger Sugarcane Juice',
      price: 30,
      description: 'Sugarcane juice with fresh ginger',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&h=200&fit=crop',
      category: 'Beverages',
      isVeg: true
    },
    {
      id: 's3',
      name: 'Lemon Sugarcane Juice',
      price: 30,
      description: 'Sugarcane juice with fresh lemon',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&h=200&fit=crop',
      category: 'Beverages',
      isVeg: true
    }
  ],
  '2': [ // Seven Star Saavithiri
    {
      id: 'ss1',
      name: 'Chicken Biriyani',
      price: 180,
      description: 'Aromatic basmati rice with tender chicken pieces',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'ss2',
      name: 'Mutton Biriyani',
      price: 220,
      description: 'Premium mutton pieces with fragrant biriyani rice',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'ss3',
      name: 'Veg Biriyani',
      price: 130,
      description: 'Mixed vegetables with aromatic biriyani rice',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: true
    }
  ],
  '3': [ // Dhanuja Shree
    {
      id: 'd1',
      name: 'Masala Dosa',
      price: 60,
      description: 'Crispy dosa with spiced potato filling',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
      category: 'South Indian',
      isVeg: true
    },
    {
      id: 'd2',
      name: 'Idli Sambhar',
      price: 45,
      description: 'Steamed rice cakes with sambhar - 4 pieces',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
      category: 'South Indian',
      isVeg: true
    },
    {
      id: 'd3',
      name: 'Vada Sambhar',
      price: 50,
      description: 'Crispy lentil donuts with sambhar - 3 pieces',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
      category: 'South Indian',
      isVeg: true
    }
  ],
  '4': [ // Annachi
    {
      id: 'a1',
      name: 'Kerala Parotta',
      price: 25,
      description: 'Flaky layered bread - 2 pieces',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      category: 'Bread',
      isVeg: true
    },
    {
      id: 'a2',
      name: 'Chicken Curry',
      price: 120,
      description: 'Spicy chicken curry with coconut gravy',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
      category: 'Curry',
      isVeg: false
    },
    {
      id: 'a3',
      name: 'Beef Curry',
      price: 140,
      description: 'Traditional Kerala beef curry',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
      category: 'Curry',
      isVeg: false
    }
  ],
  '5': [ // Namma kadai
    {
      id: 'n1',
      name: 'Samosa',
      price: 15,
      description: 'Crispy pastry with spiced potato filling',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
      category: 'Snacks',
      isVeg: true
    },
    {
      id: 'n2',
      name: 'Pani Puri',
      price: 30,
      description: 'Crispy shells with flavored water - 6 pieces',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
      category: 'Snacks',
      isVeg: true
    },
    {
      id: 'n3',
      name: 'Bhel Puri',
      price: 35,
      description: 'Mixed puffed rice with chutneys',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
      category: 'Snacks',
      isVeg: true
    }
  ],
  '6': [ // F1
    {
      id: 'f1',
      name: 'Dal Tadka',
      price: 70,
      description: 'Yellow lentils with tempering',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
      category: 'Curry',
      isVeg: true
    },
    {
      id: 'f2',
      name: 'Paneer Butter Masala',
      price: 110,
      description: 'Cottage cheese in rich tomato gravy',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
      category: 'Curry',
      isVeg: true
    },
    {
      id: 'f3',
      name: 'Jeera Rice',
      price: 60,
      description: 'Basmati rice with cumin seeds',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
      category: 'Rice',
      isVeg: true
    }
  ],
  '7': [ // Bhai Kadai
    {
      id: 'b1',
      name: 'Tea',
      price: 10,
      description: 'Hot masala tea',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop',
      category: 'Beverages',
      isVeg: true
    },
    {
      id: 'b2',
      name: 'Coffee',
      price: 15,
      description: 'Fresh brewed coffee',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop',
      category: 'Beverages',
      isVeg: true
    },
    {
      id: 'b3',
      name: 'Biscuits',
      price: 20,
      description: 'Assorted biscuits pack',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop',
      category: 'Snacks',
      isVeg: true
    }
  ]
};