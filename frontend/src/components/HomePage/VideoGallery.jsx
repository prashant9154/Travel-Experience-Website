import React from 'react'
import "./VideoGallery.css";

const VideoGallery = () => {
  return (
    <>
      <div className='video_gallery_div'>
        <div className="video_gallery">
            <img className='videos' src="images/video1.png" alt="video1" />
            <img className='videos' src="images/video2.png" alt="video2" />
            <img className='videos' src="images/video3.png" alt="video3" />
        </div>
      </div>
    </>
  );
}

export default VideoGallery