import React from 'react'

export default function TableItems(props) {
    const { name, price } = props

    return (
        <>
            <tr>
                <td className="shoping__cart__item">
                    <img src="img/cart/cart-1.jpg" alt="" />
                    <h5>{name}</h5>
                </td>
                <td className="shoping__cart__price">
                    {price}
                </td>
                <td className="shoping__cart__quantity">
                    <div className="quantity">
                        <div className="pro-qty">
                            <p>asdf</p>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}
