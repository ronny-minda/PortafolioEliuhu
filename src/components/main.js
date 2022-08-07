import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"

import Img from "./img";
import imgPrincipal from '../imagenes/3.jpeg'
import Flecha from "../svg/flecha";
import IcoX from "../svg/icoX";



import { imagenes } from "../imgenes";




const SMain = styled.main`

    width: 100vw;
    
    .imgGra {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        object-fit: contain;
        padding: 30px;
        padding: 30px 150px;
        background-color: #0008;
        backdrop-filter: blur(3px);
    }

    .izqui {
        border-radius: 50%;
        height: 100px;
        width: 100px;
        /* overflow: ; */
        /* background-color: red; */
        position: fixed;
        top: 50%;
        left: 0;
    }

    .dere {
        border-radius: 50%;
        height: 100px;
        width: 100px;
        /* background-color: red; */
        position: fixed;
        top: 50%;
        right: 0;
    }

    .imgPrincipal {
        width: 100%;
        height: 500px;
        background-image: url(${imgPrincipal});
        position: relative;
        object-fit: none;
        object-position: 1px 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        margin-bottom: 30px;
        

        h2 {
            font-size: 60px;
            color: #fff;
        }
    }

    .contImg {
        margin: auto;
        max-width: 1300px;
        /* display: flex;
        flex-wrap: wrap;
        justify-content: center; */
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(42, 250px);
        row-gap: 30px;
        grid-column-gap: 30px;
        align-content: stretch;
        justify-content: center;
        align-items: center;
        justify-items: center;


        img {
            object-fit: cover;
            cursor: pointer;
            /* height: 500px;
            width: 250px; */
            height: 100%;
            width: 100%;
            margin: 20px;
            transition: .5s;
        }
        .A0 {
            grid-column: 1 / 3;
            grid-row: 1 / 3;
        }
        .A1 {
            grid-column: 3 / 5;
            grid-row: 1 / 2;
        }
        .A3 {
            grid-column: 3 / 5;
            grid-row: 2 / 4;
        }
        .A4 {
            grid-column: 5 / 7;
            grid-row: 1 / 3;
        }

        
        .A5 {
            grid-column: 1 / 3;
            grid-row: 3 / 5;
        }
        .A6 {
            grid-column: 3 / 5;
            grid-row: 4 / 6;
        }
        .A7 {
            grid-column: 5 / 7;
            grid-row: 3 / 5;
        }

        .A8 {
            grid-column: 5 / 7;
            grid-row: 3 / 5;
        }

        .A2 {
            grid-column: 1 / 3;
            grid-row: 5 / 7;
        }
        .A9 {
            grid-column: 5 / 7;
            grid-row: 5 / 6;
        }
        .A10 {
            grid-column: 3 / 7;
            grid-row: 6 / 8;
        }
        

        .A11 {
            grid-column: 1 / 3;
            grid-row: 8 / 10;
        }
        .A12 {
            grid-column: 1 / 3;
            grid-row: 7 / 10;
        }
        .A13 {
            grid-column: 3 / 7;
            grid-row: 8 / 12;
        }
        .A14 {
            grid-column: 1 / 3;
            grid-row: 10 / 13;
        }
        .A16 {
            grid-column: 3 / 5;
            grid-row: 12 / 14;
        }
        .A17 {
            grid-column: 5 / 7;
            grid-row: 12 / 14;
        }
        .A18 {
            grid-column: 1 / 3;
            grid-row: 13 / 15;
        }
        .A19 {
            grid-column: 3 / 5;
            grid-row: 14 / 15;
        }
        .A20 {
            grid-column: 5 / 7;
            grid-row: 14 / 16;
        }
        .A21 {
            grid-column: 1 / 4;
            grid-row: 15 / 19;
        }
        .A22 {
            grid-column: 4 / 5;
            grid-row: 15 / 16;
        }
        .A23 {
            grid-column: 4 / 7;
            grid-row: 15 / 17;
        }
        .A24 {
            grid-column: 4 / 7;
            grid-row: 17 / 21;
        }
        .A25 {
            grid-column: 1 / 4;
            grid-row: 19 / 23;
        }
        .A15 {
            grid-column: 4 / 7;
            grid-row: 21 / 25;
        }

        .A26 {
            grid-column: 4 / 7;
            grid-row: 21 / 25;
        }
        .A27 {
            grid-column: 1 / 4;
            grid-row: 23 / 25;
        }
        .A28 {
            grid-column: 1 / 3;
            grid-row: 25 / 28;
        }
        .A29 {
            grid-column: 3 / 5;
            grid-row: 25 / 27;
        }
        .A30 {
            grid-column: 5 / 7;
            grid-row: 25 / 28;
        }
        .A31 {
            grid-column: 3 / 5;
            grid-row: 27 / 29;
        }
        .A32 {
            grid-column: 1 / 3;
            grid-row: 28 / 31;
        }
        .A33 {
            grid-column: 5 / 7;
            grid-row: 28 / 30;   
        }
        .A34 {
            grid-column: 3 / 5;
            grid-row: 29 / 31;
        }
        .A35 {
            grid-column: 1 / 5;
            grid-row: 31 / 34;
        }
        .A36 {
            grid-column: 5 / 7;
            grid-row: 31 / 35;
        }
        .A37 {
            grid-column: 1 / 3;
            grid-row: 34 / 37;
        }
        .A38 {
            grid-column: 3 / 7;
            grid-row: 34 / 36;
        }
        .A39 {
            grid-column: 3 / 5;
            grid-row: 36 / 39;
        }
        .A40 {
            grid-column: 5 / 7;
            grid-row: 36 / 39;
        }
        .A41 {
            grid-column: 1 / 3;
            grid-row: 37 / 39;
        }
        .A42 {
            grid-column: 1 / 4;
            grid-row: 39 / 41;
        }
        .A43 {
            grid-column: 4 / 7;
            grid-row: 39 / 41;
        }
        .A44 {
            grid-column: 1 / 7;
            grid-row: 41 / 43;
        }
        .A45 {
            
        }
        .A46 {
            
        }
        
        
        
   
        img:hover {
            filter: grayscale(80%);
        }
    }
    .rever {
        transform: rotate(90deg) scale(0.3) translate( -490px, 380px);
    }
    .reverIz {
        transform: rotate(-90deg) scale(0.3) translate( 490px, -250px);
    }

    .contCarru {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: #0008;
        backdrop-filter: blur(5px);

        .conteLar {
            position: absolute;
            transition: 1s;
            height: 100vh;
            width: 400vw;
            
            img {
                height: 100vh;
                width: 100vw;
                object-fit: cover;
                padding: 150px;
            }
            
        }
        
    }
`;

const Main = () => {

const he = [
    800,
    200,
    200,
    300,
    400,
    100,
    30,
    50,
    120,
    90,
    405,
    305,
    788,
    300,
    500,
    100
]

const wi = [
    500,
    200,
    200,
    300,
    400,
    100,
    30,
    50,
    120,
    90,
    405,
    305,
    788,
    300,
    500,
    100
]
let i = -1

    const [ area, setArea ] = useState({
        wi,
        he,
        ma: 50
    })

    const [ carru, setCarru ] = useState(100);
    const [ open, setOpen ] = useState(false);
    const [ fla, setFal ] = useState('')

    const carrusel = (valor) => {
        setOpen(valor);
    }

    return (
        <SMain>
            
            <div className="imgPrincipal">
                <h2>Portafolio</h2>
            </div>

            <section className='contImg'>
                {imagenes.map( (img) => {
                    
                    i++
                    console.log(area.wi[i])
                    
                    // style={{ height: `${he[num]}px`}}
                    return <img className={`A${i}`}  key={img} src={img} alt=""  onClick={() => {
                            
                            let preValor = img.toString().split('/static/media/')
                            let uniValor = preValor.toString().split('.')
                            let valor = uniValor[0].toString().split(',')
                            let total =  Number(valor[1])

                            setFal(img)
                            
                            setCarru( `${total}00` )

                            

                        }
                    }></img>
                    
                })}
                
            </section>

            {
               fla && (<>
                        <img onClick={() => {
                                        setFal('')
                                    }} 
                        className="imgGra" src={fla} alt=''></img>

                            <div className="izqui" onClick={() => {
                                let valor = imagenes.findIndex( e => e === fla )
                                // console.log(valor - 1)
                                setFal(imagenes[valor - 1])
                            }}>
                                <Flecha className='rever' />
                            </div>

                            

                            <div className="dere"  onClick={() => {
                                let valor = imagenes.findIndex( e => e === fla )
                                // console.log(valor + 1)
                                setFal(imagenes[valor + 1])
                            }}>
                                <Flecha className='reverIz' />
                            </div>

                            <IcoX onClick={() => setFal('')} />
                        </>
                    )
            }

            
            {/* Carrusel de emociones */}
            {/* {
                open && 
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="contCarru"
                        >
                            <div className='conteLar'  style={{left: `-${carru}vw`}}  >
                               
                                
                                
                                
                                <div className="izqui" onClick={() => setCarru(carru - 100)}></div>
                                <div className="dere"  onClick={() => setCarru(carru + 100)}></div>
                            </div>
                        </motion.div>
                       
            } */}
           
           

        </SMain>
    )
}

export default Main;