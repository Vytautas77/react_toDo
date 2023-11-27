import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./tasks.module.css";

const Tasks = () => {
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = localStorage.getItem("Tasks");
    setTasks(JSON.parse(tasks));
  }, []);

  const onAddTask = () => {
    const newTask = {
      id: uuidv4(),
      name: inputName,
      surname: inputSurname,
      isCompleted: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    localStorage.setItem("Tasks", JSON.stringify(newTasks));
    setInputName("");
    setInputSurname("");
  };

  const onTaskDelete = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(filteredTasks);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputs}>
        <input
          value={inputName}
          onChange={(event) => {
            setInputName(event.target.value);
          }}
          className={styles.input}
          type="text"
          placeholder="enter name"
        />
        <input
          value={inputSurname}
          onChange={(event) => {
            setInputSurname(event.target.value);
          }}
          className={styles.input}
          type="text"
          placeholder="enter surname"
        />
        <button onClick={onAddTask}>ADD</button>
      </div>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${styles.task} 
            ${task.isCompleted ? styles.completed : styles.notCompleted}`}
          >
            <div>{`Name: ${task.name}`}</div>
            <div>{`Surname: ${task.surname}`}</div>
            <button
              onClick={() => onTaskDelete(task.id)}
              className={styles.delBtn}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
