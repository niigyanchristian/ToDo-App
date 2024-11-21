import "./App.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { TodoItem } from "./types/interfaces";
import api from "./apis/api";
import CustomModal from "./components/CustomModal";
import CustomRoundedButton from "./components/CustomRoundedButton";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";

function App() {
  const [data, setData] = useState<TodoItem[]>([]);
  const [task, setTask] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [completedItems, setCompletedItems] = useState<number[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await api.get<TodoItem[]>("/todos");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
      // Optionally, set an error state to show an alert or message
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async () => {
    try {
      await Promise.all(completedItems.map((id) => api.delete(`/todos/${id}`)));
      setData((prevData) =>
        prevData.filter((todo) => !completedItems.includes(todo._id))
      );
      setCompletedItems([]);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const toggleCompletion = async (id: number) => {
    const isCompleted = completedItems.includes(id);
    try {
      const response = await api.put(`/todos/${id}`, {
        completed: !isCompleted,
      });
      if (response.status === 200) {
        setCompletedItems((prev) =>
          isCompleted ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        );
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (task.trim().length === 0) return;

    try {
      const response = await api.post("/todos", { text: task });
      setData((prevData) => [response.data, ...prevData]);
      setShowModal(false);
      setTask("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div className="bg-[#e7e7df] flex items-center justify-center h-screen w-screen">
      <div className="w-[50%] h-[80%] bg-white relative shadow-md">
        <Header
          data={data}
          completedItems={completedItems}
          setData={setData}
          setCompletedItems={setCompletedItems}
          onClick={handleDelete}
        />
        <div className="overflow-y-scroll no-scrollbar h-[80%] p-2">
          {data.map((item) => (
            <TaskCard
              key={item._id}
              item={item}
              completedItems={completedItems}
              toggleCompletion={toggleCompletion}
            />
          ))}
          <CustomRoundedButton
            setShowModal={setShowModal}
            showModal={showModal}
          />
          <CustomModal
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            showModal={showModal}
            task={task}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
