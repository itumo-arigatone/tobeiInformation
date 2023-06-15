import React from "react";
import "../styles/footer.scss";

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="address">
                    〒389-2502<br/>
                    長野県下高井郡野沢温泉村大字豊郷9754-2
                </div>
                <div className="copyright">
                    Copyright © 2023 <a href="https://github.com/itumo-arigatone">@itumo-arigatone</a>. All Rights Reserved.
                </div>
            </div>
        </>
    )
}

export default Footer