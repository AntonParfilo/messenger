import React from "react";
import s from "./header.module.scss";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header: React.FC = observer(()=>{

    return(
       <header className={s.header}>
            <nav className={s.heder__nav}>
                    <Link to="/">Чат</Link>
                    <Link to="/about">About</Link>
            </nav>
       </header>
    )
});
export default Header;