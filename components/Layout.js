import styled from 'styled-components'
import ReactDOM from 'react-dom';



export default function Layout({ children }) {
    return (
        <Main >
            {children}
        </Main>
    )
}

const Main = styled.main`
  min-height: 100vh;
  background: url('/bg.png') no-repeat;
  background-size: 100%;
  background-position: -10vh 0%;
  background-attachment: scroll;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    background-size: 150%;
    background-position: -60vh 0vh;
    background-attachment: scroll;
   }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.mobileL}) {
    background-size: 250%;
    background-position: -50vh -10vh;
    background-attachment: scroll;
   }
    
`;
