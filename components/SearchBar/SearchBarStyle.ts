import styled from 'styled-components'

export const SearchBarStyles = styled.div`
.formContainer {
    top:0;
    position:absolute;
    height:100vh;
    width:100%;
    background-color:rgba(0,0,0,0.30);

    .formBox {
        height:100vh;
        width:25vw;
        background-color:#fff;
        position:absolute;
        right:0%;
        top:0%;

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;

        .closeButton {
            position:absolute;

            right:6%;
            top:4%;

            display:flex;
            border:none;
            background-color:transparent;
            width:2rem;

            cursor: pointer;
        }

        form {
            display:flex;
            flex-direction:column;
            align-items:center;

            input {
                margin: 4rem 0 0 0;
                background-color:rgba(0,0,0,0.06);
                border:none;
                border-radius:0.4rem;
                height:2.5rem;
                width:15rem;

                ::placeholder {
                    text-align:center;
                    color:#295965;
                    font-family: 'Montserrat', sans-serif;
                }
            }

            button {
                margin:1rem 0;
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

       .addUser{

        margin:3rem 0 0 0;


           button{
               border-radius:50%;
               border:none;
               height:4rem;
               width:4rem;
               background-color:#295965;
               padding:0.8rem;

               :hover {
                   background-color:#02b2a3;
               }
           }
       }

       .allRegister {

        margin:3rem 0 0 0;
           
           button{
            width:15rem;
            height:3rem;
            border:none;
            color:#fff;
            border-radius:0.3rem;
            background-color:#295965;
            padding:0.8rem;
            font-family: 'Montserrat', sans-serif;

               :hover {
                   background-color:#02b2a3;
               }
           }
       }
    }
}
`