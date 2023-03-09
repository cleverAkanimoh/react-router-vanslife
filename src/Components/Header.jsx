import { Link, NavLink } from "react-router-dom"

export default function () {
    activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "blue"
    }
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Host
                </NavLink>

                <NavLink 
                    to="/about"
                >
                About
                </NavLink>

                <NavLink 
                    to="/vans"
                >Vans
                </NavLink>
            </nav>
        </header>
    )
}