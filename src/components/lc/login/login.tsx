import React, { useState, useRef, useEffect } from "react";
import s from "./login.module.scss";
import Button from "../../button/button";
import { useLazyQuery, useMutation } from "@apollo/client";
import query from "../../../query/queries";
import {Md5} from "md5-typescript";
import user from "../../../store/user";
import { observer } from "mobx-react-lite";
import loadingState from "../../../store/loading";

const Login = observer(() => {

  let [loginState, setLoginState] = useState("");
  let [passwordState, setPasswordState] = useState("");
  let [err, setErr] = useState("");
  let login: any = useRef();
  let password: any = useRef();
  
  const [checkUser, { loading, error, data }] = useLazyQuery(query.checkUser, {
    variables: { username: loginState, password: Md5.init(passwordState) },
  });
  if (error) {
    console.log("error");
  }


  function useCheckLogin() {
    setErr("");
    let errorState = "";
    let arr = [login.value.split(" ").join(""), password.value.split(" ").join("")];
    arr.forEach((el) => {
      if (el.length < 3 || el.length > 15 || !/^[a-zA-Z0-9]+$/.test(el)) {
        errorState= "От 3 до 15 символов. Только латинские символы и цифры.";
      }
    });
    if(errorState.length) setErr(errorState)
    else {
      setLoginState(login.value);
      setPasswordState(password.value);
      checkUser();
      loadingState.setLoadnig("checkUser", true);
    }
  }

  useEffect(() => {
    if (data && !loading) {
      if (data.checkUser.message === "OK"){
        localStorage.setItem("username", data.checkUser.data.username);
        localStorage.setItem("password", data.checkUser.data.password);
        user.setIfLogin(true);
      }
      if (data.checkUser.message === "Error") setErr("Неправильный логин или пароль");
      loadingState.setLoadnig("checkUser", false);
    }
  }, [data]);

  return (
    <div className={s.login_wrapper}>
      <table>
        <tbody>
          <tr>
            <td className={s.tleft}>
              <p>Логин:</p>
            </td>
            <td>
              <input ref={el => login = el} type="text" />
            </td>
          </tr>
          <tr>
            <td className={s.tleft}>
              <p>Пароль:</p>
            </td>
            <td>
              <input ref={el => password = el} type="password" />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className={s.tdBut}>
              <Button onclick={useCheckLogin} message="Войти" width="100%" />
            </td>
          </tr>
        </tbody>
      </table>
      {err? <p className="error">{err}</p> : null}
    </div>
  );
});
export default Login;
