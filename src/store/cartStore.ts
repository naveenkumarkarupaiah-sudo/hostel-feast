import { create } from 'zustand';
import { CartStore, MenuItem, Shop } from '@/types';

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  selectedShop: null,
  
  addItem: (item: MenuItem) => {
    const state = get();
    const existingItem = state.items.find(cartItem => cartItem.item.id === item.id);
    
    if (existingItem) {
      set({
        items: state.items.map(cartItem =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      });
    } else {
      set({
        items: [...state.items, { item, quantity: 1 }]
      });
    }
  },
  
  removeItem: (itemId: string) => {
    const state = get();
    set({
      items: state.items.filter(cartItem => cartItem.item.id !== itemId)
    });
  },
  
  updateQuantity: (itemId: string, quantity: number) => {
    const state = get();
    if (quantity <= 0) {
      get().removeItem(itemId);
      return;
    }
    
    set({
      items: state.items.map(cartItem =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      )
    });
  },
  
  clearCart: () => {
    set({ items: [], selectedShop: null });
  },
  
  setSelectedShop: (shop: Shop) => {
    set({ selectedShop: shop });
  },
  
  getTotalPrice: () => {
    const state = get();
    return state.items.reduce((total, cartItem) => {
      return total + (cartItem.item.price * cartItem.quantity);
    }, 0);
  }
}));