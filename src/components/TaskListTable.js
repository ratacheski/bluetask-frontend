import React, {Component} from 'react';
import TaskService from "../api/TaskService";

class TaskListTable extends Component {


    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    componentDidMount() {
        this.listTasks();
    }

    listTasks() {
        this.setState({tasks: TaskService.list()});
    }

    onDeleteHandler(id) {
        TaskService.delete(id);
        this.listTasks();
    }

    render() {
        return (
            <table className="table table-striped" style={{marginTop: 50}}>
                <TableHeader/>
                <TableBody tasks={this.state.tasks}
                           onDelete={this.onDeleteHandler}/>
            </table>
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
                    <td><input type="checkbox" checked={task.done}/></td>
                    <td>{task.description}</td>
                    <td>{task.whenToDo}</td>
                    <td>
                        <input type="button" value="Editar" className="btn btn-info btn-sm mr-2"/>
                        <input
                            type="button"
                            value="Excluir"
                            className="btn btn-danger btn-sm"
                            onClick={() => props.onDelete(task.id)}/>
                    </td>
                </tr>
            )
        }
        </tbody>
    );
};


export default TaskListTable;