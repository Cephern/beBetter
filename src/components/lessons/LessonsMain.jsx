import { useMemo, useState } from "react";
import LessonsForm from "./LessonsForm";
import LessonsItem from "./LessonsItem";

function LessonsMain() {
  // state
  const [lessons, setLessons] = useState([
    {
      id: 0,
      name: "lesson 1",
      duration: 45,
      category: "test",
      currentTime: 30,
      active: true,
    },
    {
      id: 1,
      name: "lesson 2",
      duration: 45,
      category: "programming",
      currentTime: 0,
      active: false,
    },
    {
      id: 2,
      name: "lesson 3",
      duration: 45,
      category: "sport",
      currentTime: 0,
      active: false,
    },
    {
      id: 3,
      name: "lesson 4",
      duration: 45,
      category: "cleaning",
      currentTime: 0,
      active: false,
    },
    {
      id: 4,
      name: "lesson 5",
      duration: 45,
      category: "cooking",
      currentTime: 0,
      active: false,
    },
    {
      id: 5,
      name: "lesson 6",
      duration: 45,
      category: "test",
      currentTime: 0,
      active: false,
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
  const handleAdd = (lessonToAdd, amount) => {
    let lessonsToAddArr = [];

    for (let i = 0; i < amount; i++) {
      const lessonToAddWithId = { ...lessonToAdd, id: lessons.length + i };
      lessonsToAddArr.push(lessonToAddWithId);
    }

    setLessons((prev) => [...prev, ...lessonsToAddArr]);
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
            <LessonsItem
              key={lesson.id}
              lesson={lesson}
              index={index}
              length={lessons.length}
            />
          ))}
        </ol>

        <LessonsForm handleAdd={handleAdd} />
      </div>
    </div>
  );
}

export default LessonsMain;
