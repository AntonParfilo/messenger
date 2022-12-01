import React, { useState, useEffect, useRef } from "react";
import Button from "../../button/button";
import s from "./new_message.module.scss";
import user from "../../../store/user";
import { observer } from "mobx-react-lite";
import { useMutation } from "@apollo/client";
import query from "../../../query/queries";
import messages from "../../../store/messages";

const NewMessage: React.FC = observer(()=> {

    const [message, setMessage] = useState("");
    const [sendProcess, setProcess] = useState(false);
    let textarea = useRef<HTMLTextAreaElement>(null);

    const [addMessage, {data, loading, error}] = useMutation(query.addMessage);

    function sendMessage(){
        if(message.length > 0 && message.length < 900){
            textarea.current?.classList.remove(s.error); 
            setProcess(true);
            const date: Date = new Date();
            const hours: number = date.getHours();
            const minutes: string = (date.getMinutes()<10?'0':'') + date.getMinutes();
            const month: number = date.getMonth()+1;
            const year: number = date.getFullYear();
            const day: number = date.getDate();
            const now: string = hours+":"+minutes+" "+day+"/"+month+"/"+year;

            const username: string | null = localStorage.getItem("username");
            const password: string | null = localStorage.getItem("password");
            addMessage({ variables: {username: username, password: password, message: message, date: now} });
            setMessage("");
        }
        else {
            textarea.current?.classList.add(s.error); 
        }
    }

    useEffect(()=>{
        setProcess(false);
    },[messages.messages.length]);

    return (
        <div className={s.footer} style={user.ifLogin ? { display: "block" } : { display: "none" }}>
            <textarea ref={textarea} onChange={(el)=> setMessage(el.target.value)} rows={1} placeholder="Новое сообщение..." value={message} onClick={(el)=> el.currentTarget.classList.remove(s.error)} ></textarea>
            <div style={sendProcess? {display: "none"} : {display: "block"}} >
                <Button onclick={sendMessage} message="Отправить" width="" />
            </div>
            <img className={s.loading} style={sendProcess? {display: "block"} : {display: "none"}} src="../../../img/preloader.gif" alt="loading" />
        </div>
    )
});

export default NewMessage;

