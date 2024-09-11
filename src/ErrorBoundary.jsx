import { AxiosError } from "axios";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  if (error instanceof AxiosError) {
    return <div>잘못된 접근입니다</div>;
  }
};

export default ErrorBoundary;
