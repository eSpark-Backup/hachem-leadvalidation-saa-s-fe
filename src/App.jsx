import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
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
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
}

export default App;
