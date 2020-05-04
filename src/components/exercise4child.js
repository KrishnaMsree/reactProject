import React from 'react';
import Exercise4Parent from './exercise4parent'
class Exercise4Child extends React.Component{
    constructor(){
        super();
        this.phoneProducts = [
            {
                model : "Google Pixel 2 XL",
                price : 62000,
                RAM : '4 GB',
                camera : '12.2 MP',
                os : 'Android Pie',
                processor : 'Snapdragon 835 octa-core'
            },
            {
                model : "Apple iPhone X",
                price : 98000,
                RAM : '3 GB',
                camera : '12 MP',
                os : 'iOS v11.1.1',
                processor : 'A11 Bionic hexa-core'
            }
        ]
    }
    render(){
        return(
            <div>
                <h3 className="text-secondary text-center">Products</h3>
                <div className="row">
                {this.phoneProducts.map((product) => <Exercise4Parent key={product.model} productData={product} />)}</div>
            </div>
        )
    }
}

export default Exercise4Child