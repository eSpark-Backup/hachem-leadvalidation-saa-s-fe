import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import routes from './routes/routes';

import { persistor } from './redux/store';
import { useProfileQuery } from './redux/slices/auth/authApiSlice';
import { setCredentials } from './redux/slices/auth/authSlice';

import { setNavigator } from './utils/navigateService';

import './App.css';
import './assets/fonts/fonts.css';

const renderRoutes = (routes) =>
  routes.map(({ path, element, children }, index) =>
    children ? (
      <Route key={index} path={path} element={element}>
        {children.map((child, i) => (
          <Route
            key={i}
            index={child.index}
            path={child.path}
            element={child.element}
          />
        ))}
      </Route>
    ) : (
      <Route key={index} path={path} element={element} />
    )
  );

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);

  const { data, isSuccess } = useProfileQuery(undefined, {
    skip: !token || user,
  });

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  useEffect(() => {
    if (!token) {
      persistor.purge();
    }
  }, [token]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setCredentials({ accessToken: token, user: data?.user }));
    }
  }, [isSuccess, data, dispatch, token]);

  return <Routes>{renderRoutes(routes)}</Routes>;
}

export default App;
