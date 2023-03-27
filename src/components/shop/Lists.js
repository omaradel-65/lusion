import React from 'react'
import { FaTrash } from 'react-icons/fa';
function Lists(props) {
    
    const items = props.items;
    const listItems = items.map(item=>
        {
            return <div key={item.key} className="divlist">
              
                <p className="m-3">{item.text}</p>
          
                <button onClick={()=> props.deleteItem(item.key)}><FaTrash /></button>



            </div>
        })
    return (
        <div>
            {listItems}
        </div>
    )
}

export default Lists
