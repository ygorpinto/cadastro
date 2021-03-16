import styled from 'styled-components'

export const HeaderStyle = styled.div`
header {
    margin:0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    h1 {
        margin:0 9rem 0 0;
        font-size:2.7rem;
        font-family: 'Montserrat', sans-serif;
        color:#295965;

        text-shadow:1px 1px #02B2A3;
    }
    .logo {
        left:1%;
        top:2%;
        width:15%;
    }
    .menu{
        height:2.6rem;
        width:2.6rem;
        border:none;
        background-color:transparent;
        font-size:1rem;

        cursor: pointer;
    }
}
`