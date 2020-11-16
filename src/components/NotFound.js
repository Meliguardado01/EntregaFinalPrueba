import React from 'react';
import styled from 'styled-components';

const ContainerstyleNF = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`;

const HstyleNF = styled.h1`
font-weight: bold;
    font-size: 100px;

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

const HstyleNF2 = styled.h2`
font-weight: bold;
    font-size: 90px;

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



const NotFound = () =>(
    <>
    <ContainerstyleNF>
    <HstyleNF>404</HstyleNF>
    <HstyleNF2>¡NOT FOUND!</HstyleNF2>
    </ContainerstyleNF>
    </>
);

export default NotFound;