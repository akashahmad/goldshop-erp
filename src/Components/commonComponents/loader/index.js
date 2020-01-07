import React, {Component} from "react"
import loaderGif from '../../../assets/images/loader.gif'
class Loader extends Component {
    render() {
        return (
            <div style={{
                position: "fixed",
                width: "100%",
                height: "100vh",
                background: "#f0f8fc",
                backgroundImage: "url(" + loaderGif + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                zIndex: 9999
            }}/>
        );
    }
}

export default Loader;
