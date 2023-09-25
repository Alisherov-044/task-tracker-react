import { useLocation } from "react-router-dom";

export function useRouter() {
  const { pathname } = useLocation();

  const hasPath = (paths: string[]) => {
    return paths.some((path) => path === pathname);
  };

  return { pathname, hasPath };
}
