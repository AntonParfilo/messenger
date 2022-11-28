import React, { useEffect } from "react";
import { useState } from "react";
import s from "./registration.module.scss";
import Button from "../../button/button";
import query from "../../../query/queries";
import { useMutation } from "@apollo/client";
import user from "../../../store/user";
import loadingState from "../../../store/loading";

const Registration = () => {

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setCpassword] = useState("");
  let [err, setErr] = useState("");
  
  const [sendUser, {data, loading, error}] = useMutation(query.addUser);
  
  useEffect(()=>{
    if(!loading && data){
      if(data.addUser.message === "already") setErr(data.addUser.data.username+" уже зарегистрирован.");
      else{
        setErr("");
        localStorage.setItem('username', data.addUser.data.username);
        localStorage.setItem('password', data.addUser.data.password);
        user.setIfLogin(true);
      }
      loadingState.setLoadnig("registration", false);
    }
  },[data]);

  function checkReg(){
   let error = "";
    let arr = [username.split(" ").join(""), password.split(" ").join(""), cpassword.split(" ").join("")];
    arr.forEach((el) => {
      if (el.length < 3 || el.length > 15 || !/^[a-zA-Z0-9]+$/.test(el)) {
        error= "От 3 до 15 символов. Только латинские символы и цифры.";
      }
      if (arr[1] !== arr[2]) error = "Пароли не совпадают";
    });
    let userAgent:string = "Неизвесно";
    if(window.navigator.appVersion.indexOf("Windows")>=0) userAgent = "Windows";
    if(window.navigator.appVersion.indexOf("Linux")>=0) userAgent = "Linux";
    if(window.navigator.appVersion.indexOf("Android")>=0) userAgent = "Android";
    if(error.length) setErr(error);
    else {
      sendUser({ variables: {username: arr[0], password: arr[1], agent: userAgent} });
      loadingState.setLoadnig("registration", true);
    }

  }

  return (
    <div className={s.registration_wrapper}>
      <table>
        <tbody>
        <tr>
          <td className={s.tleft}>
            <p>Ваше имя:</p>
          </td>
          <td>
            <input type="text" onChange={(el)=> setUsername(el.target.value)} /> 
          </td>
        </tr>
        <tr>
          <td className={s.tleft}>
            <p>Придумайте пароль:</p>
          </td>
          <td>
            <input type="password" onChange={(el)=> setPassword(el.target.value)} />
          </td>
        </tr>
        <tr>
          <td className={s.tleft}>
            <p>Повторите пароль:</p>
          </td>
          <td>
            <input type="password" onChange={(el)=> setCpassword(el.target.value)} />
          </td>
        </tr>
        <tr>
          <td colSpan={2} className={s.tdBut}><Button onclick={checkReg} message = "Регистрация" width="100%"/></td>
        </tr>
        </tbody>
      </table>
      {err? <p className="error">{err}</p> : null}
    </div>
  );
};

export default Registration;
