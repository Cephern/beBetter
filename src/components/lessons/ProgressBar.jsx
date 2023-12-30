function ProgressBar({ active, duration, currentTime }) {
  const progress = Math.round((currentTime * 100) / duration);

  return (
    active && (
      <div className="progressBar">
        <span>{progress}%</span>
        <div className="track">
          <div className="tracker" style={{ width: `${progress}%` }}></div>
        </div>
        <span>{duration}min</span>
      </div>
    )
  );
}

export default ProgressBar;
