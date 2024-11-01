import { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import {ProjectsContext} from '../contexts/ProjectsProvider'
function PrivateRoute(props) {
    const { user } = useContext(ProjectsContext);

    return user ? <Navigate to="/" /> : <Route {...props} />;
}

export default PrivateRoute; 