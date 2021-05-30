import React from 'react';
import './ShopDetail.css'

const ShopDetail = ({prod}) => {

    return (
        <div>
           <div className="row styleComp w-75">
           <div className=" col-md-4">
                <img src={prod.img} alt="" />

            </div>
            <div className="col-md-4 name-design">
                <h6>Name: {prod.name}</h6>
                
            </div>

            <div className="col-md-4 btn-design">
                <p className="m-3 p-3">Price : <b>$ {prod.price}</b></p>
                <button className="btn btn-primary">Buy Now</button>

            </div>
           </div>
            
        </div>
    );
};

export default ShopDetail;