import React,{Component} from 'react';
import SearchPanel from '../search-panel'
import TableList from '../table-list'
import './app.css';

export default class App extends Component {
    maxid= 100;
    state={
        rcData: [
             this.createRcItem('Аффари','ул. Мамбетова 24','https://bi-property.com/storage/objects/June2019/cjwArpzIZS6GArhGRxQi.jpg'),
             this.createRcItem('Green Mall','ЖК Зеленый Квартал','https://bi-property.com/storage/objects/August2020/PSCOuITeg7ySy63RX9hi.jpg'),
             this.createRcItem('NOBLE','Пр. Мангiлiк Ел 52а','https://bi-property.com/storage/objects/October2019/7pB28NdOIiOdI6ro3yPn.png'),
        ],
        term:'',
    }
    createRcItem(title,address,url){
        return{
            title:title,
            address:address,
            url:url,
            id: this.maxid++
        }
    }
    onSearchChange=(term)=>{
        this.setState({term});
    }
    search(items,term){
        if(term.length===0){
            return items;
        }
        return items.filter((item)=>{
            return item.title.toLowerCase().indexOf(term.toLowerCase())>-1;
        })
    }
    render(){
        const {rcData,term} = this.state;
        const visibleItems = this.search(rcData,term)
    return (
        <div className="container">
            <div className="d-flex justify-content-center flex-column">
                <SearchPanel onSearchChange={this.onSearchChange}/>              
            <TableList
            rcData={visibleItems}
            /> 
            </div>
        </div>
    );
    }
}
