import React,{Component} from 'react';

export default class InfoBlockItem extends Component{    
    render(){
        const {color,top,left,onClickHandle} = this.props;
   
        return(
            <div style={{
                backgroundColor:color,
                opacity: '0.5',
                top:top,
                left:left,
                position:'relative',
                zIndex: '100',
                height:"10%",
                width:'5%'
            }}
            onClick={onClickHandle}
            >         
            </div>
            
        )
    }
}