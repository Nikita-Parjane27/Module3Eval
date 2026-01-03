import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const RestaurantCard = ({ restaurant, onUpdate, onDelete, isAdmin }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={restaurant.image}
        alt={restaurant.restaurantName}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = '';
        }}
      />
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {restaurant.restaurantName}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
           {restaurant.address}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {restaurant.type}
          </span>
          <span className={`text-sm font-medium ${
            restaurant.parkingLot ? 'text-green-600' : 'text-red-600'
          }`}>
            {restaurant.parkingLot ? ' Parking' : 'No Parking'}
          </span>
        </div>

        {isAdmin && (
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => onUpdate(restaurant)}
              className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <Edit2 size={16} />
              Update
            </button>
            <button
              onClick={() => onDelete(restaurant.restaurantID)}
              className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;