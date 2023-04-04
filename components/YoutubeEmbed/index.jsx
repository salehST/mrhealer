import React, { useRef, useEffect } from 'react'
import PropTypes from "prop-types";


const YoutubeEmbed = ({embedId}) => {
    const youtubeRef = useRef(null);
    function handleYouTubeLoad() {
        setTimeout(() => {
          const player = youtubeRef.current.contentWindow;
          player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }, 5000);
      }

  return (
    <div
        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
        style={{paddingTop: "56.25%"}}>
        <iframe
        ref={youtubeRef}
        onLoad={handleYouTubeLoad}
            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    </div>
  )
}
YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};
export default YoutubeEmbed