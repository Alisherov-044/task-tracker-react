import { useTasks } from "../hooks";
import { Button, Checkbox, Input, TaskCard } from "../components";
import { SubmitHandler, useForm } from "react-hook-form";
import { TaskScheme } from "../interface";
import { useLayoutContext } from "../context";

export default function HomePage() {
  const { showTaskForm } = useLayoutContext();
  const { tasks, updateTask, addTask, deleteTask } = useTasks();
  const { handleSubmit, register, reset } = useForm<TaskScheme>();

  const onSubmit: SubmitHandler<TaskScheme> = (data) => {
    addTask(data);
    reset();
  };

  return (
    <main className="main">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`task__form ${showTaskForm ? "" : "hidden"}`}
      >
        <Input
          placeholder="Text"
          name="text"
          register={register("text", { required: true })}
        />
        <Input placeholder="Day" name="day" register={register("day")} />
        <Checkbox
          id="reminder"
          label="Reminder"
          name="reminder"
          register={register("reminder")}
        />
        <Button>Save</Button>
      </form>
      <div className="tasks">
        {tasks.map((task) => (
          <TaskCard
            task={task}
            onUpdate={updateTask}
            onDelete={deleteTask}
            key={task.id}
          />
        ))}
      </div>
    </main>
  );
}
