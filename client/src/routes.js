import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import CreateQuote from './components/CreateQuote';
import Home from './components/Home';
import NotFound from './components/NotFound';
import OtherUserProfile from './components/OtherUserProfile';

export const routes = [
    { path: "/", element: <Login /> },
    { path: "/quotes", element: <Home /> },
    { path: "/create", element: <CreateQuote /> },
    { path: "/signup", element: <Signup /> },
    { path: "/profile", element: <Profile /> },
    { path: "/profile/:userid", element: <OtherUserProfile /> },
    { path: "*", element: <NotFound /> }
];