import { createBrowserRouter } from "react-router-dom";
import Actus from "../Actus";
import Actuss from "../Actuss";
import Home from "../Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    },
    {
        path: "/Actus7j",
        element: <Actuss />,
    },
    {
        path: "/Actusa",
        element: <Actus />,
    },


])


export default router