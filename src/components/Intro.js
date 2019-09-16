import React from 'react';
// import styled from 'styled-components';
import { StartBtn } from '../components/utils/Buttons';
import { IntroCard } from '../components/utils/Cards';
// import { fonts, colors } from '../components/utils/_var';
// import { media } from '../components/utils/_media-queries';

const Wrapper = (props) => <div>{props.children}</div>

const Intro = ({ title, _onStartClick }) => {
  return (
    <Wrapper className="container">
      <IntroCard>
        <div className="corner" />
        <div className="corner" />
        <div className="corner" />
        <div className="corner" />
        <h1>{title}</h1>
        {/* TODO: WILL CHANGE THIS THING DOWN HERE */}
        <ul className="list-group">
          <li className="list-group-item">Consits of 40 questions</li>
          <li className="list-group-item">Answer honestly</li>
        </ul>
        <StartBtn onClick={_onStartClick}>
          <span>Let's Do This!</span>
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </StartBtn>
      </IntroCard>
    </Wrapper>
  )
}

export default Intro
