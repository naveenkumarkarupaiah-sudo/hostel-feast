import { MenuItem } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { items, addItem, updateQuantity } = useCartStore();
  
  const cartItem = items.find(cartItem => cartItem.item.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    addItem(item);
  };

  const handleIncrease = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.id, quantity - 1);
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-24 h-24 object-cover"
          />
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <Badge 
                    variant={item.isVeg ? "success" : "destructive"}
                    className={item.isVeg ? "bg-success text-success-foreground" : ""}
                  >
                    {item.isVeg ? 'Veg' : 'Non-Veg'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <p className="font-bold text-primary">₹{item.price}</p>
              </div>
              
              <div className="flex items-center gap-2">
                {quantity === 0 ? (
                  <Button size="sm" onClick={handleAdd} className="h-8 px-3">
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                ) : (
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={handleDecrease}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-semibold w-8 text-center">{quantity}</span>
                    <Button 
                      size="sm" 
                      onClick={handleIncrease}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;