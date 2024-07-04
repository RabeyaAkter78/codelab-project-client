import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Components/Pages/Home/Home/Home";
import Services from "../../Components/Pages/Home/Services/Services";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/services",
                element:<Services></Services>
            },
            
        ]
    },
]);

