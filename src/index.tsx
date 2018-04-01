import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "./theme";
import React from "react";
import { Provider } from "react-redux";
import { Router, browserHistory, useRouterHistory } from "react-router";
import { createHistory, useBasename } from 'history';
import ReactDOM from "react-dom";
import store from "./redux/store/store";
import { ServerAppBasename } from "./../src/config/appUrlConfig";
import App from "./app";
import "./styles/styles.scss"; 
import 'rxjs';

const muiTheme = getMuiTheme(theme);

ReactDOM.render(
<MuiThemeProvider muiTheme={muiTheme}>
<Provider store={store}>
    <App />
    </Provider>
    </MuiThemeProvider>
        , document.getElementById('app123'));