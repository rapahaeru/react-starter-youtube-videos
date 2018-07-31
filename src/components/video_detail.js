import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return <div>Loading ...</div>
    }

    const videoId = video.id.videoId,
        title = video.snippet.title,
        description = video.snippet.description,
        url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-reponsive-item' src={ url }></iframe>
            </div>

            <div className='details'>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        </div>
    );
}

export default VideoDetail;