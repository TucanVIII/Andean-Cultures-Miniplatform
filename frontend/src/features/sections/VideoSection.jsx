import ReactPlayer from "react-player";
import { useEffect, useRef } from "react";
import { useUpdateSectionProgressMutation } from "../../features/progress/progressApiSlice.js";
import { notify } from "../ui/notify.js";

import "../../styles/videoSection.css";

const VideoSection = ({ sectionId, videoUrl }) => {
  const hasReported = useRef(false);
  const [updateProgress] = useUpdateSectionProgressMutation();

  const handleVideoCompletion = async () => {
    if (hasReported.current) return;
    hasReported.current = true;
    try {
      await updateProgress({ sectionId, isVideo: true }).unwrap();
      notify.success("Video completado!");
    } catch (err) {
      console.error("Error al guardar progreso", err);
      notify.error("Fallo al reproducir el video!");
    }
  };

  useEffect(() => {}, []);

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
    </>
  );
};

export default VideoSection;
