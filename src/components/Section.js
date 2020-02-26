import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './Section.css';

const Section = props => {

    // const [state, setbackgroundColor] = useState('#808080');

    const WrapperDiv = styled.div`
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    //   border: 2px solid black;
      background-color: lightyellow;
      border-bottom: 1px solid black;
    `;

    const SectionDiv = styled.div`
      height: 50vh;
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    //   border: 2px solid black;
      font-size: 20px;
    `;


    return (
        <WrapperDiv>
            <SectionDiv>{props.name}</SectionDiv>
            <SectionDiv className="section-right">height: {props.height} mass: {props.mass} hair color: {props.hair_color}</SectionDiv>
        </WrapperDiv>
    )
}

export default Section;