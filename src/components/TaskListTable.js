import React, {Component} from 'react';
import TaskService from "../api/TaskService";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from "react-router-dom";

class TaskListTable extends Component {


    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            editId: 0
        }
    }

    componentDidMount() {
        this.listTasks();
    }

    listTasks() {
        this.setState({tasks: TaskService.list()});
    }

    onDeleteHandler = (task) => {
        if (window.confirm("Deseja excluir a tarefa " + task.description + "?")) {
            TaskService.delete(task.id);
            this.listTasks();
            toast.success('Tarefa ' + task.description + ' excluída!', {});
        }
    }

    onEditHandler = (task) => {
        this.setState({editId: task.id});
    }

    onStatusChangeHandler = (task) => {
        task.done = !task.done;
        TaskService.save(task);
        this.listTasks();
    }

    render() {
        if (this.state.editId > 0) {
            return <Redirect to={`/form/${this.state.editId}`}/>
        }
        return (
            <>
                <table className="table table-striped">
                    <TableHeader/>
                    {this.state.tasks.length > 0 ?
                        <TableBody tasks={this.state.tasks}
                                   onDelete={this.onDeleteHandler}
                                   onEdit={this.onEditHandler}
                                   onStatusChange={this.onStatusChangeHandler}/>
                        : <EmptyTableBody/>
                    }
                </table>
                <ToastContainer autoClose={3000} hideProgressBar position={"bottom-right"}/>
            </>
        );
    }
}


const TableHeader = () => {
    return (
        <thead className="thead-dark">
        <tr>
            <th scope="col">Status</th>
            <th scope="col">Descrição</th>
            <th scope="col">Data</th>
            <th scope="col">Ações</th>
        </tr>
        </thead>
    );
};

const TableBody = (props) => {
    return (
        <tbody>
        {
            props.tasks.map(task =>
                <tr key={task.id}>
                    <td><input type="checkbox"
                               checked={task.done}
                               onChange={() => props.onStatusChange(task)}/></td>
                    <td>{task.done ? <s>{task.description}</s> : task.description}</td>
                    <td>{task.done ? <s>{task.whenToDo}</s> : task.whenToDo}</td>
                    <td>
                        <input type="button"
                               value="Editar"
                               className="btn btn-info btn-sm mr-2"
                               onClick={() => props.onEdit(task)}/>
                        <input
                            type="button"
                            value="Excluir"
                            className="btn btn-danger btn-sm"
                            onClick={() => props.onDelete(task)}/>
                    </td>
                </tr>
            )
        }
        </tbody>
    );
};

const EmptyTableBody = () => {
    return (
        <tbody>
        <tr className={"table-info"}>
            <td className="text-center" colSpan={4}>Sem Tarefas Cadastradas no momento!</td>
        </tr>
        </tbody>
    );
};

export default TaskListTable;