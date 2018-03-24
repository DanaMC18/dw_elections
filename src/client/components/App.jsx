import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className='form-address'>
      <h1>Find my next election</h1>
      <form id='form-search-elections'>
        <p>Enter the address where you are registered to vote</p>
        <div>
          <label>
            Street: 
            <input
              id='txt-street-1'
              type='text'
              name='street-1'
            />
          </label>
        </div>
        <div>
          <label>
            Street:
            <input 
              id='txt-street-2'
              type='text'
              name='street-2' />
          </label>
        </div>
        <div>
          <label>
            City: 
            <input
              id='txt-city'
              type='text'
              name='city' />
          </label>
          <label>
            State: 
            <select 
              id='sel-state'
              name='state'>
              <option value='-1'></option>
              <option value='AL'>Alabama</option>
              <option value='AK'>Alaska</option>
              <option value='AZ'>Arizona</option>
              <option value='AR'>Arkansas</option>
              <option value='CA'>California</option>
              <option value='CO'>Colorado</option>
              <option value='CT'>Connecticut</option>
              <option value='DE'>Delaware</option>
              <option value='DC'>District Of Columbia</option>
              <option value='FL'>Florida</option>
              <option value='GA'>Georgia</option>
              <option value='HI'>Hawaii</option>
              <option value='ID'>Idaho</option>
              <option value='IL'>Illinois</option>
              <option value='IN'>Indiana</option>
              <option value='IA'>Iowa</option>
              <option value='KS'>Kansas</option>
              <option value='KY'>Kentucky</option>
              <option value='LA'>Louisiana</option>
              <option value='ME'>Maine</option>
              <option value='MD'>Maryland</option>
              <option value='MA'>Massachusetts</option>
              <option value='MI'>Michigan</option>
              <option value='MN'>Minnesota</option>
              <option value='MS'>Mississippi</option>
              <option value='MO'>Missouri</option>
              <option value='MT'>Montana</option>
              <option value='NE'>Nebraska</option>
              <option value='NV'>Nevada</option>
              <option value='NH'>New Hampshire</option>
              <option value='NJ'>New Jersey</option>
              <option value='NM'>New Mexico</option>
              <option value='NY'>New York</option>
              <option value='NC'>North Carolina</option>
              <option value='ND'>North Dakota</option>
              <option value='OH'>Ohio</option>
              <option value='OK'>Oklahoma</option>
              <option value='OR'>Oregon</option>
              <option value='PA'>Pennsylvania</option>
              <option value='RI'>Rhode Island</option>
              <option value='SC'>South Carolina</option>
              <option value='SD'>South Dakota</option>
              <option value='TN'>Tennessee</option>
              <option value='TX'>Texas</option>
              <option value='UT'>Utah</option>
              <option value='VT'>Vermont</option>
              <option value='VA'>Virginia</option>
              <option value='WA'>Washington</option>
              <option value='WV'>West Virginia</option>
              <option value='WI'>Wisconsin</option>
              <option value='WY'>Wyoming</option>   
            </select>
          </label>
          <label>
            ZIP: 
            <input 
              id='txt-zip'
              type='text'
              name='zip'
              size='10' />
          </label>
        </div>
        <div className='button-submit'>
          <button type='submit'>Search</button>
        </div>
      </form>
    </div>
    )
  }
}

export default App;