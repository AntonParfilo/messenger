import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import query from "../../../query/queries";
import user from "../../../store/user";
import s from "./lc_header.module.scss";
import UserBar from "../userbar/userbar";
import Login from "../login/login";
import Registration from "../registration/registration";
import loadingState from "../../../store/loading";

const LcHeader = observer(() => {
  const headerButtonReg: any = useRef(null);
  const headerButtonLogin: any = useRef(null);
  let [headerState, setHeaderState] = useState(false);

  let username = localStorage.getItem("username");
  let password = localStorage.getItem("password");
  const { loading, error, data } = useQuery(query.checkUser, {
    variables: { username: username, password: password },
  });
  if (error) {
    console.log("error");
  }
  useEffect(() => {
    if (!loading) {
      if (data.checkUser.message === "OK") user.setIfLogin(true);
      loadingState.setLoadnig("checkUser", false);
    } else loadingState.setLoadnig("checkUser", true);
  }, [data]);

  function changeState(el: EventTarget, value: boolean): void {
    setHeaderState((headerState = value));
    headerButtonReg.current.classList.toggle(s.active);
    headerButtonLogin.current.classList.toggle(s.active);
  }

  return (
    <div>
      <div
        className={s.lc_header}
        style={user.ifLogin ? { display: "none" } : { display: "flex" }}
      >
        <p
          ref={headerButtonReg}
          className={s.active}
          onClick={(ev) => changeState(ev.target, false)}
        >
          Регистрация
        </p>
        <p
          ref={headerButtonLogin}
          onClick={(ev) => changeState(ev.target, true)}
        >
          Войти
        </p>
      </div>
      {user.ifLogin ? <UserBar /> : headerState ? <Login /> : <Registration />}
    </div>
  );
});
export default LcHeader;
