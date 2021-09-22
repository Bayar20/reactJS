import React, { Component } from 'react';
import './App.css';

class ToDoItem extends Component {
    constructor (props){
        super(props)
    }

    render (){
        return (
            <div className="container">
                <div className = "toDoItem">
                    {this.props.name}

                </div>
                <button className="deleteButton" onClick = {() => this.props.onDelete()}>X</button>

            </div>
            
        )
    }
}

class Todo extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            input : '',
            todolist: ['Sample todo item 1', 'Sample todo item 2', 'Sample todo item 3: long text break check ']
        };
    }

    onChange = (event) => {
        this.setState({ 
            input: event.target.value
        })
    }

    submit = () => {
        this.setState({
            todolist: [...this.state.todolist, this.state.input],
            input: ''
        })
    }

    onDelete = (index) => {
        this.state.todolist.splice(index, 1);
        this.setState({
            todolist: this.state.todolist
        })

    }
  
    render(){
        return (
            <div className="App">
                <h1>TO-DO LIST USING REACT</h1>
                    <div>
                        <input className="addButton" type="text" value={this.state.input} onChange={this.onChange} />
                        <button className="addButton" onClick={this.submit}> Add </button>

                        <div className="toDoList">
                            {
                                this.state.todolist.map((todo, index) => {
                                    return <ToDoItem name = {todo} onDelete = {() => this.onDelete(index)}/>
                                })
                            }
                        </div>
                        {/* {this.state.todolist.length > 0 && this.state.todolist.join()} */}  
                    </div>
                    
                
            </div>
        )
    }
}

export default Todo;