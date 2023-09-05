import React from "react"

const Seo = ({ title, description }) => {

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="google-site-verification" content="XH8ZnLXJimHGhR7QsP8t3ks0mDhgbRTMNSRVG2uOxtE" />
        </>
    )
}

export default Seo