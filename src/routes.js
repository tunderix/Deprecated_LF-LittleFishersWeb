import App from './Components/App';
import Manage from './Components/Manage';
import Front from './Components/Front';
import Login from './Components/Login';
import Register from './Components/Register';
import NotFound from './Components/NotFound';
import Base from './Components/Base';

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: App
    },

    {
      path: '/manage',
      component: Manage
    },

    {
      path: '/front',
      component: Front
    },

    {
      path: '/login',
      component: Login
    },

    {
      path: '/register',
      component: Register
    },

    {
      path: '/*',
      component: NotFound
    }

  ]
};

export default routes;