import {Button, Container, Input} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setUserSlice} from "../redux/slice/user";
import {addUserSlice, editUserSlice} from "../redux/slice/users";
import {nanoid} from "@reduxjs/toolkit";

const UserForm = () => {
    /*const [user, setUser] = useState({
        id: 0,
        name: '',
        email: '',
        password: ''
    });*/

    const user=useSelector(state => state.user)

    const dispatch=useDispatch()

    const handleChange = (prop) => (event) => {
        dispatch(setUserSlice({...user, [prop]: event.target.value}))
    }

    const handleSubmit=()=>{
        user.id === 0 ? dispatch(addUserSlice({...user,id:nanoid(8)})):dispatch(editUserSlice)
        dispatch(setUserSlice({
            id: 0,
            name: '',
            email: '',
            password: ''
        }))
    }

    return (
        <>
            <Container>
                <Input value={user.id} fullWidth disabled/>
                <Input onChange={handleChange('name')} placeholder="Enter Name" value={user.name} fullWidth/>
                <Input onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth/>
                <Input onChange={handleChange('password')} placeholder="Enter Password" value={user.password}
                       fullWidth/>
                <Button onClick={()=>handleSubmit()} fullWidth variant="contained">Submit</Button>
            </Container>
        </>
    );
}

export default UserForm;
