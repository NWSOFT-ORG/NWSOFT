import React from "react";
import "./typing.sass";
import {TypeAnimation} from "react-type-animation";
import $ from "jquery";

export class Projects extends React.Component<any, any> {
    getProjects() {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                let projects_string = xmlHttp.responseText;
                let projects = JSON.parse(projects_string);
                projects.projects.forEach((project: any) => {
                    $(".description").html(`
                        <div class="project">
                        <p>total ${projects.projects.length}</p>
                            <p>drwxrwxrwx  12 andy nwsoft   10.1M Jan 01 00:00 <a href="/P/${project}">${project}/</a></p>
                        </div>
                    `);
                });
            }
        };
        xmlHttp.open("GET", "https://api.codetabs.com/v1/proxy?quest=https://data.nwsoft.tk/nwsoft", true); // true for asynchronous
        xmlHttp.send(null);
    }

    render() {
        this.getProjects();
        return (
            <div>
                user@nwsoft ~$&nbsp;
                <TypeAnimation
                    sequence={[
                        () => {
                            $(".description").hide();
                        },
                        "ls -ahl projects/",
                        200,
                        () => {
                            $(".description").show();
                        },
                    ]}
                    className={"type"}
                    cursor={false}
                />
                <div className={"description"}>
                    Loading...
                </div>
            </div>
        );
    }
}
