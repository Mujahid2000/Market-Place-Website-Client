import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';
import { Spinner } from 'flowbite-react';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(user, loading);
    console.log(user)

    if (loading)
        return <Spinner color="purple" aria-label="Purple spinner example" />


    if (user) {

        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};



export default PrivateRoute;