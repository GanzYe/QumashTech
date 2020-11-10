import React,{Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term:'',
    }
    onSearchChange=(e)=>{
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }    
    render(){    
    return (               
        <input
        placeholder="Введите для поиска ЖК или БЦ"
        className="search-input"
        onChange={this.onSearchChange}
        disabled={false}
        />
    )
}
}
