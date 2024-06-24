import App from "./App";
import Home from "./pages/Home";
import Search from "./pages/Search";
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
            }
        ]
    }
]

export default routes;