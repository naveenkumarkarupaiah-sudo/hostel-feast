export interface Shop {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  distance: string;
  isOpen: boolean;
  whatsappNumber: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  isVeg: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  selectedShop: Shop | null;
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  setSelectedShop: (shop: Shop) => void;
  getTotalPrice: () => number;
}