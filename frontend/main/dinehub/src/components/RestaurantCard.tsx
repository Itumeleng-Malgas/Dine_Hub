import { Card  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image} from 'antd'
import { Text } from "@nextui-org/react";
import { Heart } from "lucide-react";

interface RestaurantItem {
    id: string;
    name: string;
    cuisine: string;
    imageUrl: string;
    isFavorite: boolean;
    // Add any other relevant properties
  }
  
  const RestaurantCard = ({ restaurantItem }: { restaurantItem: RestaurantItem }) => {
    return (
      <Card>
        <Image src={restaurantItem.imageUrl} alt={restaurantItem.name} />
        <div className='p-4'>
          <Text variant="title">{restaurantItem.name}</Text>
          <Text variant="subtitle">{restaurantItem.cuisine}</Text>
          <Button variant="outline">View Details</Button>
        </div>
        <div className='flex items-center justify-between'>
          <Button>View Menu</Button>
          {restaurantItem.isFavorite && (
            <Heart size={20} className="text-red-500" />
          )}
        </div>
      </Card>
    );
  };

  export default RestaurantCard;