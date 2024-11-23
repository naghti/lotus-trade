import React, {useEffect, useState} from 'react';

function RealTime(props) {
    let [time, setTime] = useState();
    useEffect(()=>{
        setTime(new Date().toLocaleTimeString());
        setInterval(()=>setTime(new Date().toLocaleTimeString(), 1000)
    )
    },[])
    return (
        <div style={{position: "absolute", top: "10px", right: "10px", color: "darkred"}}>
            Текущее время: {time}
        </div>
    );
}

export default RealTime;