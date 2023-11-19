import React from 'react';
import { useNavigate } from 'react-router-dom';
import './slick.css';

const Slickslide = ({ setXimg = () => { }, prd, similarIdx }) => {
    const navigate = useNavigate();
    const showImage = (images) => setXimg(images.replace('w_50', 'w_250'));
    const hideImage = () => setXimg('');

    return (
        <div className='slick-slide' onMouseEnter={() => showImage(prd.images[0])} onMouseLeave={hideImage}>

            <a onClick={() => navigate(`/details/${prd.index}/${similarIdx}`)}>
                <img src={prd.images[0]} height={45} width={45} />
            </a>

        </div>
    )
}

export default Slickslide

