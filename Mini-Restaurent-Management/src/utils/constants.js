export const CUISINE_TYPES = [
  'Rajasthani',
  'Gujarati',
  'Mughlai',
  'Jain',
  'Thai',
  'North Indian',
  'South Indian'
];

export const USERS = {
  'admin@gmail.com': {
    email: 'admin@gmail.com',
    password: 'admin1234',
    role: 'admin'
  },
  'customer@gmail.com': {
    email: 'customer@gmail.com',
    password: 'customer1234',
    role: 'customer'
  }
};

export const STORAGE_KEYS = {
  RESTAURANTS: 'evalData',
  CURRENT_USER: 'currentUser'
};

export const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400';

export const INITIAL_RESTAURANTS = [
  {
    restaurantID: 1,
    restaurantName: "Royal Rajasthani",
    address: "Jaipur, Amber Fort, Rajasthan",
    type: "Rajasthani",
    parkingLot: true,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400"
  },
  {
    restaurantID: 2,
    restaurantName: "Gujarat Delights",
    address: "Ahmedabad, Gujarat",
    type: "Gujarati",
    parkingLot: false,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400"
  },
  {
    restaurantID: 3,
    restaurantName: "Mughlai Paradise",
    address: "Delhi, Chandni Chowk",
    type: "Mughlai",
    parkingLot: true,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400"
  }
];