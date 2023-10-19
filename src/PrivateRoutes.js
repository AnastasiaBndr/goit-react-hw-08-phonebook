import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import authSelectors from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to="/login" />}
    </Route>
  );
};
