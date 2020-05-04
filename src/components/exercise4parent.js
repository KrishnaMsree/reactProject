import React from 'react';
class Exercise4Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttonClicked : false,
            ram : null,
            os : null,
            processor : null,
            camera : null
        }
    }

    Button(){
        return (
            <div>
            <span>RAM : {this.props.productData.RAM}</span><br/>
            <span>Camera : {this.props.productData.camera}</span><br/>
            <span>OS : {this.props.productData.os}</span><br/>
            <span>Processor : {this.props.productData.processor}</span><br/>
            </div>
        )
    }
    details(product){
        // if(this.state.buttonClicked){
        //     this.setState({ram : product.RAM, camera : product.camera,
        //         os : product.os, processor : product.processor})
        // }
        return (
                <div >
                    <div className="card">
                        <div className="card-body">
                            <div className="card-text">
                                <span>Model : {product.model}</span><br/>
                                <span>Price : {product.price}</span><br/>
                                {this.state.buttonClicked==true?this.Button():<span></span>}
                                <button className="btn btn-primary" onClick={()=>{this.setState({buttonClicked:true})}}>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

    render(){
        return(
            <div>
                {this.details(this.props.productData)}
            </div>
        )
    }
}

export default Exercise4Parent