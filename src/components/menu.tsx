import React from "react";
import "./menu.sass";
import {Link} from "react-router-dom";
import $ from "jquery";

export class Menu extends React.Component<any, any> {
    fadeNotice() {
        $(".notice").fadeOut(5000);
    }

    render() {
        $(() => this.fadeNotice());
        return <div id={"navBar"}>
            <Link to={"/"}>[ <u>H</u>ome ]</Link>
            <Link to={"/P"}>[ <u>P</u>rojects ]</Link>
            <Link to={"/A"}>[ <u>A</u>bout us ]</Link>
            <p className={"notice"}>{"<- PRESS THE UNDERLINED KEY TO NAVIGATE"}</p>
        </div>;
    }
}
