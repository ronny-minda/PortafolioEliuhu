import React from "react";
import styled from "styled-components";

import img from '../imagenes/15.jpeg';
import Instagran from "../svg/instagran";

const SFooter = styled.footer`
margin-top: 30px;
    height: 300px;
    width: 100%;

    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

const Footer = () => {

    // console.log(img)

    return (
        <SFooter>
            <h3>STRASSER</h3>
            <h4>Elihu Strasser</h4>
            <h4>Fotografo-Disenador Grafico</h4>
            <h4>elihustrasser20@gmail.com</h4>
            <h4>0983378682</h4>
            <Instagran />
        </SFooter>
    )
}

export default Footer