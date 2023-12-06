import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../store/slices/categoriesSlice";
import { removeCategory } from "../../store/slices/categoriesSlice";

const CategoriesFilter = ({ categories, products }) => {
  const selectedCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [filteredResultsState, setFilteredResultsState] = useState([]);
  const [x, setX] = useState(5);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const filteredResults = products.filter((product) => {
      if (selectedCategories.length === 0) {
        return true; // Include all products if no categories are selected
      } else {
        return selectedCategories.includes(product.category); // Filter products based on selected categories
      }
    });

    if (
      JSON.stringify(filteredResults) !== JSON.stringify(filteredResultsState)
    ) {
      setFilteredResultsState(filteredResults);
    }
  }, [selectedCategories, products]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      dispatch(removeCategory(category));
    } else {
      dispatch(addCategory(category));
    }
  };

  const changeX = () => {
    if (showMore) {
      setX(categories.length); // Increment x by 5
      setShowMore(false); // Set showMore to false
    } else {
      setX(5); // Decrement x by 5
      setShowMore(true); // Set showMore to true
    }
  };

  return (
    <div className="p-4">
      {/* Categories checkboxes */}
      <p className="text-lg font-bold">Select Category:</p>
      <div className="flex flex-col">
        {categories.slice(0, x).map((category) => (
          <div key={category._id} className="mr-4 mb-2">
            <input
              type="checkbox"
              id={category._id}
              value={category.name}
              onChange={() => handleCategoryChange(category.name)}
            />
            <label htmlFor={category._id} className="ml-2">
              {category.name}
            </label>
          </div>
        ))}

        <div className="flex justify-start">
          <button onClick={changeX} className="outline-none text-blue-400">
            {showMore ? "Show More..." : "Show Less..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesFilter;
