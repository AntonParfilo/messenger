import React from "react";
import s from "../scss/rc.module.scss";
import { observer } from "mobx-react-lite";

const Rc = observer(()=>{

    return(
        <div className={s.content__rc}>
            rc
        </div>
    )
});
export default Rc;