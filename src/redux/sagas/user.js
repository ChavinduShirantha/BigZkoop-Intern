import {createUserAPI, deleteUserByIdAPI, getUserByIdAPI, getUsersAPI, updateUserAPI} from "../../apis";
import {put, takeEvery} from "redux-saga/effects";
import {addUserSlice, deleteUserSlice, editUserSlice, getUsersSlice} from "../slice/users";
import {setUserSlice} from "../slice/user";
import {CREATE_USER, DELETE_USER_BY_ID, GET_USER_BY_ID, GET_USERS, UPDATE_USER_BY_ID} from "../types";

export const getUsersSaga = () => {
    const users = yield getUsersAPI()
    yield put(getUsersSlice(users))
}

export const getUserByIdSaga = (id) => {
    const user = yield getUserByIdAPI(id)
    yield put(setUserSlice(user))
}

export const createUserSaga = (user) => {
    const user = yield createUserAPI(user)
    yield put(addUserSlice(user))
}

export const updateUserSaga = (user) => {
    const user = yield updateUserAPI(user)
    yield put(editUserSlice(user))
}

export const deleteUserByIdSaga = (id) => {
    const user = yield deleteUserByIdAPI(id)
    yield put(deleteUserSlice(user))
}

export const watchUsersAsync = () => {
    yield takeEvery(GET_USERS, getUsersSaga())
    yield takeEvery(GET_USER_BY_ID, getUserByIdSaga())
    yield takeEvery(CREATE_USER, createUserSaga())
    yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga())
    yield takeEvery(DELETE_USER_BY_ID, deleteUserByIdSaga())
}
