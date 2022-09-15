import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import '../App.css';
import Header from '../components/Header';
import Top from '../components/Top';
import Footer from '../components/Footer';
import Product from '../components/Product';
import CarritoContext from '../context/CarritoContext';

function Detail(props) {

    const { id } = useParams();
    const { comidas } = props;
    const [comidaDetallada, setComidaDetallada] = useState([]);
    const {Carrito, setCarrito} = useContext(CarritoContext);

    const agregarAlCarrito = async () => {
        if (Carrito.length === 0) {
            setCarrito([comidaDetallada]);
        }
        else {
            setCarrito([...Carrito, comidaDetallada]);
        }
    }

    console.log(Carrito);

    const getData = async () => {
        const result = comidas.filter(comida => comida.id === id);
        setComidaDetallada(result[0]);
    }

    useEffect(() => {
        getData();
    }, [comidas, id]);

    return (
        <>
            <Top />
            <Header />
            <div className='container'>
                <div className='row'>
                    <img src={comidaDetallada.image} style={{ width: "50%", height: "50%" }} alt="afg" />
                    <div className='column'>
                        <h1 style={{ fontSize: 50 }}>{comidaDetallada.name}</h1>
                        <h2 style={{ fontWeight: "bold" }}>${comidaDetallada.price}/kg</h2>
                        <p>{comidaDetallada.desc}</p>
                        <button className='button' onClick={agregarAlCarrito}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {comidas.map(comida => {
                        return (<Product image={comida.image} name={comida.name} price={comida.price} id={comida.id} />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Detail;