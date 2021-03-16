import styled from 'styled-components'

export const AddDataStyles = styled.div`
position:absolute;
top:0;
right:0;
height:100vh;
width:100%;

display:flex;
align-items:center;
justify-content:center;
    div {
        background-color:#fff;
        height:70vh;
        width:60%;
        box-shadow:0.5rem 0.5rem rgba(0,0,0,0.2);
        border-radius:1rem;

        overflow-y:scroll;

        h3 {
            text-align:center;
            font-family: 'Montserrat', sans-serif;
            color:#295965;
        }

        .closeButton {
            margin-top:1%;
            margin-left:95%;

            width:2rem;
            height:2rem;
            border:none;
            background-color:transparent;

            cursor: pointer;
        }

        form {
            margin:2rem 0 0 0;
            display:flex;
            flex-direction:column;
            align-items:center;

            label {
                margin:1rem 0 0 0;
                font-size:0.8rem;
                text-align:center;
                color:#295965;
                font-family: 'Montserrat', sans-serif;
            }
            
            input {
                margin:0.2rem 0 0 0;
                height:2rem;
                width:80%;
                border:none;
                border-radius:0.4rem;
                background-color:rgba(0,0,0,0.04);
                text-align:center;
                color:#295965;
                font-family: 'Montserrat', sans-serif;
                
                ::placeholder {
                    font-size:0.7rem;
                    text-align:center;
                    color:#295965;
                    font-family: 'Montserrat', sans-serif;
                }
            }

            button {
                margin:2rem 0;
                height:2.3rem;
                width:15rem;
                background-color:#295965;
                border-radius:0.3rem;
                border:none;
                color:#fff;
                font-family: 'Montserrat', sans-serif;

                cursor: pointer;

                :hover{
                    background-color:#02b2a3;
                }
            }
        }


    }
`