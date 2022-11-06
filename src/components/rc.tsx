import React from "react";
import s from "../scss/rc.module.scss";
import { observer } from "mobx-react-lite";
import Message from "./message";

const Rc = observer(()=>{

    return(
        <div className={s.content__rc}>
            <Message/>
        </div>
    )
});
export default Rc;