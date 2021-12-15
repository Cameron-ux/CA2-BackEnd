import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.state = {counter: 1};
        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);

        
    }

    increaseCounter(){
        this.setState(prevState =>({
            counter: prevState.counter+1
        }))
    }

    decreaseCounter(){
        this.setState(prevState =>({
            counter: prevState.counter-1
        }))
    }

    render(){
        return(

            <h1>
               <p> this is navigation component</p>
               <p> my properties are {this.props.name}.</p>
               <p> My state is: {this.state.counter}.</p>
               <button onClick={this.increaseCounter}>
                   click me to increase
               </button>
               <button onClick={this.decreaseCounter}>
                   click me to decrease
               </button>
                <nav>
                    <Link to="/">Return to home page</Link>
                </nav>
            </h1>
        );
    }
}

export default Navigation;