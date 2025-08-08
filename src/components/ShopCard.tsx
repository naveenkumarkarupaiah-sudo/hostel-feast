import { Shop } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';

interface ShopCardProps {
  shop: Shop;
}

const ShopCard = ({ shop }: ShopCardProps) => {
  const navigate = useNavigate();
  const { setSelectedShop } = useCartStore();

  const handleShopClick = () => {
    if (!shop.isOpen) return;
    setSelectedShop(shop);
    navigate(`/shop/${shop.id}`);
  };

  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
        !shop.isOpen ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.02]'
      }`}
      onClick={handleShopClick}
    >
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={shop.image} 
            alt={shop.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {!shop.isOpen && (
            <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
              <Badge variant="secondary" className="bg-destructive text-destructive-foreground">
                Closed
              </Badge>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-foreground">{shop.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{shop.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
      </CardContent>
    </Card>
  );
};

export default ShopCard;