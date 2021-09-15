import React, { useState, useEffect } from "react";
import Class from './Class'

function Classes({ teacherBool, user }){
    
    const [teacherInfo, setTeacherInfo] = useState({})

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch(`/${user.id}/classes`)
        .then(res => res.json())
        .then(classes => setClasses(classes))
    }, [])

    return(    
        <div className = 'allclasses'>
            <div>
                <ul className ='classlist'>
                    {classes.map((classs) => (
                        <Class classs={classs} key = {classs.id}/>
                    ))}
                </ul>
            </div>
        </div>        
    )
}

export default Classes