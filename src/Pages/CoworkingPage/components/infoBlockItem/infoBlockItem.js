import React,{Component} from 'react';

export default class InfoBlockItem extends Component{    
    render(){
        const {color,top,left,onClickHandle,height,width} = this.props;
   
        return(
            <div style={{
                backgroundColor:color,
                opacity: '0.5',
                top:top,
                left:left,
                position:'relative',
                zIndex: '100',
                height:height,
                width:width
            }}
            onClick={onClickHandle}
            >         
            </div>
            
        )
    }
}