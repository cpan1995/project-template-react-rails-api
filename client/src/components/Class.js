import React, { useState, useEffect } from "react";
import { Image, List, Table, Button } from 'semantic-ui-react'

function Class({claz}) {

    const [homeworks, setHomeworks] = useState(claz.homeworks)

    console.log(homeworks)

    function handleClick(classStuff, index){
     
        console.log(classStuff + index)
        //Pop the homework from index
        //Then store the new homework array back into the user
        //you can probably do that with a call back
         
    }

    return(
        <div>
            <h1>Grade: {claz.grade}</h1>
            <Table celled fixed singleLine>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Homeworks</Table.HeaderCell>
                        <Table.HeaderCell>Completed?</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {homeworks.map((classs, index) => (
                        <Table.Row>
                            <Table.Cell><h2 style={{ color: 'black', fontWeight: 'bold' }}>{classs}</h2></Table.Cell>
                            <Table.Cell><Button onClick = {() => handleClick(classs, index)}>Yes</Button></Table.Cell>
                        </Table.Row>
                            ))}
                    </Table.Body>
                </Table>
        </div>
    )
}

export default Class