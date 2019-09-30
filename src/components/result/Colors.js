import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import { NextBtn } from '../utils/Buttons'

class Colors extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     showBlackDef: false,
  //     showWhiteDef: false,
  //     showGreenDef: false,
  //     showBlueDef: false,
  //     showRedDef: false
  //   }
  //   this.onBlackDefClick = this.onBlackDefClick.bind(this)
  //   this.onWhiteDefClick = this.onWhiteDefClick.bind(this)
  //   this.onGreenDefClick = this.onGreenDefClick.bind(this)
  //   this.onBlueDefClick = this.onBlueDefClick.bind(this)
  //   this.onRedDefClick = this.onRedDefClick.bind(this)
  // }

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

  render() {
    
    return (
      <Wrapper className="jumbotron">
        <h1 className="display-3 title">Your Colors Are:</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultColor1.firstColor}</h2>
        <h2 className="display-6 resultTxt">{this.props.resultColor1.secondColor}</h2>
        <hr className="my-5" />
        <p className="lead">What does this result mean?</p>
      
        {this.renderNextBtn()}
      </Wrapper>
    )
  }
}

Colors.propTypes = {

  resultColor1: PropTypes.object.isRequired,
 
}

export default Colors
