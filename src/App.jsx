import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import FindBook from "./pages/FindBook";
import returnVal from "./persistence/bookFacade";
import NoMatch from "./components/NoMatch";

function App() {
  const bookFacade = returnVal;

  const routes = createBrowserRouter(
    { basename: "/" },
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<NoMatch />}>
        <Route
          path="books"
          element={<Books getBooks={bookFacade.getBooks} />}
        />
        <Route
          path="add-book"
          element={<AddBook addBook={bookFacade.addBook} />}
        />
        <Route
          path="find-book"
          element={<FindBook findBook={bookFacade.findBook} />}
        />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
