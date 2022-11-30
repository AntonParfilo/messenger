import React, { useState, useEffect } from "react";
import Button from "../../button/button";
import s from "./new_message.module.scss";
import user from "../../../store/user";
import { observer } from "mobx-react-lite";
import { useMutation } from "@apollo/client";
import query from "../../../query/queries";
import messages from "../../../store/messages";

const NewMessage = observer(()=> {

    const [message, setMessage] = useState("");
    const [sendProcess, setProcess] = useState(false);

    const [addMessage, {data, loading, error}] = useMutation(query.addMessage);

    function sendMessage(){
        if(message.length > 0 && message.length < 200){
            setProcess(true);
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
            setMessage("");
        }
    }

    useEffect(()=>{
        setProcess(false);
    },[messages.messages.length]);

    return (
        <div className={s.footer} style={user.ifLogin ? { display: "block" } : { display: "none" }}>
            <textarea onChange={(el)=> setMessage(el.target.value)} rows={1} placeholder="Новое сообщение..." value={message}></textarea>
            <div style={sendProcess? {display: "none"} : {display: "block"}} >
                <Button onclick={sendMessage} message="Отправить" width="" />
            </div>
            <img className={s.loading} style={sendProcess? {display: "block"} : {display: "none"}} src="../../../img/preloader.gif" alt="loading" />
        </div>
    )
});

export default NewMessage;