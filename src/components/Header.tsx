import { Link } from "react-router-dom";

function Header(){

    return(
        <div className="Header">
            <div className="">
                <nav>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/Projects"}>Projects</Link></li>
                        <li><a href="https://github.com/stovet">Github</a></li>

                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Header;