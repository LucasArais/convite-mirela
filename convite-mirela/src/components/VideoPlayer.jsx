import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VideoPlayer.css';
import videoSource from '../assets/video/video.mp4';

function VideoPlayer() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    const container = containerRef.current;
    
    if (videoElement) {
      // Multiple strategies to force autoplay
      const attemptPlay = () => {
        videoElement.muted = true; // Keep muted for better autoplay support
        
        // Try to play
        videoElement.play()
          .then(() => {
            console.log("Video playing successfully");
            setShowPlayButton(false);
          })
          .catch(error => {
            console.error("Error playing video:", error);
            // Show play button if autoplay fails
            setShowPlayButton(true);
            
            // Try again after a delay
            setTimeout(attemptPlay, 2000);
          });
      };
      
      // Try to play immediately
      attemptPlay();
      
      // Also try to play on document visibility change (when user returns to tab)
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          attemptPlay();
        }
      });
      
      // Add touch event listener to the entire container to help with mobile autoplay
      if (container) {
        const handleTouch = () => {
          attemptPlay();
          // Remove the listener after first touch
          container.removeEventListener('touchstart', handleTouch);
        };
        
        container.addEventListener('touchstart', handleTouch);
      }

      // Navigate to party info when video ends
      const handleVideoEnd = () => {
        navigate('/party-info');
      };
      
      videoElement.addEventListener('ended', handleVideoEnd);

      // Cleanup event listeners
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
        document.removeEventListener('visibilitychange', attemptPlay);
        if (container) {
          container.removeEventListener('touchstart', attemptPlay);
        }
      };
    }
  }, [navigate]);

  return (
    <div className="video-container" ref={containerRef}>
      <div className="video-wrapper">
        <video 
          ref={videoRef}
          className="full-video"
          autoPlay
          playsInline
          muted={true}
          controls={false}
          preload="auto"
          src={videoSource}
          playsinline="true"
        >
          Your browser does not support the video tag.
        </video>
        
        {showPlayButton && (
          <button 
            className="play-button" 
            onClick={() => {
              const video = videoRef.current;
              if (video) {
                video.play();
                setShowPlayButton(false);
              }
            }}
          >
            ▶
          </button>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
