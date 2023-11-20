import React, { useEffect, useState } from 'react'
import { getBrandsData } from '../../firebase/getBrands';

const BrandsFilter = ({products}) => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isBrandShown, setIsBrandShown] = useState(false);
    useEffect(()=>{
        getBrandsData(setBrands, setLoading);
    })
  return (
    <div>brands filter</div>
  )
}

export default BrandsFilter