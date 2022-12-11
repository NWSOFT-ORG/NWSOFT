import React from "react";
import {TypeAnimation} from "react-type-animation";
import $ from "jquery";
import "./nwedit.sass";
// @ts-ignore
import {Screenshot} from "./screenshot";

export class Project extends React.Component<any, any> {
    render() {
        return <>
            <div id={"command"}>
                user@nwsoft ~$&nbsp;
                <TypeAnimation
                    sequence={[
                        () => {
                            $(".description").hide();
                        },
                        "man NWEdit",
                        200,
                        () => {
                            $(".description").show();
                        }
                    ]}
                    className={"type"}
                    cursor={false}>
                </TypeAnimation>
            </div>
            <div className={"description"}>
                <p id={"sub-head"}>NWEdit is a multipurpose, Tkinter-based editor written in Python</p>
                <section>
                    Links:
                    <ul>
                        <li><a href={"https://github.com/NWSOFT-ORG/NWEdit"}>GitHub repository</a></li>
                        <li><a href={"https://github.com/NWSOFT-ORG/NWEdit/releases/latest"}>Latest Release</a></li>
                    </ul>
                </section>
                <Screenshot/>
                <p className={"description"}>∆ NWEdit running on macOS</p>
            </div>
        </>;
    }
}
