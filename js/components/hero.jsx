import React from "react";
import {Container, Row, Col} from "../helpers/bootstrap";
import classNames from "classnames";

export class Hero extends React.Component {

    static propTypes = {
        backgroundImage: React.PropTypes.string,
    };

    render() {
        const _style = {};
        if (this.props.backgroundImage) {
            _style.backgroundImage = `url(${this.props.backgroundImage})`;
        }
        const _className = classNames("neal-hero jumbotron jumbotron-fluid zoom_image", this.props.className);
        return (
            <div>
                <div {... this.props} className={_className} style={_style}>
                </div>
                <Container>
                    { this.props.children }
                </Container>
            </div>
        );
    }
}
