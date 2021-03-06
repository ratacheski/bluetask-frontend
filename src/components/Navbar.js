import React, {Component} from 'react';
import NavbarItem from './NavbarItem';
import {APP_NAME} from '../constants';

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {name: "Listar Tarefas", href: "/", active: true},
                {name: "Nova Tarefa", href: "/form", active: false}
            ]
        }

    }

    onClickHandler = (itemClicked) => {
        const items = [...this.state.items];
        items.forEach(item => {
            if (item.name === itemClicked.name) {
                item.active = true;
            } else {
                item.active = false;
            }
        });
        this.setState({items});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">{APP_NAME}</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav mr-auto">
                        {this.state.items.map(
                            item => <NavbarItem
                                key={item.name}
                                item={item}
                                onClick={this.onClickHandler}/>
                        )}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;