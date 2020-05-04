import React from 'react';
class Exercise3 extends React.Component{
    constructor(){
        super();
        this.content = ""
        this.state = {
            buttonClicked : false
        }
    }
    render(){
        if(this.state.buttonClicked){
            this.content = <p className="text-primary">Hi, Kalyan Krishna! Welcome to React Online course</p>
        }
        else{
            this.content = ""
        }
        return (
            <div className="text-center">
                <button className="btn btn-danger" onClick={()=>{this.setState({buttonClicked:true})}}>Show Content</button><br/><br/>
                {this.content}<br/>
                <button className="btn btn-success" onClick={()=>{this.setState({buttonClicked:false})}}>Hide Content</button>
            </div>
        )
    }
}
export default Exercise3