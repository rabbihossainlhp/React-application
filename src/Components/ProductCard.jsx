import React from 'react';

const ProductCard = ({products}) => {
    return (
        <div>
            <div className="productImage">
                <img src={products.imageUrl} alt="productImage" />
            </div>
        </div>
    );
};

export default ProductCard;