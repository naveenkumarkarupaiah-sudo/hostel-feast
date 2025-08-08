import { useParams, useNavigate } from 'react-router-dom';
import { shops } from '@/data/shops';
import { menuItems } from '@/data/menu';
import MenuItemCard from '@/components/MenuItemCard';
import CartSheet from '@/components/CartSheet';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';

const ShopMenu = () => {
  const { shopId } = useParams();
  const navigate = useNavigate();
  const { setSelectedShop } = useCartStore();
  
  const shop = shops.find(s => s.id === shopId);
  const menu = menuItems[shopId || ''] || [];

  useEffect(() => {
    if (shop) {
      setSelectedShop(shop);
    }
  }, [shop, setSelectedShop]);

  if (!shop) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Shop not found</h1>
          <Button onClick={() => navigate('/')}>Go back to home</Button>
        </div>
      </div>
    );
  }

  if (!shop.isOpen) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Shop is currently closed</h1>
          <p className="text-muted-foreground mb-4">Please try again later</p>
          <Button onClick={() => navigate('/')}>Go back to home</Button>
        </div>
      </div>
    );
  }

  // Group menu items by category
  const groupedMenu = menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menu>);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{shop.name}</h1>
              <div className="flex items-center gap-4 text-sm opacity-90">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{shop.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{shop.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{shop.distance}</span>
                </div>
              </div>
            </div>
          </div>
          <CartSheet />
        </div>
      </header>

      {/* Shop Image */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={shop.image} 
          alt={shop.name}
          className="w-full h-full object-cover"
        />
      </div>

      <main className="max-w-4xl mx-auto p-4">
        {Object.entries(groupedMenu).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-foreground">{category}</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}

        {menu.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No menu items available at the moment.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ShopMenu;