import styled from 'styled-components'

export const ContainerStyles = styled.div`
height:80vh;
width:100%;

.mainData {
    margin:3rem 0;
    height:80vh;
    width:100%;

    display:flex;
    justify-content:space-evenly;
    
    .name{

        width:5rem;
        height:3rem;
        
        display:flex;
        justify-content:center;
        border-radius:1rem;
        font-family: 'Montserrat', sans-serif;
        box-shadow:1px 1px #0BB7A8;

        :hover{
            background-color:#295965;
            color:#fff;
        }
    }
    
}
`
