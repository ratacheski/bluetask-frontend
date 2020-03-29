import React, {Component} from 'react';
import TaskService from "../api/TaskService";
import {Redirect} from "react-router-dom";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                id: 0,
                description: "",
                whenToDo: ""
            },
            redirect: false,
            buttonName: "Cadastrar"
        }
    }

    componentDidMount() {
        const editId = this.props.match.params.id;
        if (editId) {
            this.setState({
                task: TaskService.load(~~editId),
                buttonName: "Alterar"
            });
        }
    }


    onSubmitHandler = (event) => {
        event.preventDefault();
        TaskService.save(this.state.task);
        this.setState({redirect: true})
    }

    onInputChangeHandler = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        this.setState(prevState => ({task: {...prevState.task, [field]: value}}));
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>
        }
        return (
            <div className="row h-100">
                <div className="col-md-8 mx-auto my-auto">
                    <div>
                        <h1>Cadastro de Tarefa</h1>
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="description">Descrição</label>
                                <input type="text"
                                       className="form-control"
                                       name="description"
                                       value={this.state.task.description}
                                       placeholder="Digite a descrição"
                                       onChange={this.onInputChangeHandler}/>
                                <label htmlFor="whenToDo">Data</label>
                                <input type="date"
                                       className="form-control"
                                       name="whenToDo"
                                       value={this.state.task.whenToDo}
                                       placeholder="Informe a data"
                                       onChange={this.onInputChangeHandler}/>
                            </div>
                            <button type="submit"
                                    className="btn btn-primary mr-2">{this.state.buttonName}</button>
                            <button type="button"
                                    className="btn btn-danger"
                                    onClick={() => this.setState({redirect: true})}>Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;