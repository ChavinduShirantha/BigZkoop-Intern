import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import {setUserSlice} from "../redux/slice/user";
import {DELETE_USER_BY_ID, GET_USERS} from "../redux/types";
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function UserTable() {
    const rows = useSelector(state => state.users)
    const dispatch = useDispatch()
    React.useEffect(() => dispatch({ type: GET_USERS }), [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Contact</TableCell>
                        <TableCell align="center">Edit</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row" align="center">
                                {row.id}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => dispatch(setUserSlice(row))}
                                        variant="contained" startIcon={<EditIcon />}>Edit</Button>
                            </TableCell>
                            <TableCell align="center">
                                <Button onClick={() => dispatch({type: DELETE_USER_BY_ID, id: row.id},)}
                                        variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
