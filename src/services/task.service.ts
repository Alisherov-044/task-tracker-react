import { TaskScheme } from "../interface";
import { BaseUrl, TasksUrl } from "../utils";

export class TaskService {
  async getTasks(): Promise<TaskScheme[]> {
    return await fetch(`${BaseUrl}/${TasksUrl}`).then((tasks) => tasks.json());
  }

  async addTask(task: TaskScheme): Promise<TaskScheme> {
    return await fetch(`${BaseUrl}/${TasksUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then((task) => task.json());
  }

  async updateTask(task: TaskScheme): Promise<TaskScheme> {
    return await fetch(`${BaseUrl}/${TasksUrl}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, reminder: !task.reminder }),
    }).then((task) => task.json());
  }

  async deleteTask(id: number): Promise<TaskScheme> {
    return await fetch(`${BaseUrl}/${TasksUrl}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((task) => task.json());
  }
}
