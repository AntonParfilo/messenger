import React from "react";
import s from "./header.module.scss";
import { observer } from "mobx-react-lite";

const Header = observer(()=>{

    return(
       <header className={s.header}>
            <nav className={s.heder__nav}>
                <a href="#">Чат</a>
                <a href="#">О проекте</a>
            </nav>
       </header>
    )
});
export default Header;