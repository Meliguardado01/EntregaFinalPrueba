import React from 'react';
import Salas from '../ASSETS/Img/Salas.png';
import Mesas from '../ASSETS/Img/Grafico.png';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.css';
import {Modal, ModalBody, Input} from 'reactstrap'; 
import styled from 'styled-components';

const NavbarE = styled.nav`
margin: 0px;
padding: 0px;
`;
const UeleE = styled.ul`
list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    overflow: hidden;
`;

const ElLiE = styled.li`
float: left;

&:hover{
  background-color: rgba(22, 142, 255, 0.582);
}
`;

const LinkaE = styled.a`
    text-decoration: none;
    padding: 20px;
    display: inline-block;
    color: black;
    font-family: 'Rubik', sans-serif;
    font-size: 15px;

    &:hover{
      color: #fff;
      text-decoration: none; 
    text-shadow: 0 0 5px rgba(0,178,255,1),
    0 0 10px rgba(0,178,255,1),
    0 0 20px rgba(0,178,255,1),
    0 0 40px rgba(38,104,127,1),
    0 0 80px rgba(38,104,127,1),
    0 0 90px rgba(38,104,127,1),
    0 0 100px rgba(38,104,127,1),
    0 0 140px rgba(38,104,127,1),
    0 0 180px rgba(38,104,127,1);
    }
`;

const LinkaEB = styled.a`
    text-decoration: none;
    color: black;

    &:hover{
      color: black;
      text-decoration: none;
    }
`;

const MainWrapperE = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
align-items: center;
`;

const Estadisticas = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
	align-items: center;
`;

const HstyleE = styled.h1`
font-family: 'Noto Sans JP', sans-serif;
font-size: 60px;
padding: 0px;
text-align: center;

&:hover{
  color: #fff;
  text-shadow: 0 0 5px rgba(0,178,255,1),
  0 0 10px rgba(0,178,255,1),
  0 0 20px rgba(0,178,255,1),
  0 0 40px rgba(38,104,127,1),
  0 0 80px rgba(38,104,127,1),
  0 0 90px rgba(38,104,127,1),
  0 0 100px rgba(38,104,127,1),
  0 0 140px rgba(38,104,127,1),
  0 0 180px rgba(38,104,127,1);
  transition: 0.25s;
}
`;

const HstyleEM = styled.h1`
font-family: 'Noto Sans JP', sans-serif;
    font-size: 30px;
    padding: 0px;
    text-align: center;

    &:hover{
      color: #fff;
      text-shadow: 0 0 5px rgba(0,178,255,1),
      0 0 10px rgba(0,178,255,1),
      0 0 20px rgba(0,178,255,1),
      0 0 40px rgba(38,104,127,1),
      0 0 80px rgba(38,104,127,1),
      0 0 90px rgba(38,104,127,1),
      0 0 100px rgba(38,104,127,1),
      0 0 140px rgba(38,104,127,1),
      0 0 180px rgba(38,104,127,1);
      transition: 0.25s;
    }
`;

const ImgE = styled.img`
margin-bottom: 10px;
    border-radius: 10px;
    width: 500px;
    height: 300px;
    border: blueviolet 3px solid;
`;

const ImgEM = styled.img`
margin-bottom: 10px;
border-radius: 10px;
width: 470px;
height: 180px;
border: blueviolet 3px solid;
`;

const ButtonsE = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding: 0px;
margin: 0px;
`;

const ButtonE = styled.button`
width: 250px;
height: 60px;
border-radius: 20px;
border: 3px rebeccapurple solid;
font-family: 'Work Sans', sans-serif;
font-size: 20px;
cursor: pointer;
overflow: hidden;
outline: none;

&:hover{
  background-color: rgba(0, 174, 255, 0.596);
  transition: 0.5s;
}
`;


class EstGen extends React.Component{
  state={
    abierto:false,
  }

  abrirModal = () =>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){
    return(
      <>
      <header>
            <NavbarE>
              <UeleE>
                <ElLiE><LinkaE href="AdminOptions.html">Menu Principal</LinkaE></ElLiE>
              </UeleE>
            </NavbarE>
          </header>

          <Modal isOpen={this.state.abierto}>
          <ModalBody>
          <HstyleEM>Reporte Generado</HstyleEM>
                <ImgEM src={Mesas} alt="Graficos"  />
            <ImgEM src={Salas} alt="Graficos"  /><br /><br />
            <Input type="button" onClick={this.abrirModal} value="Guardar Datos">Guardar Datos</Input>
          </ModalBody>
          </Modal>
           
      
          <MainWrapperE>
               
            <HstyleE>Estadisticas Generales</HstyleE>
            <Estadisticas>
            <ImgE src={Mesas} alt="Graficos"  />
            <ImgE src={Salas} alt="Graficos"  /><br /><br />
          </Estadisticas>
          <ButtonsE>
            <ButtonE id="open" onClick={this.abrirModal}>Crear Reporte</ButtonE>
            <ButtonE><LinkaEB href="AdminOptions.html">Terminar</LinkaEB></ButtonE>
          </ButtonsE>
          </MainWrapperE>
          
          </>
    )
  }
}

export default EstGen;