import { Fragment, useMemo, useState } from "react";
import LessonsForm from "./LessonsForm";

function LessonsMain() {
  // state
  const [lessons, setLessons] = useState([
    {
      id: 0,
      name: "lesson 1",
      duration: 45,
      category: "test",
    },
    {
      id: 1,
      name: "lesson 2",
      duration: 45,
      category: "programming",
    },
    {
      id: 2,
      name: "lesson 3",
      duration: 45,
      category: "sport",
    },
    {
      id: 3,
      name: "lesson 4",
      duration: 45,
      category: "cleaning",
    },
    {
      id: 4,
      name: "lesson 5",
      duration: 45,
      category: "cooking",
    },
    {
      id: 5,
      name: "lesson 6",
      duration: 45,
      category: "test",
    },
  ]);

  //   computed
  const categories = useMemo(
    () => Array.from(new Set(lessons.map((item) => item.category))),
    [lessons]
  );

  const totalTimeInMin = useMemo(
    () => lessons.reduce((acc, current) => acc + Number(current.duration), 0),
    [lessons]
  );

  //   events
  const handleAdd = (lessonToAdd) => {
    const lessonToAddWithId = { ...lessonToAdd, id: lessons.length };
    setLessons((prev) => [...prev, lessonToAddWithId]);
    setLessonToAdd({
      name: "",
      duration: "",
      category: "",
    });
  };

  return (
    <div className="LessonsMain">
      <h2>Lessons</h2>

      <div className="categoriesWrapper">
        <h3>Categories</h3>
        <div className="categories">
          {categories.map((category) => (
            <div className="category" key={category}>
              <span className="categoryColor"></span> -{" "}
              <span className="categoryName">{category}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="totalTime">
        Total study time today:{" "}
        <span>{Math.floor(totalTimeInMin / 60)} hours</span>{" "}
        <span>{totalTimeInMin % 60} min</span>
      </p>

      <div className="wrapper">
        <ol>
          {lessons.map((lesson, index) => (
            <Fragment key={lesson.id}>
              <li className="lesson">
                {lesson.name} - {lesson.duration}min
              </li>
              {index < lessons.length - 1 && (
                <li className="break"> break - 15min</li>
              )}
            </Fragment>
          ))}
        </ol>

        <LessonsForm handleAdd={handleAdd} />
      </div>
    </div>
  );
}

export default LessonsMain;
