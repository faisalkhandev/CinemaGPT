
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import SignUp from '../Pages/SignUp';

export const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <SignUp />
    },
    {
        path: '/browser',
        element: <MainPage />
    }
]);
