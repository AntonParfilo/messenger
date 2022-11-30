import React from "react";
import s from "./header.module.scss";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = observer(()=>{

    return(
       <header className={s.header}>
            <nav className={s.heder__nav}>
                <Router>
                    <Link to="/">Чат</Link>
                    <Link to="/about">About</Link>
                </Router>
            </nav>
       </header>
    )
});
export default Header;