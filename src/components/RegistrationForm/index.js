import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {first: false, firstName: '', lastName: '', last: false, isSub: true}

  firstNameInput = event => {
    if (event.target.value === '') {
      this.setState({first: true})
    } else if (event.target.value !== '') {
      this.setState({first: false, firstName: event.target.value})
    }
  }

  lastNameInput = event => {
    if (event.target.value === '') {
      this.setState({last: true})
    } else if (event.target.value !== '') {
      this.setState({last: false, lastName: event.target.value})
    }
  }

  changeSta = () => {
    this.setState(prev => ({isSub: !prev.isSub}))
  }

  onLogin = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({isSub: true, first: true, last: true})
    } else if (firstName === '') {
      this.setState({first: true})
    } else if (lastName === '') {
      this.setState({last: true})
    } else if (firstName !== '' && lastName !== '') {
      this.setState({isSub: false, firstName: '', lastName: ''})
    }
  }

  render() {
    const {first, last, isSub} = this.state
    return (
      <div className="bg">
        <h1 className="reg">Registration</h1>

        {isSub ? (
          <div className="container">
            <form onSubmit={this.onLogin}>
              <div className="col">
                <label htmlFor="first"> FIRST NAME</label>
                <input
                  id="first"
                  onBlur={this.firstNameInput}
                  type="text"
                  placeholder="First name"
                />
                {first ? <p className="para">Required </p> : null}
              </div>

              <div className="col">
                <label htmlFor="last"> LAST NAME</label>
                <input
                  id="last"
                  onBlur={this.lastNameInput}
                  type="text"
                  placeholder="Last name"
                />
                {last ? <p className="para">Required</p> : null}
              </div>
              <div className="btc">
                <button type="submit" className="btn" value={isSub}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="sec-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="head">Submitted Successfully</p>
            <button
              type="button"
              onClick={this.changeSta}
              className="btn1"
              value={isSub}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
