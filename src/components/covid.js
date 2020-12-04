import React from "react";
import Img1 from "../images/wash_hand.jpg";
import Img2 from "../images/mask.jpg";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const imageStyle = {
    width: "60%",
    height: "auto",
}
const EnhancedSwipeableViews = autoPlay(SwipeableViews);

export default class Covid extends React.Component {
    render () {
        return (
            <EnhancedSwipeableViews enableMouseEvents interval={3000} style={ {textAlign: "center"} }>
                <div>
                    <img src={Img1} style={imageStyle} />
                    <p>Let's wash our hands</p>
                </div>
                <div>
                    <img src={Img2} style={imageStyle} />
                    <p>Let's wear a mask</p>
                </div>
            </EnhancedSwipeableViews>
        );
    }
}