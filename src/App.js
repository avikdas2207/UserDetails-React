import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './components/landingPage';
import ProfilePage from './components/profile';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },{
      path: '/profile',
      element: <ProfilePage />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
