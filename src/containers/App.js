import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import CrearTutor from './CrearTutor';
import AsignarTutor from './AsignarTutor';
import ConfiguracionUser from './ConfiguracionUser';
import EstadisticasGenerales from './EstadisticasGenerales';
import NotFound from '../components/NotFound';
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: inherit;
  }
  
  :root{
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient( -45deg,#d4346c, #16BFFD );
    animation: change 10s ease-in-out infinite;
    background-size: 300% 300%;
    width: 100vw;
     height: 100vh;
  }
  
  
  @keyframes change{
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
  }
`;


const App = () => (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={CrearTutor} />
    <Route exact path="/AsignarTutor" component={AsignarTutor} />
    <Route exact path="/ConfiguracionUser" component={ConfiguracionUser} />
    <Route exact path="/EstadisticasGenerales" component={EstadisticasGenerales} />
    <Route component ={NotFound}/>
    </Switch>
    </BrowserRouter>
    </>

);

export default App; 
