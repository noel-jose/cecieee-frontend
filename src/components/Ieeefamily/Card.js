import React from 'react'
import styled from 'styled-components';

function Card({logo}) {
    return (
        <SocietyCard>
            <a href="">
                <img src={"../images/society/"+logo+".png"} alt={logo} />
            </a>
            
        </SocietyCard>
    )
}

export default Card;

const SocietyCard = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all .4s ease-in-out;
    padding :0px 10px;
    &:hover {
        transform: scale(1.1);
    }

`;


