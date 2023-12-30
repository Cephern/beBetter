import { useState } from "react";

function LessonsForm({ handleAdd }) {
  const [amount, setAmount] = useState("");

  const [lessonToAdd, setLessonToAdd] = useState({
    name: "",
    duration: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(lessonToAdd, Number(amount));
    setLessonToAdd({
      name: "",
      duration: "",
      category: "",
    });
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="lesson name"
        value={lessonToAdd.name}
        onChange={(e) =>
          setLessonToAdd({ ...lessonToAdd, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="lesson duration"
        value={lessonToAdd.duration}
        onChange={(e) =>
          setLessonToAdd({ ...lessonToAdd, duration: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="lesson category"
        value={lessonToAdd.category}
        onChange={(e) =>
          setLessonToAdd({ ...lessonToAdd, category: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="lessons amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

export default LessonsForm;
