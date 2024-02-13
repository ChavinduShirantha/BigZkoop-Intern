import {configureStore} from "@reduxjs/toolkit";
import user from "./redux/slice/user";
import users from "./redux/slice/users";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./redux/sagas/types";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        user,
        users
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga)
export default store;
