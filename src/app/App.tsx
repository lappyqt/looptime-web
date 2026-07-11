import { createHashRouter, RouterProvider } from 'react-router'; 
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Layout from '../widgets/layout/Layout';
import Calendar from '../pages/Calendar/Calendar';
import Track from '../pages/Track/Track';

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "calendar",
                element: <Calendar />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "track/:id",
                element: <Track />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
