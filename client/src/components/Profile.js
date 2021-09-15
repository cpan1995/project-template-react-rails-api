import { useState, useEffect } from "react";
import { Form, Button, Header, Grid, Image, Message, Segment, Modal } from "semantic-ui-react";


function Profile({ user, setUser }) {
    const [avatar, setAvatar] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [open, setOpen] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`users/${user.id}/`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                avatar: avatar,
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            }),
        })
            .then((r) => r.json())
            .then((user) => setUser(user))
    }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 750 }}>
                <Header as='h2' color='teal' textAlign='center' block >
                    Edit Your Profile
                </Header>
                <Form onSubmit={handleSubmit} >
                <Segment stacked>
                      
                        
                            
                            <Modal
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                open={open}
                                trigger={<Image size='small' alt={"avatar"} src={user.avatar ? user.avatar : 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'} />}>
                                <Modal.Header>Select a Photo</Modal.Header>
                                <Modal.Content image>
                                    <Image size='medium' src={user.avatar} wrapped />
                                    <Modal.Description>
                                        <Header>Profile Photo</Header>
                                        <p> TEXT HERE
                                        </p>
                                        <p>Is this the photo you'd like to use?</p>
                                    </Modal.Description>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='black' onClick={() => setOpen(false)}>
                                        Nope
                                    </Button>
                                    <Button
                                        labelpostition='right'
                                        color='teal'
                                        onClick={() => setOpen(false)}>
                                       Looks Good!
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                            
                            <Form.Field >
                            <label>
                                Edit Avatar:
                                <input
                                    name="avatar"
                                    type="text"
                                    value={avatar}
                                    onChange={(e) => setAvatar(e.target.value)}
                                    placeholder="Avatar URL"
                                />
                            </label>
                        </Form.Field>
                        <Form.Field>
                            <label>Edit Username: </label>
                            <input name="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username" />
                        </Form.Field>
                        <Form.Field>
                            <label>Edit Password: </label>
                            <input name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="New Password" />
                        </Form.Field>
                        <Form.Field>
                            <label>Password Confirmation: </label>
                            <input name="username"
                                type="password"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                placeholder="Confirm Password" />
                        </Form.Field>
                        <Button>Submit</Button>
                        
                       
                    </Segment>
                    
                </Form>
            </Grid.Column>
        </Grid>

    )
}
export default Profile