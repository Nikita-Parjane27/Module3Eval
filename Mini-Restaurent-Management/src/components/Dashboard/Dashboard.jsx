import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { useAuth } from '../AuthContext';
import restaurantService from "../services/RestaurantServices";
import Navbar from '../Navbar';
import SearchFilter from '../SearchFilter';
import RestaurantList from '../Restaurant/RestaurentList';
import RestaurantForm from '../Restaurant/RestaurentForm';

const Dashboard = () => {
  const { isAdmin } = useAuth();
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [parkingFilter, setParkingFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editingRestaurant, setEditingRestaurant] = useState(null);

  useEffect(() => {
    loadRestaurants();
  }, []);

  useEffect(() => {
    const filtered = restaurantService.filterRestaurants(
      restaurants,
      searchQuery,
      typeFilter,
      parkingFilter
    );
    setFilteredRestaurants(filtered);
  }, [restaurants, searchQuery, typeFilter, parkingFilter]);

  const loadRestaurants = () => {
    const data = restaurantService.getAllRestaurants();
    setRestaurants(data);
  };

  const handleSave = (formData) => {
    if (editingRestaurant) {
      restaurantService.updateRestaurant(
        editingRestaurant.restaurantID,
        formData
      );
    } else {
      restaurantService.addRestaurant(formData);
    }

    loadRestaurants();
    setShowForm(false);
    setEditingRestaurant(null);
  };

  const handleUpdate = (restaurant) => {
    setEditingRestaurant(restaurant);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (restaurantID) => {
    if (window.confirm('Are you sure you want to delete?')) {
      restaurantService.deleteRestaurant(restaurantID);
      loadRestaurants();
      alert('Restaurant deleted successfully!');
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingRestaurant(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          parkingFilter={parkingFilter}
          setParkingFilter={setParkingFilter}
        />

        {isAdmin() && (
          <div className="mb-6">
            {!showForm ? (
              <button
                onClick={() => {
                  setShowForm(true);
                  setEditingRestaurant(null);
                }}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md"
              >
                <Plus size={20} />
                Add Restaurant
              </button>
            ) : (
              <RestaurantForm
                restaurant={editingRestaurant}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            )}
          </div>
        )}

        <RestaurantList
          restaurants={filteredRestaurants}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          isAdmin={isAdmin()}
        />
      </div>
    </div>
  );
};

export default Dashboard;