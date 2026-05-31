// src/pages/categories/page.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { getCategories } from '../../../services/communication';
import { useNavigate } from 'react-router-dom';

export default function Categories() {
  const navigate = useNavigate();

  // Fetch categories from API
  const { data: categoriesData, isLoading, error } = useQuery({
    queryKey: ['public-categories'],
    queryFn: getCategories,
  });

  const categories = categoriesData?.data || [];

  // Map category names to routes
  const getCategoryRoute = (categoryName) => {
    const routeMap = {
      'Cricket': '/cricket-page',
      'Football': '/football-page',
      'Tennis': '/tennis-page',
      'Casino': '/casino',
      'Sports Book': '/sportsbook',
      'Horse Racing': '/horse-racing',
      'Greyhound Racing': '/greyhound',
      'Fantasy 11': '/fantasy-11',
      'Politics': '/politics',
      'Cock Fight': '/cock-fight',
      'Kabaddi': '/kabaddi',
      'Basketball': '/basketball',
    };
    return routeMap[categoryName] || '/';
  };

  const handleCategoryClick = (categoryName) => {
    const route = getCategoryRoute(categoryName);
    navigate(route);
  };

  if (isLoading) {
    return (
      <div className="p-4 md:p-12 max-w-6xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-600">Loading categories...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 md:p-12 max-w-6xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
            Error loading categories: {error.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-12 max-w-6xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a] mb-8 border-b pb-4 tracking-tight">
          Categories
        </h1>

        {categories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No categories available at the moment. Please check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <div
                key={category._id}
                onClick={() => handleCategoryClick(category.name)}
                className="bg-gray-50 border rounded-lg p-4 md:p-5 text-center hover:shadow-md hover:border-[#a60a27] hover:bg-gray-100 transition-all cursor-pointer group"
              >
                <div className="text-base md:text-lg font-bold text-[#4a121a] group-hover:text-[#a60a27] transition-colors">
                  {category.name}
                </div>
                {category.description && (
                  <p className="text-xs text-gray-500 mt-2 hidden md:block">
                    {category.description.length > 50 
                      ? category.description.substring(0, 50) + '...' 
                      : category.description}
                  </p>
                )}
                <div className="mt-2 text-[#a60a27] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs">Explore →</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Show count of categories */}
        {categories.length > 0 && (
          <div className="mt-8 pt-4 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Total {categories.length} categories available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}