
import { Link } from "react-router-dom";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import MyPage from "./DardTheme";

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout().then().catch();
    };

    return (
        <div className="p-2 w-full bg-slate-100">
        <Navbar fluid rounded className="bg-slate-100">
            <Navbar.Brand href="">
            <img
                src="https://i.ibb.co/Zm4YWYZ/logo-m.png"
                className="mr-3 h-6 sm:h-9"
                alt="Taskla"
            />
            <span className="self-center whitespace-nowrap text-2xl text-black font-bold dark:text-white">
                Taskla
            </span>
            
            
            </Navbar.Brand>
                

            <div className="flex gap-2 md:order-2">
            
            {
                user?(
                    <div className="flex md:order-2">
        <Dropdown
        arrowIcon={false}
        inline
        label={
        <Avatar alt="User settings" img={user?.photoURL} rounded />
        }
        >
        <Dropdown.Header>
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium">{user.email}</span>
        </Dropdown.Header>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogOut}>LogOut</Dropdown.Item>
        </Dropdown>
    
        </div>
                )
                :
                (
                    <div>
                <Link
                    to="/login"
                    className={({ isActive, isPending }) =>
                    isPending
                        ? "pending"
                        : isActive
                        ? "text-[#333333] underline font-medium text-lg"
                        : ""
                    }
                >
                    <button className="btn  btn-info bg-purple-600 text-white px-3 py-2 rounded-lg">Login</button>
                </Link>
                </div>
                )
            }
            <MyPage></MyPage>
            <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
            <Link  to="/"> Home</Link>
            <Link  to="/addJob">Add job</Link>
            <Link  to="/myPostedJob">My posted jobs</Link>
            <Link  to="/myBids">My Bids</Link>
            <Link  to="/bidReq">Bid Requests</Link>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default NavBar;
