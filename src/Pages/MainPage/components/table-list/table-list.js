import React from 'react';
import './table-list.css'
import TableListItem from '../table-list-item/table-list-item'
const TableList =({rcData})=>
{  
    const elements = rcData.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <div key={id} className="d-flex box justify-content-between align-items-center">
                <TableListItem
                    {...itemProps} 
                />
            </div>
        )
    })
        return(
            <div className="list-group">
                {elements}
            </div>
        )
    
}

export default TableList;