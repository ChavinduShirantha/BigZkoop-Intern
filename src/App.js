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
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={6}>
                        <UserForm/>
                    </Grid>
                    <Grid item xs={12} md={8} lg={6}>
                        <UserTable/>
                    </Grid>
                </Grid>
            </Provider>
        </>
    );
}

export default App;
