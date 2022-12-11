import React from "react";

export class About extends React.Component<any, any> {
    render() {
        return <>
            <h1>About us</h1>
            <p>We're NWSOFT, an organization that creates free software since 2020.</p>
            <p>Our projects are open source, licensed under the <a
                href={"https://www.gnu.org/licenses/gpl-3.0.en.html"}>GNU General License</a>, and you can find them on
                our <a href={"https://github.com/NWSOFT-ORG"}>GitHub
                    page</a>.</p>
            <h2>Contact us</h2>
            <p>You can contact us by dropping a message to <a href={"mailto:info@nwsoft.tk"}>our mailbox</a>.</p>

            <h2>About this website</h2>
            <p>This website is built with React and TypeScript, and is hosted on <a href={"https://pages.github.com"}>GitHub
                Pages</a>.</p>
            <p>Font used: <a href={"https://jetbrains.com/mono"}>Jetbrains Mono</a></p>
            <p>Source code is available on <a href={"https://github.com/NWSOFT-ORG/nwsoft"}>GitHub</a>.</p>
        </>;
    }
}
