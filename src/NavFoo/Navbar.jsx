"use client";
import { Link } from "react-router-dom";

import { Button, DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
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
            {user ? (
                <div className="flex gap-3">
                <div className="relative">
                    <img
                    src={user?.photoURL}
                    className="rounded-full w-12"
                    alt=""
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        e.target.nextSibling.classList.toggle("hidden");
                    }}
                    />
                    <p className="absolute hidden top-12 left:[0%] lg:right-[60px] w-[150px] lg:w-[220px] bg-blue-500 px-2 py-1 rounded text-center">
                    {user?.displayName}
                    </p>
                </div>
                <button onClick={handleLogOut} className="btn btn-info ">
                    LogOut
                </button>
                </div>
            ) : (
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
                    <Button color="purple" className="btn btn-info">Login</Button>
                </Link>
                </div>
            )}

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
