import { useRouteError, NavLink } from "react-router-dom";

function NoMatch() {
  const error = useRouteError();
  console.error(error);

  // Provide default values if error is undefined
  const status = error?.status || "Unknown";
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
        <NavLink to="/">Go back to home page?</NavLink>
      </div>
    </div>
  );
}

export default NoMatch;
