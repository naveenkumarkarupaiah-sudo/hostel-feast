import { MenuItem } from '@/types';

export const menuItems: Record<string, MenuItem[]> = {
  '1': [ // Biriyani House
    {
      id: 'b1',
      name: 'Chicken Biriyani',
      price: 180,
      description: 'Aromatic basmati rice with tender chicken pieces and spices',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'b2',
      name: 'Mutton Biriyani',
      price: 220,
      description: 'Premium mutton pieces cooked with fragrant biriyani rice',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'b3',
      name: 'Veg Biriyani',
      price: 130,
      description: 'Mixed vegetables and paneer with aromatic biriyani rice',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: true
    },
    {
      id: 'b4',
      name: 'Raita',
      price: 40,
      description: 'Cool yogurt with cucumber and mint',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop',
      category: 'Sides',
      isVeg: true
    }
  ],
  '2': [ // Parotta Palace
    {
      id: 'p1',
      name: 'Kerala Parotta',
      price: 25,
      description: 'Flaky layered bread - 2 pieces',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      category: 'Bread',
      isVeg: true
    },
    {
      id: 'p2',
      name: 'Chicken Curry',
      price: 120,
      description: 'Spicy chicken curry with coconut gravy',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
      category: 'Curry',
      isVeg: false
    },
    {
      id: 'p3',
      name: 'Beef Curry',
      price: 140,
      description: 'Traditional Kerala beef curry',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
      category: 'Curry',
      isVeg: false
    },
    {
      id: 'p4',
      name: 'Egg Curry',
      price: 80,
      description: 'Hard boiled eggs in spicy curry',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
      category: 'Curry',
      isVeg: false
    }
  ],
  '3': [ // South Indian Delights
    {
      id: 's1',
      name: 'Masala Dosa',
      price: 60,
      description: 'Crispy dosa with spiced potato filling',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
      category: 'South Indian',
      isVeg: true
    },
    {
      id: 's2',
      name: 'Idli Sambhar',
      price: 45,
      description: 'Steamed rice cakes with sambhar - 4 pieces',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
      category: 'South Indian',
      isVeg: true
    },
    {
      id: 's3',
      name: 'Vada Sambhar',
      price: 50,
      description: 'Crispy lentil donuts with sambhar - 3 pieces',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
      category: 'South Indian',
      isVeg: true
    }
  ],
  '4': [ // Quick Snacks
    {
      id: 'q1',
      name: 'Samosa',
      price: 15,
      description: 'Crispy pastry with spiced potato filling',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
      category: 'Snacks',
      isVeg: true
    },
    {
      id: 'q2',
      name: 'Pani Puri',
      price: 30,
      description: 'Crispy shells with flavored water - 6 pieces',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
      category: 'Snacks',
      isVeg: true
    },
    {
      id: 'q3',
      name: 'Bhel Puri',
      price: 35,
      description: 'Mixed puffed rice with chutneys',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
      category: 'Snacks',
      isVeg: true
    }
  ],
  '5': [ // Curry Corner
    {
      id: 'c1',
      name: 'Dal Tadka',
      price: 70,
      description: 'Yellow lentils with tempering',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
      category: 'Curry',
      isVeg: true
    },
    {
      id: 'c2',
      name: 'Paneer Butter Masala',
      price: 110,
      description: 'Cottage cheese in rich tomato gravy',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
      category: 'Curry',
      isVeg: true
    },
    {
      id: 'c3',
      name: 'Jeera Rice',
      price: 60,
      description: 'Basmati rice with cumin seeds',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
      category: 'Rice',
      isVeg: true
    }
  ]
};