import React from "react";
import styled from "styled-components";


const SHeader = styled.header`
    /* background-color: red; */
    margin: 20px 0;

    h1 {
        color: #F2F2F2;
        font-size: 60px;
        text-align: center;
    }

    h2 {
        color: #F2F2F2;
        font-size: 25px;
        text-align: center;
    }
`;

const Header = () => {

    return (

        <SHeader>
            <h1>STRASSER</h1>
            <h2>FOTOGRAFO</h2>
        </SHeader>
    )
}

export default Header;