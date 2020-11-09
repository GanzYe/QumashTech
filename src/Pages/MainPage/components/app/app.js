import React,{Component} from 'react';
import SearchPanel from '../search-panel'
import TableList from '../table-list'
import './app.css';

export default class App extends Component {
    maxid= 100;
    state={
        rcData: [
             this.createRcItem('AFFARI','ул. Мамбетова 24','https://bi-property.com/storage/objects/June2019/cjwArpzIZS6GArhGRxQi.jpg'),
             this.createRcItem('Bi City Seoul','Абикен Бектурова','https://bi-city.bi-group.org/wp-content/themes/bicity/assets/img/bg2.jpg'),
             this.createRcItem('Green Mall','ЖК Зеленый Квартал','https://bi-property.com/storage/objects/August2020/PSCOuITeg7ySy63RX9hi.jpg'),
             this.createRcItem('Crocus City','проспект Кабанбай батыра','https://crocus-city.bi-group.org/upload/kelnik.about/7b6/1534326101111.jpg'),
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
