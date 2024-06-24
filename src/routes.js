import App from "./App";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Form from "./pages/Form";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/new-entry",
                element: <Form />
            }
        ]
    }
]

export default routes;