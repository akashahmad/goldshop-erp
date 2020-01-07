import React from "react";
import Component from "./Routes";
import {Consumer} from './store';
const Container = () => {
    return (
        <Consumer>
            {
                ({dispatch}) => (
                    <Component dispatch={dispatch}/>
                )
            }
        </Consumer>
    )
};

export default Container;