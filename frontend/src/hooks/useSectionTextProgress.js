import { useRef, useEffect } from "react";
import { useUpdateSectionProgressMutation } from "../features/progress/progressApiSlice";
import { notify } from "../features/ui/notify";

export const useSectionTextProgress = ({
  section,
  sectionId,
  finishedText,
}) => {
  const [updateProgress] = useUpdateSectionProgressMutation();
  const hasReported = useRef(false);

  useEffect(() => {
    if (!finishedText) return;
    if (!section) return;
    if (section.theoryCompleted) return;
    if (hasReported.current) return;

    hasReported.current = true;

    const saveProgress = async () => {
      try {
        await updateProgress({
          sectionId,
          isTheory: true,
        }).unwrap();

        notify.success("Texto completado!");
      } catch (err) {
        console.error("Error al guardar progreso", err);
        notify.error("Error al guardar progreso del texto");
        hasReported.current = false;
      }
    };

    saveProgress();
  }, [finishedText, section, sectionId, updateProgress]);
};
