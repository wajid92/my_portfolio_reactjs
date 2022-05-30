import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <nav className="navbar">
            <Link to="/" href="#Home">Home</Link>
            <Link to="/languages" href="#Languages">Languages</Link>
            <Link to="/achievements" href="#Acheivements">Achievements</Link>
            <Link to="/Projects" href="#Projects">Projects</Link>
            <Link to="/Academics" href="#Academics">Academics</Link>
        </nav>
        </>
    )
}