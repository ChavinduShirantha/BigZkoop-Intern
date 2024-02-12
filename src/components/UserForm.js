import {Button, Container, Input} from "@mui/material";

const UserForm = () => {
    return (
        <>
            <Container>
                <Input value="id" fullWidth disabled />
                <Input placeholder="Enter Name" value="name" fullWidth />
                <Input placeholder="Enter Email" value="email" fullWidth />
                <Input placeholder="Enter Password" value="password" fullWidth />
                <Button fullWidth variant="contained">Submit</Button>
            </Container>
        </>
    );
}

export default UserForm;
