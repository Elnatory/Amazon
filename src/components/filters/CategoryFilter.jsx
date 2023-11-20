import React, { useEffect, useState } from 'react'
import { getCategoriesData } from '../../firebase/getCategory';

const CategoriesFilter = ({products}) => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCategoryShown, setIsCategoryShown] = useState(false);
    useEffect(()=>{
        getCategoriesData(setCategory, setLoading);
    })
  return (
    <div>category filter</div>
  )
}

export default CategoriesFilter