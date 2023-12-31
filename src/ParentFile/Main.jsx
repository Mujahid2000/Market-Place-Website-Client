
import { Outlet } from 'react-router-dom';
import NavBar from '../NavFoo/Navbar';
import Footer from '../NavFoo/Footer';

const Main = () => {
    return (
        <div className='dark:bg-gray-900'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;