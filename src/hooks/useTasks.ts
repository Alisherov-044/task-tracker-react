import { useEffect, useState } from "react";
import { TaskService } from "../services";
import { TaskScheme } from "../interface";

export function useTasks() {
  const [tasks, setTasks] = useState<TaskScheme[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const taskService = await new TaskService();
      await taskService.getTasks().then(async (tasks) => await setTasks(tasks));
    };

    fetchData();
  }, []);

  const addTask = async (task: TaskScheme) => {
    const taskService = await new TaskService();
    await taskService
      .addTask(task)
      .then(async (task) => await setTasks([...tasks, task]));
  };

  const updateTask = async (task: TaskScheme) => {
    const taskService = await new TaskService();
    await taskService
      .updateTask(task)
      .then(
        async (task) =>
          await setTasks(
            tasks.map((item) => (item.id === task.id ? task : item))
          )
      );
  };

  const deleteTask = async (id: number) => {
    const taskService = await new TaskService();
    await taskService
      .deleteTask(id)
      .then(async () => await setTasks(tasks.filter((item) => item.id !== id)));
  };

  return { tasks, updateTask, addTask, deleteTask };
}
