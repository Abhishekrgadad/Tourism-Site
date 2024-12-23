import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchFilters {
  location: string;
  budget: string;
  activity: string;
}
// seach bar
export default function SearchBar() {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    budget: '',
    activity: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log('Search filters:', filters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform -translate-y-1/2">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Where to?"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
            value={filters.budget}
            onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
          >
            <option value="">Budget Range</option>
            <option value="budget">Budget ($)</option>
            <option value="moderate">Moderate ($$)</option>
            <option value="luxury">Luxury ($$$)</option>
          </select>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
            value={filters.activity}
            onChange={(e) => setFilters({ ...filters, activity: e.target.value })}
          >
            <option value="">Activity Type</option>
            <option value="adventure">Adventure</option>
            <option value="culture">Culture</option>
            <option value="relaxation">Relaxation</option>
            <option value="food">Food & Wine</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}