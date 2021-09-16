import React, { useState, useEffect } from "react";
import Class from './Class'
import { Image, List, Table, Button, Tab } from 'semantic-ui-react'

function Classes({ teacherBool, user }){

    const [classes, setClasses] = useState([])
    const [homeworks, setHomeworks] = useState([])
    useEffect(() => {
        fetch('/me').then((r) => {
                if(r.ok){
                    r.json().then((user) => {
                        fetch(`/${user.id}/classes`).then((r) => {
                            if(r.ok){
                                r.json().then((x) => {
                                    setClasses(x)
                                    
                                })
                            }
                        })
                    })
                }
            })
    }, [])

    let newTabRender = [];


    classes.map((claz, index) => {
        newTabRender.push({menuItem: claz.subject, render: () => <Tab.Pane> <Class key={claz.subject + index} claz = {claz}/> </Tab.Pane>})
    })
   
    return(    
        <div className = 'studentclasses'>
            <div>
                <Tab panes={newTabRender} />
            </div>

            <div>
            </div>
        </div>        
    )
}


export default Classes