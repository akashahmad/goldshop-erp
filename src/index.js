import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {requestInterceptor} from './intercepter';
import {checktoken} from "./tokenValidation";

requestInterceptor();
checktoken();

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'));

