import React, { useEffect } from "react"
import {toast} from "react-toastify"

const Home =()=>{
    const notify = () => toast(<ToastDisplay/>);

    function ToastDisplay() {
        return (
            <div>
                <p><b>{"Hello"}</b></p>
                <p>{"Jabe"}</p>
            </div>
        );
    };
    useEffect(()=>{
        setInterval(()=>{
            notify()
        },1000)
    },[])
return (
    <div>
        <h1>Home</h1>
    </div>
)
}

export default Home