import React from "react";
import user from "../../../store/user";
import Button from "../../button/button";
import s from "./userbar.module.scss";

const UserBar = () => {

    const username = localStorage.getItem("username");

    function Logout(){
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        user.setIfLogin(false);
    }

    return (
        <div className={s.userBar}>
            <p>Привет, <span>{username}</span>!</p>
            <Button message="Выйти" onclick={Logout} width= "fit-content" />
        </div>
    )
}
export default UserBar;