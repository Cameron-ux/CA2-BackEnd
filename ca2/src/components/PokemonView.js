import React from 'react';

class PokemonView extends React.Component{

    constructor (props){
        super(props);
        let id = window.location.href.split('=')[1]
        this.state = {

        }
    }

    render(){
        return(
            <div>
                This is the Pokemon Edit component
            </div>
        )
    }
}

export default PokemonView;