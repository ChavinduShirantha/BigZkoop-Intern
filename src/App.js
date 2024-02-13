import logo from './logo.svg';
import './App.css';
import Grid from "@mui/material/Grid";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <>
            <Provider store={store}>
                <Grid container rowSpacing={8} style={{justifyContent:"center"}}>
                    <Grid item xs={12} md={4} lg={6} xl={3} >
                        <UserForm/>
                    </Grid>
                    <Grid item xs={12} md={9} lg={12} xl={12} style={{padding:50 }}>
                        <UserTable/>
                    </Grid>
                </Grid>
            </Provider>
        </>
    );
}

export default App;
