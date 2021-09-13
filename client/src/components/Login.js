import React, { useState } from "react";
import { NavLink, Switch, Route, useHistory } from "react-router-dom"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Background from './img/background_ccp.jpg'


function Login({ handleSetUser }){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    let history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              username: username,
              password: password
           }),
        })
          .then((r) => r.json())
           .then((user) => 
           {
            console.log(user)
            //handleSetUser(user)
            });
      }
      function handleSignUp(){
        history.push('/signup')
      }

      let style={  
        backgroundImage: 'url(${Background})',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }

      function handleTest(e){
          console.log(e)
      }

    return(
        // <div className = 'login'>
        //     <form className = 'loginform' onSubmit = {handleSubmit}>
        //             <label htmlFor="username">Username:</label>
        //             <input
        //                 type="text"
        //                 id="username"
        //                 value={username}
        //                 onChange={(e) => setUsername(e.target.value)}
        //             />
        //             <label htmlFor="password">Password:</label>
        //             <input
        //                 type="password"
        //                 id="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //             <button>Login</button>
        //             <button onClick = {handleSignUp}>
        //                SignUp
        //             </button>
        //     </form>
        // </div>
        <div>
            <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center' block >
                        Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='UserName' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Button color='teal' fluid size='large' onClick = {handleTest}>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Don't Have An Account? <a href='/signup'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Login