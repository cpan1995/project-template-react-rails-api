import React, { useState, useEffect } from "react";


function Complaints() {
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log(user)
                    setUserInfo(user)
                })
            }
        });
    }, [])
    

    return(
        <div>
        </div>
    )
}

export default Complaints