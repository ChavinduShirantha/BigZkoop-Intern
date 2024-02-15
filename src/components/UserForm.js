import {Button, Container, Input, InputLabel} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setUserSlice} from "../redux/slice/user";
import {CREATE_USER, UPDATE_USER_BY_ID} from "../redux/types";
import SaveIcon from '@mui/icons-material/Save';
import {nanoid} from "@reduxjs/toolkit";

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
            username: '',
            name: '',
            email: '',
            phone: ''
        }))
    }

    return (
        <>
            <Container style={{
                backgroundColor: "ButtonShadow",
                paddingBottom: 20,
                paddingTop: 1,
                marginTop: 20,
                borderRadius: 20,
                paddingLeft: 30,
                paddingRight: 30
            }}>
                <h1 style={{textAlign: "center"}}>React Redux CRUD</h1>
                <InputLabel htmlFor="uId"> UserName : </InputLabel>
                {/*<Input id="uId" onChange={handleChange('id')} placeholder="Enter ID" value={user.id} fullWidth
                       style={{marginBottom: 10}}/>*/}
                <Input id="uId" onChange={handleChange('username')} placeholder="Enter User Name" value={user.username}
                       fullWidth
                       style={{marginBottom: 10}}/>
                <InputLabel htmlFor="uName"> Name : </InputLabel>
                <Input id="uName" onChange={handleChange('name')} placeholder="Enter Name" value={user.name} fullWidth
                       style={{marginBottom: 10}}/>
                <InputLabel htmlFor="uEmail"> Email : </InputLabel>
                <Input id="uEmail" onChange={handleChange('email')} placeholder="Enter Email" value={user.email}
                       fullWidth style={{marginBottom: 10}}/>
                <InputLabel htmlFor="uContact"> Contact : </InputLabel>
                <Input id="uContact" onChange={handleChange('phone')} placeholder="Enter Contact" value={user.phone}
                       fullWidth style={{marginBottom: 20}}/>
                <Button onClick={() => handleSubmit()} variant="contained" color="success"
                        endIcon={<SaveIcon/>} fullWidth>Save</Button>
            </Container>
        </>
    );
}

export default UserForm;
