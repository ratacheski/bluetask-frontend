import React, {Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TaskListTable from "./components/TaskListTable";
import TaskForm from "./components/TaskForm";

class App extends Component {

    //constructor(props) {
    //  super(props);
    //}

    render() {
        return (
            <BrowserRouter>
                <>
                    <Navbar/>
                    <div className="container h-100">
                        <Switch>
                            <Route exact path="/form" component={TaskForm}/>
                            <Route exact path="/form/:id" component={TaskForm}/>
                            <Route path="/" component={TaskListTable}/>
                        </Switch>
                    </div>
                </>
            </BrowserRouter>
        );
    }
}

export default App;
