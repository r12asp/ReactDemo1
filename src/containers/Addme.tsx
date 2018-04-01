import React from "react";
import {ApiService} from "./../api/apiService";
import { connect } from "react-redux";
import {loadTestSuccess, loadTestStart} from "./../redux/actions/applicationActions";

import Store from "./../redux/store/store";

 
class Addme extends React.Component<any,any> {
    constructor(props){
        super(props)
        this.state = {
            likesCount: 0,
            getFromApi: ''
        };
    }
    
    onLike = () => {
        let newCount = this.state.likesCount +1;
        this.setState({likesCount: newCount});
        this.getData();
    }

    getData = () => {
        const api = new ApiService();

        api.get("api/values").then((response) => {
            this.setState({
                getFromApi: response,
            });
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.getFromApi}</h1>
                <h2>Epic: {this.props.test.testName}</h2>
                Likes : <span>{this.state.likesCount}</span>
                <div><button onClick={this.onLike}>Like Me</button></div>
                <button
                    onClick={() => Store.dispatch(loadTestStart())}
                >
                test
                </button>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        test: state.test,
    }
}

export default connect(mapStateToProps, null)(Addme);