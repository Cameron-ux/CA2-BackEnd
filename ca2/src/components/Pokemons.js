import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

class Pokemons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          pokemons: [],
          isAlive: true
        }
     
    }

    componentDidMount(){

        axios.get('/pokemon')
            .then((response) => {
                this.setState( {
                    pokemons: response.data,
                    isAlive: true
                })
                
            })
            .catch((error)=> {
                this.setState({
                    isAlive:false,
                    error
                })
                
            })
       
           
    }


    render(){
        const { isAlive, error, pokemons} = this.state;
        
        if(!isAlive){
            return(
                <div>The page is loading or the SERVER is down...</div>
            )
        } else {
            return(
                <div>
                    <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Pokedex</th>
                            <th>Region</th>
                            <th>IsAlive</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pokemons.map(pokemon => (
                        <tr key={pokemon._id}>
                            <td>{pokemon._id}</td>
                            <td>{pokemon.type}</td>
                            <td >{pokemon.pokedex}</td>
                            <td >{pokemon.region}</td>
                            <td >{pokemon.isAlive? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                    </tbody> 
                    </table>
              </div>  
            )
        }
    }
}
    

export default Pokemons;
