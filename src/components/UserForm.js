import {Button, Container, Input, InputLabel} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setUserSlice} from "../redux/slice/user";
import {addUserSlice, editUserSlice} from "../redux/slice/users";
import {nanoid} from "@reduxjs/toolkit";
import {CREATE_USER, UPDATE_USER_BY_ID} from "../redux/types";
import SaveIcon from '@mui/icons-material/Save';
import {Label} from "@mui/icons-material";

const UserForm = () => {
    /*const [user, setUser] = useState({
        id: 0,
        name: '',
        email: '',
        password: ''
    });*/

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const handleChange = (prop) => (event) => {
        dispatch(setUserSlice({...user, [prop]: event.target.value}))
    }

    const handleSubmit = () => {
        // user.id === 0 ? dispatch(addUserSlice({...user,id:nanoid(8)})):dispatch(editUserSlice)
        user.id === 0 ? dispatch({
            type: CREATE_USER,
            user: {...user, id: nanoid(4)}
        }) : dispatch({type: UPDATE_USER_BY_ID, user})
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
                <h1 style={{textAlign:"center"}}>User Registration Form</h1>
                <InputLabel htmlFor="uId"> ID</InputLabel>
                <Input id="uId" value={user.id} placeholder="User ID will generated auto" fullWidth style={{marginBottom:10}} disabled/>
                <InputLabel htmlFor="uName"> Name</InputLabel>
                <Input id="uName" onChange={handleChange('name')} placeholder="Enter Name" value={user.name} fullWidth style={{marginBottom:10}}/>
                <InputLabel htmlFor="uEmail"> Email</InputLabel>
                <Input id="uEmail" onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth style={{marginBottom:10}}/>
                <InputLabel htmlFor="uPassword"> Password</InputLabel>
                <Input id="uPassword" onChange={handleChange('password')} placeholder="Enter Password" value={user.password}
                       fullWidth style={{marginBottom:20}}/>
                <Button onClick={() => handleSubmit()} variant="contained" color="success"
                        endIcon={<SaveIcon/>} fullWidth>Save</Button>
            </Container>
        </>
    );
}

export default UserForm;
