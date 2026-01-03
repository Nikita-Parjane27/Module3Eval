import React from 'react';
import RestaurantCard from './RestaurentCard.jsx';

const RestaurantList = ({ restaurants, onUpdate, onDelete, isAdmin }) => {
  if (restaurants.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No restaurants found</p>
        <p className="text-gray-400 text-sm mt-2">
          {isAdmin ? 'Add your first restaurant to get started' : 'Check back later for new restaurants'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map(restaurant => (
        <RestaurantCard
          key={restaurant.restaurantID}
          restaurant={restaurant}
          onUpdate={onUpdate}
          onDelete={onDelete}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
};

export default RestaurantList;