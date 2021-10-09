import React from "react"
import ContentLoader from "react-content-loader"

const PostCardLoader = (props) => {

    return (
        <ContentLoader
            speed={2}
            width={'100%'}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="5%" y="5%" rx="10" ry="10" width="90%" height="30%" />
            <rect x="5%" y="45%" rx="10" ry="10" width="90%" height="30%" />
        </ContentLoader>
    )
}

export default PostCardLoader