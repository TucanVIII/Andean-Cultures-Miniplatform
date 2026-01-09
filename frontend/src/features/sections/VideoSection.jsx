import ReactPlayer from "react-player";
import { useState,useEffect,useRef } from "react";
import { useUpdateSectionProgressMutation } from "../../features/progress/progressApiSlice.js";
import { ToastContainer } from "react-toastify";
import { notify } from "../ui/notify.js";

import "../../styles/videoSection.css";

const VideoSection = ({ sectionId, videoUrl }) => {
  const hasReported = useRef(false);
  const [updateProgress] = useUpdateSectionProgressMutation();

  const handleVideoCompletion = async () => {
    try {
      await updateProgress({ sectionId, isVideo: true }).unwrap();
      notify.success("Video completado!")
      console.log("Progreso de video guardado");
    } catch (err) {
      console.error("Error al guardar progreso", err);
      notify.error("Fallo al reproducir el video!")
    }
  };

  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="video-wrapper">
        <ReactPlayer
          src={videoUrl}
          controls
          onEnded={handleVideoCompletion}
          width="100%"
          height="100%"
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default VideoSection;
