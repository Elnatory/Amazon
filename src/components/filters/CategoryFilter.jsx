import React, { useEffect, useState } from 'react'

const CategoriesFilter = ({ categories, products,}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredResultsState, setFilteredResultsState] = useState([]);
  const [x, setX] = useState(5);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const filteredResults = products.filter(product => {
      if (selectedCategories.length === 0) {
        return true; // Include all products if no categories are selected
      } else {
        console.log("Selected Categories:", selectedCategories);
  // console.log("Products:", products);
        return selectedCategories.includes(product.category); // Filter products based on selected categories
      }
    });
    // console.log("Filtered Results:", filteredResults);
    if (JSON.stringify(filteredResults) !== JSON.stringify(filteredResultsState)) {
      setFilteredResultsState(filteredResults);
    }
  }, [selectedCategories, products]);

  const handleCategoryChange = category => {
    // Toggle selected category
    setSelectedCategories(prevSelectedCategories => {
      // console.log('====================================');
    // console.log("Category:", category);
    // console.log('====================================');
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter(selectedCategory => selectedCategory !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
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
    <div className='p-4'>
      {/* Categories checkboxes */}
      <p className="text-lg font-bold">Select Category:</p>
      <div className="flex flex-col">
        {categories.slice(0, x).map((category) => (
          <div key={category._id} className="mr-4 mb-2">
            <input
              type="checkbox"
              id={category._id}
              value={category.name}
              checked={selectedCategories.includes(category.name)}
              onChange={() => handleCategoryChange(category.name)}
            />
            <label htmlFor={category._id} className="ml-2">
              {category.name}
            </label>
          </div>
        ))}

        <div className='flex justify-start'>
          <button onClick={changeX} className='outline-none text-blue-400'>
            {showMore ? 'Show More...' : 'Show Less...'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoriesFilter;
