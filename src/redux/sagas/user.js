import {createUserAPI, deleteUserByIdAPI, getUserByIdAPI, getUsersAPI, updateUserAPI} from "../../apis";
import {put} from "axios";
import {addUserSlice, deleteUserSlice, editUserSlice, getUsersSlice} from "../slice/users";
import {setUserSlice} from "../slice/user";

export const getUsersSaga = () {
    const users= yield getUsersAPI()
    yield put(getUsersSlice(users))
}

export const getUserByIdSaga = (id) {
    const user= yield getUserByIdAPI(id)
    yield put(setUserSlice(user))
}

export const CreateUserSaga = (user) {
    const user= yield createUserAPI(user)
    yield put(addUserSlice(user))
}

export const UpdateUserSaga = (user) {
    const user= yield updateUserAPI(user)
    yield put(editUserSlice(user))
}

export const DeleteUserByIdSaga = (id) {
    const user= yield deleteUserByIdAPI(id)
    yield put(deleteUserSlice(user))
}
