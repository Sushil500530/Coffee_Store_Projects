
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        loader: () => fetch("http://localhost:5000/coffee")
    },
    {
        path:'/addcoffee',
        element:<AddCoffee></AddCoffee>
    },
    {
        path:'/updatecoffee',
        element:<UpdateCoffee></UpdateCoffee>
    }
])

export default Router;