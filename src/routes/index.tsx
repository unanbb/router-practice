import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Profile from './Profile';
import ProfileMore from './ProfileMore';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/profile',
    element: <Profile />,
    children: [
      {
        path: ':id',
        element: <ProfileMore />
      }
    ]
  }
]);