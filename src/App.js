import React, {Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import TaskListTable from "./components/TaskListTable";

class App extends Component {

    //constructor(props) {
    //  super(props);
    //}

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <div className="container">
                        <TaskListTable/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
