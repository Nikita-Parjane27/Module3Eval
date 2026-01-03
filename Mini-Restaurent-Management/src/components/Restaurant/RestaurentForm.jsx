import React, { useState } from 'react';
import { CUISINE_TYPES, DEFAULT_IMAGE } from '../../utils/constants';

const RestaurantForm = ({ restaurant, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    restaurant || {
      restaurantID: null,
      restaurantName: '',
      address: '',
      type: 'Rajasthani',
      parkingLot: false,
      image: DEFAULT_IMAGE
    }
  );

  const handleSubmit = () => {
    if (!formData.restaurantName.trim()) {
      alert('Please enter restaurant name');
      return;
    }

    if (!formData.address.trim()) {
      alert('Please enter address');
      return;
    }

    const confirmMessage = restaurant
      ? 'Are you sure you want to update?'
      : 'Are you sure you want to add?';
    
    if (window.confirm(confirmMessage)) {
      onSave(formData);
      
      const successMessage = restaurant
        ? 'Restaurant updated successfully!'
        : 'Restaurant added successfully!';
      alert(successMessage);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {restaurant ? ' Update Restaurant' : ' Add Restaurant'}
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Restaurant Name *
          </label>
          <input
            type="text"
            value={formData.restaurantName}
            onChange={(e) => handleChange('restaurantName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter restaurant name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address *
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cuisine Type *
          </label>
          <select
            value={formData.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {CUISINE_TYPES.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Parking Available *
          </label>
          <select
            value={formData.parkingLot.toString()}
            onChange={(e) => handleChange('parkingLot', e.target.value === 'true')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => handleChange('image', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter image URL"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            {restaurant ? 'Update' : 'Add'} Restaurant
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantForm;