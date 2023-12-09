import { useRouteError, Link } from "react-router-dom";

function NoMatch() {
  const error = useRouteError();
  console.error(error);

  const status = error?.status || " ";
  const statusText =
    error?.statusText || error?.message || "An unknown error occurred";

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Something went wrong</p>
      <p>
        <i style={{ color: "red" }}>
          {status} {statusText}
        </i>
      </p>

      <div>
        <Link to="/">Go back to home page ?</Link>
      </div>
    </div>
  );
}

export default NoMatch;
