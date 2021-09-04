import React from 'react'
import { productData } from '../../data';

function Product() {
    return (
        <div className="container">
            <h3 className="heading">OUR <span>PRODUCTS</span></h3>
            <div className="row align-items-center justify-content-center">
            {
                        productData.map((item)=>(
                            <div className="col-md-4" key={item.id}>
                                <div className="cart my-2 align-items-center justify-content-center">
                                    <div className="face face1">
                                        <div class="icons">
                                            <a href="#" class="fas fa-shopping-cart"></a>
                                            <a href="#" class="fas fa-heart"></a>
                                            <a href="#" class="fas fa-eye"></a>
                                        </div>
                                        <img src={item.image} alt="" className="my-2"/>
                                        <h3>{item.title}</h3>
                                            <div class="stars">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                            </div>
                                        <div className="price">${item.price}<span>{item.beforePrice}</span></div>
                                    </div>
                                    <div className="face face2">
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default Product
