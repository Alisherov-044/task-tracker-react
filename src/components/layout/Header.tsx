import { Button } from "..";
import { useLayoutContext } from "../../context";
import { useRouter } from "../../hooks";

export function Header() {
  const { hasPath } = useRouter();
  const { showTaskForm, toggle } = useLayoutContext();

  return (
    <header className="header">
      <h1 className="header--title">Task Tracker</h1>
      {hasPath(["/"]) ? (
        <Button color={showTaskForm ? "red" : "blue"} onClick={toggle}>
          {showTaskForm ? "Close" : "Add Task"}
        </Button>
      ) : null}
    </header>
  );
}
