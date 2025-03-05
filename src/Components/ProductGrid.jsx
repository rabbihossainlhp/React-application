import { useSelector } from 'react-redux';
// import products from '../productContents'
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const filteredProdeucts = useSelector(state => state.products.filteredProducts);

    if(!filteredProdeucts){
        return(
            <div>Loading...</div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 px-4'>
            {filteredProdeucts.map((product,index)=>{
                return <ProductCard key={index} product={product}/>
            })}
        </div>
        
    );
};

export default ProductGrid;