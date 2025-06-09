import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VideoPlayer.css';
import videoSource from '../assets/video/video.mp4';

function VideoPlayer() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      // Force autoplay with better browser compatibility
      const attemptPlay = () => {
        videoElement.muted = true; // Start muted to improve autoplay chances
        videoElement.play()
          .then(() => {
            // Once playing, unmute if possible
            videoElement.muted = false;
          })
          .catch(error => {
            console.error("Error playing video:", error);
            // If still fails, retry after a short delay
            setTimeout(attemptPlay, 1000);
          });
      };
      
      attemptPlay();

      // Navigate to party info when video ends
      const handleVideoEnd = () => {
        navigate('/party-info');
      };
      
      videoElement.addEventListener('ended', handleVideoEnd);

      // Cleanup event listener
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [navigate]);

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <video 
          ref={videoRef}
          className="full-video"
          autoPlay
          playsInline
          muted={true}
          controls={false}
          src={videoSource}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoPlayer;
