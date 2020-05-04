
import React from 'react';
class Product extends React.Component{
    constructor(){
        super();
        this.products = [
            {
                title : "Angels and Demons",
                Publisher : "Penguin Random House",
                Author : "Dan Brown",
                price : 409,
                prodId : 2012
            },
            {
                title : "Norse Mythology",
                Publisher : "Bloomsbury",
                Author : "Neil Gaiman",
                price : 300,
                prodId : 2019
            }
        ]
    }

    exercise2 = () => {
        return (
            <div>
                <div className="row">
                {this.products.map((product)=>
                  <div className="col-4 offset-1">
                    <div className="card">
                    <div className="card-body" key="{product.prodId}">
                    <h4 className="card-title text-center">{product.title}</h4>
                    <p className="card-text">
                    <span>Author: {product.Author}</span><br/>
                    <span>Publisher: {product.Publisher}</span><br/>
                    {product.price>400?<span>Price: {product.price} <span className="text-success">- Bestseller!</span></span>:<span>Price: {product.price}</span>}
                    </p> 
                    <span>Product ID: {product.prodId}</span><br/>
                </div>
                </div>
      
                  </div>
                )}
      
            </div>
                
            </div>
        )
    }
    render(){
        return (
            <div>
            <h3 className="text-center text-primary">Featured Titles</h3>
            {this.exercise2()}
            </div>
        )
    }
    
}

export default Product