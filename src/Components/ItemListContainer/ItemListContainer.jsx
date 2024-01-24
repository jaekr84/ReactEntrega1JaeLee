import React from 'react'
import './ItemListContainer'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='greeting'>
            {greeting}
        </div>
    )
}

export default ItemListContainer