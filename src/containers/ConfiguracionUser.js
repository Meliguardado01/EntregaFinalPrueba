import React from 'react';
import Tutor from '../ASSETS/Img/man.png';
import Tutora from '../ASSETS/Img/woman.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarC = styled.nav`
margin: 0px;
padding: 0px;
`;
const UeleC = styled.ul`
list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    overflow: hidden;
`;

const ElLiC = styled.li`
float: left;

&:hover{
  background-color: rgba(22, 142, 255, 0.582);
}
`;

const LinkaC = styled.a`
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

const MainWrapperC = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
align-items: center;
`;

const HstyleC = styled.h1`
font-family: 'Noto Sans JP', sans-serif;
font-size: 50px;
padding: 0px;
margin-bottom: 15px;
margin-top: 5px;
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

const FormAdd = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ImgStyleC = styled.img`
margin-bottom: 10px;
border-radius: 10px;
border: blueviolet 3px solid;
width: 150px;
height: 150px;
`;

const FormStyleC = styled.form`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FormLabelC = styled.label`
font-size: 20px;
    font-family:'Work Sans', sans-serif;
    text-align: center;
    color: black;
    margin-top: 6px;
`;

const FormInputC = styled.input`
height: 40px;
width: 300px;
border-radius: 20px;
border: 3px rebeccapurple solid;
text-align: center;
overflow: hidden;
font-size: 20px;
outline: none;
`;

const FButtonsC = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
`;

const FormButtonC = styled.button`
width: 250px;
    height: 40px;
    border-radius: 20px;
    border: 3px rebeccapurple solid;
    font-family: 'Work Sans', sans-serif;
    font-size: 20px;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    padding: 0px;
    margin: 0px;

    &:hover{
      background-color: rgba(0, 174, 255, 0.596);
      transition: 0.5s;
    }
`;

const ConfigU = () =>(
    <>
    <header>
      <NavbarC>
        <UeleC>

          <ElLiC><LinkaC href="/AsignarTutor">Regresar</LinkaC></ElLiC>
          <ElLiC><LinkaC href="AdminOptions.html">Menu Principal</LinkaC></ElLiC>
          
        </UeleC>
      </NavbarC>
    </header>
    <MainWrapperC>
      <HstyleC>Configuraciones de Usuarios</HstyleC>
      <FormAdd>
        <ImgStyleC src={Tutor} alt="Logo Tutor" />
        <ImgStyleC src={Tutora} alt="Logo Tutor" />
        </FormAdd>

        <FormStyleC action="#" method="GET" className="config">
          <FormLabelC for="Email">Correo Electronico</FormLabelC>
          <FormInputC
            id="Email"
            type="text"
            name="Email"
            value=""
            placeholder="Email"
          /><br />
          <FButtonsC class="buttons">
          <FormButtonC
          type="submit"
         >Eliminar Usuario</FormButtonC>
          <FormButtonC
          type="submit"
         >Desactivar Usuario</FormButtonC>
          <FormButtonC
            type="submit"
           >Activar Usuario</FormButtonC>
        </FButtonsC>
        </FormStyleC>
    </MainWrapperC>
    </>
);

export default ConfigU;