import React from "react";
import s from "../scss/user_icon.module.scss";

type propsType = {
    name:string
}
const UserIcon = (props: propsType) => {
    let letter = props.name[0];
    return(
        <div className={s.user__img}><span>{letter}</span></div>
    )
}
export default UserIcon;