import React, { useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { CUISINE_TYPES } from '../utils/constants';

const SearchFilter = ({ 
  searchQuery, 
  setSearchQuery, 
  typeFilter, 
  setTypeFilter, 
  parkingFilter, 
  setParkingFilter 
}) => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search by name or address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Cuisines</option>
          {CUISINE_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <select
          value={parkingFilter}
          onChange={(e) => setParkingFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Parking</option>
          <option value="yes">With Parking</option>
          <option value="no">No Parking</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;