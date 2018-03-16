import React from "react";
import ReactDOM from "react-dom";
import Addme from "./containers/Addme";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from 'material-ui/AppBar';


class App extends React.Component<any, any> {
  render () {
    return (
      <div>
          <AppBar
            title="Xiao DEMO1 test3"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <h1>my test4esrewre</h1>
      </div>
      )
  }
}


export default App;