import React from 'react'

const Product = ({img,title,description,price}) => {
    return (
    <div>
        <img src={img} />
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>${price}</p>
    </div>

    )
}

export default Product