import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TodoModel } from '../../../models/TodoModel';
import { Input } from '@mui/material';
import { Link } from 'react-router-dom';

interface TodoProps {
    todo: TodoModel,
    deleteTodo: Function,
    saveTodo: Function
}

export const Todo = ({ todo, deleteTodo, saveTodo }: TodoProps) => {

    const [editMode, setEditMode] = useState(false)
    const [detailTodo, setDetailTodo] = useState(todo)

    const handleDelete = () => {
        deleteTodo(todo.id);
    }

    const handleEdit = () => {
        setEditMode(!editMode)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
            setDetailTodo({
                ...detailTodo,
                [event.target.name]: event.target.value
            })
    };

    const handleSave = () => {
        console.log(detailTodo)
        saveTodo({...detailTodo, done: false})
        setEditMode(false);
    }

    return (
        <Card sx={{ minWidth: 275, margin: "5%" }}>
            {!editMode ?
                <>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {todo.limitDate}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {todo.title}
                        </Typography>
                    </CardContent>
                </> :
                <>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Input defaultValue={detailTodo.title} name="title" onChange={handleChange}></Input>
                        <Input defaultValue={detailTodo.limitDate} name="limitDate" onChange={handleChange}></Input>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={handleSave}>Sauvegarder</Button>
                    </CardActions>
                </>
            }
            <CardActions>
                <Link to={todo.id.toString()} style={{ textDecoration: 'none' }}><Button size="small" onClick={console.log}>Details</Button></Link>
                <Button size="small" onClick={handleEdit}>{editMode ? "Annuler" : "Editer"}</Button>
                <Button size="small" onClick={handleDelete}>Supprimer</Button>
            </CardActions>
        </Card>
    )
}
