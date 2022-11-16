import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import s from "../scss/loading.module.scss";
import loading from "../store/loading";

const Loading = observer(() => {

    const loadingWrap = useRef<HTMLDivElement>(null);
    const loadingState = loading.isLoading;
    useEffect(()=>{
        if(loadingWrap.current){
            loadingState ? loadingWrap.current.style.display="block" : loadingWrap.current.style.display="none";
        }
    }, [loadingState]);
    
    return(
        <div className={s.loading} ref={loadingWrap}>
                <img className={s.loading__img} src="http://superstorefinder.net/support/wp-content/uploads/2018/01/grey_style.gif" alt="loading"/>
        </div>
    )
});

export default Loading;