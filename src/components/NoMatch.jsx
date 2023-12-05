import { useRouteError, NavLink } from "react-router-dom";

function NoMatch() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Something went wrong</p>
      <p>
        <i style={{ color: "red" }}>
          {error.status} {error.statusText || error.message}
        </i>
      </p>

      <div>
        <NavLink to="/">Go back to home page?</NavLink>
      </div>
    </div>
  );
}

export default NoMatch;
