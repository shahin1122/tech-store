import React, { useState } from 'react';
import fakeData from '../../fakeData'
import ShopDetail from '../ShopDetail/ShopDetail';

const Shop = () => {
    console.log(fakeData)

    

    const first36 = fakeData.slice(0,36);

    const [products , setProducts] = useState(first36);
    
    return (
        <div>
            <div>
                {
                    products.map(product => <ShopDetail prod ={product}></ShopDetail>)
                }
               
            </div>
            
            
        </div>
    );
};

export default Shop;