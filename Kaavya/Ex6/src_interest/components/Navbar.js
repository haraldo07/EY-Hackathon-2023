// importing packages
import React from "react";
import { Link } from "react-router-dom";

// creating navbar component
const Navbar = () => {
    return(
        <>
            <div>
                {/* creating buttons for choosing which one to calculate */}
                &nbsp;
                <Link to="/simpint"> {/* instead of using href */}
                    <button>Simple Interest</button>
                </Link>
                &nbsp;
                <Link to="/compint">
                    <button>Compound Interest</button>
                </Link>
            </div>
        </>
    );
}

export default Navbar;