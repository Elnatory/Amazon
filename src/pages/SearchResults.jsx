import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchData } from "../firebase/getSearchResults";
import SearchResultBox from "../components/searchResultsBox/SearchResultsBox";
import FilterPanel from "../components/filterPanel/FilterPanel";
import { useSelector } from "react-redux";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedBrands = useSelector((state) => state.brands);
  const selectedCategories = useSelector((state) => state.categories);

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSearchData(searchQuery, setSearchResults, setLoading);
  }, [searchQuery]);

  // Filter the products based on selected brands
  const filteredResults =
    selectedBrands.length || selectedCategories.length
      ? searchResults.filter(
          (result) =>
            selectedBrands.includes(result.brand.name) ||
            selectedCategories.includes(result.category.name)
        )
      : searchResults;

  return (
    <div>
      <h2>Search Results for: {searchQuery}</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container mx-0">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4">
              <FilterPanel />
            </div>
            <div className="flex justify-evenly col-span-8 flex-nowrap">
              {filteredResults.map((result, index) => (
                <div
                  key={index}
                  className="m-4"
                  onClick={() => navigate(`/details/${result._id}`)}
                >
                  <SearchResultBox result={result} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
