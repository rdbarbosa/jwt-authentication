import React, { Component } from 'react'
import SelectSearch from 'react-select-search'
import './style.css'

export class Search extends Component {

    handleChange = (e) => {
        console.log(e)
    }
    
    render() {
        const friends = [
            {name: 'Annie Cruz', value: 'annie.cruz', photo: 'https://randomuser.me/api/portraits/women/60.jpg'},
            {name: 'Eli Shelton', value: 'eli.shelton', photo: 'https://randomuser.me/api/portraits/men/7.jpg'},
            {name: 'Loretta Rogers', value: 'loretta.rogers', photo: 'https://randomuser.me/api/portraits/women/51.jpg'},
            {name: 'Lloyd Fisher', value: 'lloyd.fisher', photo: 'https://randomuser.me/api/portraits/men/34.jpg'},
            {name: 'Tiffany Gonzales', value: 'tiffany.gonzales', photo: 'https://randomuser.me/api/portraits/women/71.jpg'},
            {name: 'Christian Rynning', value: 'pessoa1', photo: 'https://randomuser.me/api/portraits/men/72.jpg'},
            {name: 'Genesis Collins', value: 'pessoa2', photo: 'https://randomuser.me/api/portraits/women/73.jpg'},
            {name: 'Luis Moreno', value: 'pessoa3', photo: 'https://randomuser.me/api/portraits/men/74.jpg'},
            {name: 'Louis Wilson', value: 'pessoa4', photo: 'https://randomuser.me/api/portraits/men/75.jpg'},
            {name: 'Malo Mathieu', value: 'pessoa5', photo: 'https://randomuser.me/api/portraits/women/76.jpg'},
            {name: 'Tristan Anderson', value: 'pessoa6', photo: 'https://randomuser.me/api/portraits/men/77.jpg'},
            {name: 'Ryder Thomas', value: 'pessoa7', photo: 'https://randomuser.me/api/portraits/men/78.jpg'},
            {name: 'Magnus Larsen', value: 'pessoa8', photo: 'https://randomuser.me/api/portraits/men/79.jpg'},
            {name: 'Tiffany Gonzales', value: 'pessoa9', photo: 'https://randomuser.me/api/portraits/women/80.jpg'},
            {name: 'Tiffany Gonzales', value: 'pessoa10', photo: 'https://randomuser.me/api/portraits/women/81.jpg'},
            {name: 'Tiffany Gonzales', value: 'pessoa11', photo: 'https://randomuser.me/api/portraits/women/82.jpg'},
            {name: 'Tiffany Gonzales', value: 'pessoa12', photo: 'https://randomuser.me/api/portraits/women/83.jpg'},
            {name: 'Tiffany Gonzales', value: 'pessoa13', photo: 'https://randomuser.me/api/portraits/women/84.jpg'},
            {name: 'Tiffany Gonzales', value: 'pessoa14', photo: 'https://randomuser.me/api/portraits/women/85.jpg'},
            {name: 'Tiffany Gonzales', value: 'pessoa15', photo: 'https://randomuser.me/api/portraits/women/86.jpg'},
            {name: 'Rômulo de Souza Santos Barbosa', value: 'rdbarbosa', photo: 'https://randomuser.me/api/portraits/lego/1.jpg'},
        ];

        const renderFriend = (option) => {
            const imgStyle = {
                borderRadius: '50%',
                verticalAlign: 'middle',
                marginRight: 10
            };
        
            return (<span><img style={imgStyle} width="40" height="40" src={option.photo} /><span>{option.name}</span></span>);
        }
    
        return (
            <div>
                <SelectSearch name="friends" multiple={false} height={172} options={friends} placeholder="Alunos" renderOption={renderFriend} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Search
