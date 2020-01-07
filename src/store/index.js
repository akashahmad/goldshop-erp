import React, {Component} from "react";
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_SHOP_ID":
            return {...state, shopId: action.payload};
        case "SET_LOADER":
            return {...state, loader: action.payload};
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        dispatch: action => {
            this.setState(state => reducer(state, action))
        },
        shopId: null,
        loader: true
    };

    render() {
        let {state, props: {children}} = this;
        return (
            <Context.Provider value={ state }>{children}</Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;