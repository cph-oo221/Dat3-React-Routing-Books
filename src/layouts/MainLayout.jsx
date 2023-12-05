import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div id="container">
      <div>
        <nav id="nav-bar">
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/add-book">Add Book</NavLink>
          <NavLink to="/find-book">Find Book</NavLink>
        </nav>

        <div id="container-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
