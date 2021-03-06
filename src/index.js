import React, { Component } from 'react';
import Animate from 'rc-animate';
import classNames from 'classnames';
import './index.css';
import './animation.css';


class ReactLoading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { spinning } = this.props
        const loadingDisplayType = classNames({
            "rc-spinning-loading-wrap": true,
            "rc-spinning-loading-display": this.props.displayType === "inlineBlock",
        })
        const loadingChange = classNames({
            "rc-spinning-loading": true,
            "rc-spinning-fence": this.props.type === "fence",
            "rc-spinning-ellipsis": this.props.type === "ellipsis",
            "rc-spinning-dynamic-ellipsis": this.props.type === "dynamicEllipsis",
        })
        const spinIndicator = (
            <span className={loadingChange}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </span>
        )
        return (
            <Animate component="div"
                className={loadingDisplayType}
                transitionName="fade" >
                {
                    spinning && <div key="loading">{spinIndicator}</div>
                }
                <div className={spinning ? 'rc-spining-item-container' : ''} key="container">
                    {this.props.children}
                </div>
            </Animate>
        );
    }
}

ReactLoading.defaultProps = {
    spinning: true,
    type: 'fence',
    displayType: 'block',
}

export default ReactLoading;