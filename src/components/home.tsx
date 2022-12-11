import React from "react";
import {Link} from "react-router-dom";
import "./typing.sass";
import {TypeAnimation} from "react-type-animation";
import $ from "jquery";

export class Home extends React.Component<any, any> {
    render() {
        return <>
            <div id={"command"}>
                user@nwsoft ~$&nbsp;
                <TypeAnimation
                    sequence={[
                        () => {
                            $(".description").hide();
                        },
                        "introduction",
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
                <p>Hello world!</p>
                <p>We're NWSOFT, an organization that creates free software since 2020.</p>
                <p>Click <Link to={"/P"}>[ Projects ]</Link> or press [P] to view our projects</p>
            </div>
        </>;
    }
}
