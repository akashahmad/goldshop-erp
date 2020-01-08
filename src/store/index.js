import React, {Component} from "react";
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CUSTOMER_ID":
            return {...state, customerId: action.payload};
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
        customerId: null,
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