import React from "react";

class Addme extends React.Component<any,any>{
    constructor(props){
        super(props)
        this.state = {
            likesCount: 0
        };
        this.onLike = this.onLike.bind(this);
    }
    
    onLike(){
        let newCount = this.state.likesCount +1;
        this.setState({likesCount: newCount});
    }

    render(){
        return(
            <div>
                Likes : <span>{this.state.likesCount}</span>
                <div><button onClick={this.onLike}>Like Me</button></div>
            </div>
        )
    }
}

export default Addme;