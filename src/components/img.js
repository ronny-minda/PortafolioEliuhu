import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
// import { imagenes } from '../imgenes'

const SImg = styled.img`
    height: 100px;
    width: 100px;
    object-fit: contain;
    cursor: pointer;
`;

const Img = ({imgPrincipal}) => {

    // console.log(imagenes.length);

    const fullImg = () => {
        console.log('full')
        console.log(imgPrincipal)
    }


    return (
        <>
            {/* <SImg onClick={fullImg} src={imgPrincipal} alt=""></SImg> */}
            

            

        </>
    )
}

export default Img;