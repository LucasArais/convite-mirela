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
      // Navigate to party info when video ends
      const handleVideoEnd = () => {
        navigate('/party-info');
      };
      
      videoElement.addEventListener('ended', handleVideoEnd);
      
      // Force autoplay with better browser compatibility
      const attemptPlay = () => {
        videoElement.play().catch(error => {
          console.error("Error playing video:", error);
          // If autoplay fails, try again after a short delay
          setTimeout(attemptPlay, 1000);
        });
      };
      
      // Try to play immediately
      attemptPlay();
      
      // Also try to play when document becomes visible
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          attemptPlay();
        }
      });

      // Cleanup event listeners
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
        document.removeEventListener('visibilitychange', attemptPlay);
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
          preload="auto"
          loop={false}
          src={videoSource}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoPlayer;
