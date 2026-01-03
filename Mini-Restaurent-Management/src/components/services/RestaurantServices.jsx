import { STORAGE_KEYS, INITIAL_RESTAURANTS } from '../../utils/constants';

class RestaurantService {
  getAllRestaurants() {
    const saved = localStorage.getItem(STORAGE_KEYS.RESTAURANTS);
    if (saved) {
      return JSON.parse(saved);
    }
    this.saveRestaurants(INITIAL_RESTAURANTS);
    return INITIAL_RESTAURANTS;
  }

  saveRestaurants(restaurants) {
    localStorage.setItem(STORAGE_KEYS.RESTAURANTS, JSON.stringify(restaurants));
  }

  addRestaurant(restaurantData) {
    const restaurants = this.getAllRestaurants();
    const newRestaurant = {
      ...restaurantData,
      restaurantID: Date.now()
    };
    restaurants.push(newRestaurant);
    this.saveRestaurants(restaurants);
    return newRestaurant;
  }

  updateRestaurant(restaurantID, updatedData) {
    const restaurants = this.getAllRestaurants();
    const index = restaurants.findIndex(r => r.restaurantID === restaurantID);
    if (index !== -1) {
      restaurants[index] = { ...restaurants[index], ...updatedData };
      this.saveRestaurants(restaurants);
      return restaurants[index];
    }
    return null;
  }

  deleteRestaurant(restaurantID) {
    const restaurants = this.getAllRestaurants();
    const filtered = restaurants.filter(r => r.restaurantID !== restaurantID);
    this.saveRestaurants(filtered);
    return true;
  }

  filterRestaurants(restaurants, searchQuery, typeFilter, parkingFilter) {
    let filtered = [...restaurants];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(r =>
        r.restaurantName.toLowerCase().includes(query) ||
        r.address.toLowerCase().includes(query)
      );
    }

    if (typeFilter && typeFilter !== 'all') {
      filtered = filtered.filter(r => r.type === typeFilter);
    }

    if (parkingFilter && parkingFilter !== 'all') {
      filtered = filtered.filter(r =>
        parkingFilter === 'yes' ? r.parkingLot : !r.parkingLot
      );
    }
    return filtered;
  }
}

export default new RestaurantService();