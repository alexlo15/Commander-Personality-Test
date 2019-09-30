import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../components/utils/_var'
import Quiz from '../components/quiz/Quiz'
import Results from '../components/result/Results'
import quizQuestions from '../api/quizQuestions'
import { QuestionCard } from '../components/utils/Cards'

const Wrapper = (props) => <div>{props.children}</div>

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Colors: {
          Green: 0,
          White: 0,
          Blue: 0,
          Red: 0,
          Black: 0
        }
    
      },
      // resultBriggs: '',
      resultColor1: '',
      resultColor2: ''
    }
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }

  // populate app’s state using the componentWillMount life cycle event
  componentWillMount() {
    const answerOptions = quizQuestions.map(question => question.answers)
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0]
    })
  }

  // setting the answer based on the user’s selection
  setUserAnswer(answer) {
    const answersCount = this.state.answersCount
    let applyAnswer = answer => {
      const answer_array = answer.split(',')
      // let briggsAnswer = answer_array[0]
      let colorsAnswer = answer_array[0]
      console.log(colorsAnswer)
      // let lettersAnswer = answer_array[2]
      if (colorsAnswer === "White") {
        // answersCount['Briggs'][briggsAnswer] += 1
        answersCount.Colors.White += 1
        // answersCount['Letters'][lettersAnswer] += 1
      } else if (colorsAnswer === "Red") {
        answersCount.Colors.Red += 1
      } else if (colorsAnswer === "Blue") {
        answersCount.Colors.Blue += 1
      } else if (colorsAnswer === "Green") {
        answersCount.Colors.Green += 1
      } else if (colorsAnswer === "Black") {
        answersCount.Colors.Black += 1
      }
      return answersCount
    }
    this.setState({
      answersCount: applyAnswer(answer),
      answer: answer
    })
  }

  // increment the counter and questionId state
  setNextQuestion() {
    const counter = this.state.counter + 1
    const questionId = this.state.questionId + 1
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    })
  }

  // setting the answer and then setting the next question
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value)
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 100)
    } else {
      setTimeout(() => this.setResults(this.getColorsResults()
        //, this.getSecondColor() , this.getLettersResults(), this.getBriggsResults()
      ), 800)
    }
  }



  getColorsResults() {
    const answersCount = this.state.answersCount
    const colorsAnswer = answersCount['Colors']
    // const redAnswer = answersCount.Colors.Red
    // const whiteAnswer = answersCount.Colors.White
    // const blueAnswer = answersCount.Colors.Blue
    // const blackAnswer = answersCount.Colors.Black
    // const greenAnswer = answersCount.Colors.Green
    const answersCountKeysColors = Object.keys(colorsAnswer)
    // gets the colors keys 
    console.log(answersCountKeysColors)
    const answersCountValuesColors = answersCountKeysColors.map(key => colorsAnswer[key])
    // this line below is the colors count
    console.log(answersCountValuesColors)
    // maxanswercountcolors is the # of the highest color
    const maxAnswerCountColors = Math.max.apply(null, answersCountValuesColors)
    console.log(maxAnswerCountColors)


    const firstColor = answersCountKeysColors.filter(key => colorsAnswer[key] === maxAnswerCountColors)
    const array2 = answersCountValuesColors.splice(answersCountValuesColors.indexOf(maxAnswerCountColors), 2); // remove max from the array
    const max2 = Math.max.apply(null, answersCountValuesColors)
    const secondColor = answersCountKeysColors.filter(key => colorsAnswer[key] === max2);

    console.log(firstColor)
    console.log(array2)
    console.log(max2)
    console.log(secondColor)


    // return filters through the key colors and returns the color who's key(name)
    // is the same as the max number count
    // return answersCountKeysColors.filter(key => colorsAnswer[key] === maxAnswerCountColors)
    return {firstColor, secondColor}
  }

  // getSecondColor() {
  //   const answerCount = this.state.answersCount
  //   const colorsAnswer = answerCount['Colors']
  //   const answersCountKeysColors = Object.keys(colorsAnswer)
  //   const answersCountValuesColors = answersCountKeysColors.map(key => colorsAnswer[key])
  //   const maxAnswerCountColors = Math.max.apply(null, answersCountValuesColors)
  //   answersCountValuesColors.splice(answersCountValuesColors.indexOf(maxAnswerCountColors), 1); // remove max from the array
  //   return answersCountKeysColors.filter(key => colorsAnswer[key] === maxAnswerCountColors)
  // }

  // ===========================================================================
  //                        set results
  // ===========================================================================
  setResults(resultColor1, resultColor2
    // , resultLetters, resultBriggs
  ) {
    // if (resultColors.length >= 2) {
      this.setState({ 
        resultColor1: resultColor1,
        resultColor2: resultColor2,
       })
      //  resultcolor1 is both colors
      console.log(resultColor1)
      // console.log(resultColor2)
    // }
    // if (resultLetters.length >= 1) {
    //   this.setState({ resultLetters: resultLetters[0] })
    // }
    // if (resultBriggs.length >= 1) {
    //   this.setState({ resultBriggs: resultBriggs })
    // }
  }

  // ===========================================================================
  //                    functions to render quiz
  // ===========================================================================
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    )
  }

  // ===========================================================================
  //                    functions to render result
  // ===========================================================================
  renderResult() {
    return (
      <Results
        // resultColors={this.state.resultColors}
        resultColor1={this.state.resultColor1}
        resultColor2={this.state.resultColor2}
      // resultLetters={this.state.resultLetters}
      // resultBriggs={this.state.resultBriggs}
      />
    )
  }

  // ===========================================================================
  //                       render this question page
  // ===========================================================================
  render() {
    let resultColor1 = this.state.resultColor1
    // let resultColor2= this.state.resultColor2
    if (resultColor1) {
      return this.renderResult()
    }
    return (
      <Wrapper className="container">
        <QuestionCard>
          <div className="corner" />
          <div className="corner" />
          <div className="corner" />
          <div className="corner" />
          {this.renderQuiz()}
        </QuestionCard>
      </Wrapper>
    )
  }
}

export default Question
