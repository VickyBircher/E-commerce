import React,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import '../App.css';
import Header from '../components/Header';
import Top from '../components/Top';
import Footer from '../components/Footer';
import Product from '../components/Product';

function Detail (props) {
    const {id} = useParams();    
    const { comidas } = props;
    const [comidaDetallada, setComidaDetallada] = useState([]);

    useEffect(()=>{
        const getData = async ()=>{
            const result = comidas.filter(comida => comida.id === id);
            setComidaDetallada(result);
        }
        const data = await getData();
    },[id,comidas]);

    console.log('esta es la comida: ', comidaDetallada);
    console.log('esta es la comida: ', comidaDetallada[0]);
    console.log('esta es la comida: ', comidaDetallada[0].name);

    return (
        <>
            <Top />
            <Header />
            <div className='container'>
                <div className='row'>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg"} style={{ width: "50%", height: "50%" }} alt="afg" />
                    <div className='column'>
                        <h1 style={{ fontSize: 50 }}>{"Tomate"}</h1>
                        <h2 style={{ fontWeight: "bold" }}>${300}</h2>
                        <p>{'asfgsdghsadgh'}</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {comidas.map(comida => {
                        return (<Product image={comida.image} name={comida.name} price={comida.price} id={comida.id}/>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Detail;