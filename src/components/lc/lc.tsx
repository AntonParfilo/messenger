import React from "react";
import { useEffect } from "react";
import s from "./lc.module.scss";
import { observer } from "mobx-react-lite";
import UserCard from "../user/user_card";
import { useQuery } from "@apollo/client";
import query from "../../query/queries";
import user from "../../store/user";
import loadingState from "../../store/loading";
import LcHeader from "./lcheader/lc_header";

const Lc = observer((): JSX.Element => {

  const { loading, error, data } = useQuery(query.getUsers);

  function isError() {
    console.log("Что-то пошло не так...");
  }
  if (error) {
    isError();
  }
  useEffect(() => {
    if (!loading) {
      user.setUsers(data.getUsers);
      loadingState.setLoadnig("getUsers", false);
    } else loadingState.setLoadnig("getUsers", true);
  }, [data]);

  const users: JSX.Element[] = user.users.map((el, index) => {
    return <UserCard key={index} username={el.username} agent={el.agent} />;
  });

  return (
    <div className={s.content__lc}>
      <LcHeader />
      <h3>Участники</h3>
      <div className={s.users}>
        {loading || error ? null : users}
      </div>
    </div>
  );
});
export default Lc;
