import React from "react";
import Img1 from "../images/wash_hand.jpg";
import Img2 from "../images/mask.jpg";
import Img3 from "../images/disinfect.jpg";
import Img4 from "../images/close.jpg";
import Img5 from "../images/congestion.jpg";
import Img6 from "../images/room.jpg";
import Img7 from "../images/permit.jpg";
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
                <div>
                    <img src={Img3} style={imageStyle} />
                    <p>Please disinfect at the time of entry.</p>
                </div>
                <div>
                    <img src={Img4} style={imageStyle} />
                    <p>Avoid close</p>
                </div>
                <div>
                    <img src={Img5} style={imageStyle} />
                    <p>Avoid congestion</p>
                </div>
                <div>
                    <img src={Img6} style={imageStyle} />
                    <p>Avoiding a locked room</p>
                </div>
                <div>
                    <img src={Img7} style={imageStyle} />
                    <p>Please do not enter the store if you have a fever.</p>
                </div>
            </EnhancedSwipeableViews>
        );
    }
}