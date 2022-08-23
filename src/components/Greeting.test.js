import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

//test suite : we can group different tests under one group
describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    //Arrange
    render(<Greeting />)

    //Act
    //...

    //Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false })
    expect(helloWorldElement).toBeInTheDocument()
  })

  test('renders the text good to see you', () => {
    render(<Greeting />)
    const outputElement = screen.getByText('good to see you', {
      exact: false
    })
    expect(outputElement).toBeInTheDocument()
  })

  test('renders "Changed!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />)

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //assert
    const outputElement = screen.getByText('Changed!')
    expect(outputElement).toBeInTheDocument()
  })

  test('does not render  good to see you if the button was clicked', () => {
    //Arrange
    render(<Greeting />)

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.queryByText('good to see you', {
      exact: false
    })
    expect(outputElement).toBeNull()
  })
})

// test('renders Hello World as a text', () => {
//   //Arrange
//   render(<Greeting />)

//   //Act
//   //...

//   //Assert
//   const helloWorldElement = screen.getByText('Hello World', { exact: false })
//   expect(helloWorldElement).toBeInTheDocument()
// })
