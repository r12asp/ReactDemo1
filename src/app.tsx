import React from "react";
import ReactDOM from "react-dom";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IconButton from 'material-ui/IconButton';

import Addme from "./containers/Addme";
import OrderSearch from "./containers/OrderSearch";



class App extends React.Component<any, any> {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }
  render () {
    return (
      <Router>
      <div>
          <AppBar
            title="Xiao REACTDEMO1 ORDER"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={() => this.setState({open: !this.state.open})}
          />
        <h1>my test new</h1>
        <Drawer open={this.state.open}>
          <IconButton style={{"backgroundColor":"grey"}} iconClassName="muidocs-icon-navigation-expand-more" onClick={() => this.setState({open: !this.state.open})} />
          <MenuItem containerElement={<Link to="/"/>}  onClick={() => this.setState({open: !this.state.open})}>Order</MenuItem>
          <MenuItem containerElement={<Link to="/test"/>} onClick={() => this.setState({open: !this.state.open})}>test</MenuItem>
        </Drawer>

        <Route exact path="/" component={OrderSearch} />
        <Route path="/test" component={Addme} />
      </div>
      </Router>
      )
  }
}


export default App;