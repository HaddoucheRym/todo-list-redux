import React from 'react'
import { SubmitHandler , useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { todoService } from '../../../services/TodoService';
import { addTodoToList, setTodoListData } from '../todosSlice';



const defaultValues = {
    title: "",
    limitDate: "",
    done: false
};

export const AddTodo = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const _service = todoService;

    const methods = useForm({ defaultValues: defaultValues });
    const { handleSubmit, reset, control, setValue, register } = methods;

    const onSubmit = (data: any) => {
        _service.create(data).then((res) =>{
            dispatch(setTodoListData(res))
        })
        navigate("/", {replace: true})
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="" {...register("title")} />
        <input type='date' defaultValue="" {...register("limitDate")} />

        <input type="submit" />
    </form>
  );
};
