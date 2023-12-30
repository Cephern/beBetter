import ProgressBar from "./ProgressBar";

function LessonsItem({ lesson, index, length }) {
  return (
    <li>
      <div className="lesson">
        <p>{lesson.name}</p>
        <ProgressBar
          active={lesson.active}
          duration={lesson.duration}
          currentTime={lesson.currentTime}
        />
      </div>
      {index < length - 1 && (
        <div className="break">
          <p>break - 15min</p>
        </div>
      )}
    </li>
  );
}

export default LessonsItem;
