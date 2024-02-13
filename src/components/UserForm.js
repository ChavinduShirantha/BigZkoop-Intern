import {Button, Container, Input} from "@mui/material";
import {useState} from "react";

const UserForm = () => {
    const [user, setUser] = useState({
        id: 0,
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (prop) => (event) => {
        setUser({...user, [prop]: event.target.value})
    }

    return (
        <>
            <Container>
                <Input value={user.id} fullWidth disabled/>
                <Input onChange={handleChange('name')} placeholder="Enter Name" value={user.name} fullWidth/>
                <Input onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth/>
                <Input onChange={handleChange('password')} placeholder="Enter Password" value={user.password}
                       fullWidth/>
                <Button fullWidth variant="contained">Submit</Button>
            </Container>
        </>
    );
}

export default UserForm;
