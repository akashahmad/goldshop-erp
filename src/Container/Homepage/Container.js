import React from "react";
import Component from "./Homepage";
import {Consumer} from '../../store';
const Container = () => {
    return (
        <Consumer>
            {
                ({shopId, loader}) => (
                    <Component shopId={shopId} loader={loader}/>
                )
            }
        </Consumer>
    )
};

export default Container;