import React from 'react'
import CarritoContext from '../context/CarritoContext'
import TableItems from './TableItems'

export default function Table(props) {

    const { carrito } = props

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th className="shoping__product">Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {carrito.map(carrito => {
                            return (<TableItems name={carrito.name} price={carrito.price} />
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}
