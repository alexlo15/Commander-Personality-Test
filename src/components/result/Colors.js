import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BlackDef, WhiteDef, GreenDef, BlueDef, RedDef } from '../definitions/ColorsDef'
import { Wrapper } from '../utils/ResultWrapper'
import { NextBtn } from '../utils/Buttons'

class Colors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBlackDef: false,
      showWhiteDef: false,
      showGreenDef: false,
      showBlueDef: false,
      showRedDef: false
    }
    this.onBlackDefClick = this.onBlackDefClick.bind(this)
    this.onWhiteDefClick = this.onWhiteDefClick.bind(this)
    this.onGreenDefClick = this.onGreenDefClick.bind(this)
    this.onBlueDefClick = this.onBlueDefClick.bind(this)
    this.onRedDefClick = this.onRedDefClick.bind(this)
  }

  renderNextBtn() {
    return (
      <NextBtn onClick={this.props._onNextClick}>
        <span>Next</span>
        <div className="icon">
          <i className="fa fa-chevron-right" />
        </div>
      </NextBtn>
    )
  }

  renderBlackDef() {
    return (
      <BlackDef
        title={'Black'}
        content={`You are a Builder. You enjoy leading, creating and working hard.
                  You are a traditional person with respect for authority.
                  Your strengths are your diligence, directness and practicality.
                  Your weaknesses are your lack of tact, patience, and difficulty with abstractions.`}
        onBackClick={this.onBlackDefClick}
      />
    )
  }

  renderWhiteDef() {
    return (
      <WhiteDef
        title={'White'}
        content={`You are a Builder. You enjoy leading, creating and working hard.
                  You are a traditional person with respect for authority.
                  Your strengths are your diligence, directness and practicality.
                  Your weaknesses are your lack of tact, patience, and difficulty with abstractions.`}
        onBackClick={this.onWhiteDefClick}
      />
    )
  }

  renderGreenDef() {
    return (
      <GreenDef
        title={'Green'}
        content={`You are a Planner. You enjoy dreaming, plotting and innovating.
                  You tend to spend a lot of time thinking.
                  Your strengths are your vision, objectiveness and attention to detail.
                  Your weaknesses are your difficulty in putting yourself in the current moment and lack of practicality and speed.`}
        onBackClick={this.onGreenDefClick}
      />
    )
  }

  renderBlueDef() {
    return (
      <BlueDef
        title={'Blue'}
        content={`You are a Relater. You enjoy chatting, romance and spending time with others.
                You are an empathetic person who tends to put the needs of others above your own.
                Your strengths are your sympathy, openness and awareness of your own emotions.
                Your weaknesses are your subjectivity, pliability and manipulability.`}
        onBackClick={this.onBlueDefClick}
      />
    )
  }

  renderRedDef() {
    return (
      <RedDef
        title={'Red'}
        content={`You are an Adventurer. You enjoy action, excitement and drama.
                  You easily accept change and are spontaneous.
                  Your strengths are your tenacity, fearlessness and adaptability.
                  Your weaknesses are your carelessness and lack of focus and diligence.`}
        onBackClick={this.onRedDefClick}
      />
    )
  }

  render() {
    let showBlackDef = this.state.showBlackDef
    let showGreenDef = this.state.showGreenDef
    let showBlueDef = this.state.showBlueDef
    let showRedDef = this.state.showRedDef
    let showWhiteDef = this.state.showWhiteDef
    if (showBlackDef) {
      return this.renderBlackDef()
    } else if (showGreenDef) {
      return this.renderGreenDef()
    } else if (showBlueDef) {
      return this.renderBlueDef()
    } else if (showRedDef) {
      return this.renderRedDef()
    }else if (showWhiteDef) {
      return this.renderWhiteDef()
    }
    return (
      <Wrapper className="jumbotron">
        <h1 className="display-3 title">Colors Result</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultColors}</h2>
        <hr className="my-5" />
        <p className="lead">What does this result mean?</p>
        <ul className="list-group">
          <li className="list-group-item" onClick={this.onBlackDefClick}>
            Black
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onGreenDefClick}>
            Green
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onBlueDefClick}>
            Blue
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onRedDefClick}>
            Red
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onWhiteDefClick}>
            White
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
        {this.renderNextBtn()}
      </Wrapper>
    )
  }

  onBlackDefClick() {
    let showBlackDef = this.state.showBlackDef
    this.setState({ showBlackDef: !showBlackDef })
  }

  onGreenDefClick() {
    let showGreenDef = this.state.showGreenDef
    this.setState({ showGreenDef: !showGreenDef })
  }

  onBlueDefClick() {
    let showBlueDef = this.state.showBlueDef
    this.setState({ showBlueDef: !showBlueDef })
  }

  onRedDefClick() {
    let showRedDef = this.state.showRedDef
    this.setState({ showRedDef: !showRedDef })
  }

  onWhiteDefClick() {
    let showWhiteDef = this.state.showWhiteDef
    this.setState({ showWhiteDef: !showWhiteDef })
  }
}

Colors.propTypes = {
  resultColors: PropTypes.string.isRequired,
  resultBlack: PropTypes.string.isRequired,
  resultGreen: PropTypes.string.isRequired,
  resultBlue: PropTypes.string.isRequired,
  resultWhite: PropTypes.string.isRequired,
  resultRed: PropTypes.string.isRequired
}

export default Colors
