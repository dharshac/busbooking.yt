import { Link } from "react-router-dom"
export default function Buddy()
{
    return(
        <div className="Header">
            <div className="Logo">
                <img src="./logo.png" className="title" alt="" />
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li className="nav-link"><Link className="link" to={'/Signup'}>Signup</Link></li>
                    <li className="nav-link"><Link className="link" to={'/Login'}>Login</Link></li>

                </ul>
            </nav>
        </div>
    )
}