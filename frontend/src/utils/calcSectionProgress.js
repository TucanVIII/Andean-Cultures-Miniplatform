const calcSectionProgress = (sectionProgress) => {
  let completed = 0;

  if (sectionProgress.theoryCompleted) completed++;
  if (sectionProgress.videoCompleted) completed++;
  if (sectionProgress.quiz?.status === "completed") completed++;

  const rawGrade = sectionProgress.quiz?.grade ?? null;

  return {
    completed,
    total: 3,
    percent: Math.round((completed / 3) * 100),
    grade: rawGrade !== null ? (rawGrade/10).toFixed(1):null
  };
};

export default calcSectionProgress;