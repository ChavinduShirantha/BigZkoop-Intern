import {configureStore} from "@reduxjs/toolkit";
import user from "./redux/slice/user";
import users from "./redux/slice/users";

const store=configureStore({
   reducer:{
       user,
       users
   }
});

export default store;
