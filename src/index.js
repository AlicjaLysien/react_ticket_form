import React from "react";
import ReactDOM from "react-dom";


const PositiveMessage = () => <p>You can buy ticket.</p>;
const NegativeMessage = () => <p>You're under 16. You can't buy ticket.</p>;


class App extends React.Component {

state = {
  isConfirmed: false,
  isFormSubmitted: false
}


displayMessage = () => {
  if (this.state.isFormSubmitted) {
    if (this.state.isConfirmed) {
      return <PositiveMessage />
    } else {
      return <NegativeMessage />
    }
  } else { return null }
}

handleCheckboxChange = () => {
  this.setState({
    isConfirmed: !this.state.isConfirmed,
    isFormSubmitted: false,
  })
}


handleFormSubmit = (e) => {
  e.preventDefault()
  if (!this.state.isFormSubmitted) {
    this.setState({
      isFormSubmitted: true
    })
  }
}

render() {
  return (
<>
<h1>NEW HORROR MOVIE - BUY A TICKET</h1>
<form onSubmit={this.handleFormSubmit}>
<input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
<label htmlFor="age">I'm above 16 year old</label>
          <br />
          <button type="submit">Buy a ticket</button>
  </form>
  {this.displayMessage()}
</>
  )
}
}

ReactDOM.render(<App />, document.getElementById("root"))