import styled from 'styled-components'

export const InfoContainerStyles = styled.div`
height:100vh;
width:100%;
position:absolute;

.info {

    display:flex;
    flex-direction:column;
    align-items:center;

    background-color:#fff;

    height:100vh;
    width:100%;

    position : absolute;

    box-shadow:2px 2px rgba(0,0,0,1);

    button {

        position:absolute;

        right:1.2%;
        top:5%;

        display:flex;
        border:none;
        background-color:transparent;
        width:2rem;
    }

}

`