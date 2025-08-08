import { shops } from '@/data/shops';
import ShopCard from '@/components/ShopCard';
import CartSheet from '@/components/CartSheet';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredShops = shops.filter(shop =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Hostel Food</h1>
            <div className="flex items-center gap-1 text-sm opacity-90">
              <MapPin className="w-4 h-4" />
              <span>Nearby Restaurants</span>
            </div>
          </div>
          <CartSheet />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Shop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredShops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>

        {filteredShops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No restaurants found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;