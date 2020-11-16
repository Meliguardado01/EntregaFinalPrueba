import React from 'react';
import {Link} from 'react-router-dom';
import Tutor from '../ASSETS/Img/man.png';
import Tutora from '../ASSETS/Img/woman.png';
import styled from 'styled-components';

const Navbar = styled.nav`
margin: 0px;
padding: 0px;
`;
const Uele = styled.ul`
list-style: none;
margin: 0px;
padding: 0px;
display: flex;
overflow: hidden;
`;

const ElLi = styled.li`
float: left;

&:hover{
  background-color: rgba(22, 142, 255, 0.582);
}
`;

const Linka = styled.a`
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

const MainWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
align-items: center;
`;

const Hstyle = styled.h1`
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

const FormTutor = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ImgStyle = styled.img`
margin-bottom: 5px;
    border-radius: 10px;
    border: blueviolet 3px solid;
   width: 150px;
   height: 150px;
`;

const FormStyle = styled.form`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FormLabel = styled.label`
font-size: 20px;
    font-family:'Work Sans', sans-serif;
    text-align: center;
    color: black;
    margin-top: 6px;
`;

const FormInput = styled.input`
height: 40px;
    width: 300px;
    border-radius: 20px;
    border: 3px rebeccapurple solid;
    text-align: center;
    overflow: hidden;
    font-size: 20px;
    outline: none;
`;

const FormButton = styled.button`
height: 40px;
    width: 300px;
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





const crearT = () => (
<>
    <header>
      <Navbar>
        <Uele>
          <ElLi><Linka href="/AsignarTutor">Siguiente</Linka></ElLi>
          <ElLi><Linka href="AdminOptions.html">Menu Principal</Linka></ElLi>
        </Uele>
      </Navbar>
    </header>

    <MainWrapper>
      <div>
        <Hstyle>Crear un Tutor</Hstyle>
      </div>

      <FormTutor>
        <ImgStyle src={Tutor} alt="Logo Tutor" />
        <ImgStyle src={Tutora} alt="Logo Tutor" />
        </FormTutor>

        <FormStyle action="#" method="GET">
          <FormLabel for="Email">Correo Electronico</FormLabel>
          <FormInput
            id="Email"
            type="text"
            name="Email"
            placeholder="Email"
          />
          <FormLabel for="Password">Password</FormLabel>
          <FormInput
            id="Password"
            type="password"
            autocomplete="on"
            name="Password"
            placeholder="Password"
          /><br />
          <FormButton type="submit" onclick="viewsArrayInput()">CrearTutor</FormButton>
        </FormStyle>
      
    </MainWrapper>

    </>
)

export default crearT;




