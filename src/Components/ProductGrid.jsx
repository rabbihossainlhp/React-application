import products from '../productContents'
import ProductCard from './ProductCard';

const ProductGrid = () => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 px-4'>
            {products.map((product,index)=>{
                return <ProductCard key={index} products={product}/>
            })}
        </div>
        
    );
};

export default ProductGrid;