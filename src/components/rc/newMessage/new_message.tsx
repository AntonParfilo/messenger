import React, { useState } from "react";
import Button from "../../button/button";
import s from "./new_message.module.scss";
import user from "../../../store/user";
import { observer } from "mobx-react-lite";
import { useMutation } from "@apollo/client";
import query from "../../../query/queries";

const NewMessage = observer(()=> {

    const [message, setMessage] = useState("");

    const [addMessage, {data, loading, error}] = useMutation(query.addMessage);

    function sendMessage(){
        const date = new Date();
        const hours = date.getHours();
        const minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const day = date.getDate();
        const now = hours+":"+minutes+" "+day+"/"+month+"/"+year;

        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        addMessage({ variables: {username: username, password: password, message: message, date: now} });
    }

    return (
        <div className={s.footer} style={user.ifLogin ? { display: "block" } : { display: "none" }}>
            <textarea onChange={(el)=> setMessage(el.target.value)} rows={1} placeholder="Новое сообщение..."></textarea>
            <Button onclick={sendMessage} message="Отправить" width="" />
        </div>
    )
});

export default NewMessage;