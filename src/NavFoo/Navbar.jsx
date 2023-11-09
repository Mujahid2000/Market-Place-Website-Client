"use client";
import { Link } from "react-router-dom";

import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout().then().catch();
    };

    return (
        <div className="p-4 ">
        <Navbar fluid rounded>
            <Navbar.Brand href="">
            <img
                src="https://i.ibb.co/6nTm7CG/logo-m.png"
                className="mr-3 h-6 sm:h-9"
                alt="Taskla"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Taskla
            </span>
            </Navbar.Brand>
            <div className="flex gap-2 md:order-2">
            <Flowbite>
                ...
                <DarkThemeToggle />
                ...
            </Flowbite>
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
        
            <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
            <Navbar.Link href="/"> Home</Navbar.Link>
            <Navbar.Link href="/addJob">Add job</Navbar.Link>
            <Navbar.Link href="/myPostedJob">My posted jobs</Navbar.Link>
            <Navbar.Link href="/myBids">My Bids</Navbar.Link>
            <Navbar.Link href="/bidReq">Bid Requests</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default NavBar;
