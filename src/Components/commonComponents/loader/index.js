import React, {Component} from "react";
import Style from "./style";
class Loader extends Component {
    render() {
        return (
            <div style={{
                position: "fixed",
                width: "100%",
                height: "100vh",
                background: "#f0f8fc",
                backgroundImage:"url('/src/assets/images/loader.gif')",
                backgroundRepeat:"noRepeat",
                backgroundPosition:"center",
                zIndex: 9999}}/>
        );
    }
}

export default Loader;
