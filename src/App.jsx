
import './App.css';
import Main from './Components/Main';
import { useState } from "react"

function App() {
  const [ticketType, setTicketType] = useState('Standard');
  const [quanityOfTicker, setQuantityOfTicker] = useState('')

  const ticketTypeHandler = (event) => {
    setTicketType(event.target.value);
  }

  const quantityHandler = (event) => {
    setQuantityOfTicker(event.target.value)
  }

  return (
    <div className='main_container'>
      <div className='main_container_inner'>

        <div className='dropdown'>

          <label htmlFor="tickettype" >Ticket Type:</label>
          <select id="tickettype" value={ticketType} onChange={ticketTypeHandler}>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>

          <label htmlFor="qty" >Qty:</label>
          <select id="qty" value={quanityOfTicker} onChange={quantityHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

          </select>
        </div>

        <div className="App">
          <div className='left'>
            <Main quanityOfTicker={quanityOfTicker} />

          </div>
          <div className='right'>
            <div>
              <h3>Key to Seat Layout:</h3>
              <ul>
                <li> <img className='available' src="https://cdn4.iconfinder.com/data/icons/car-components/100/car_seat_front_driver_passenger_race_sit-512.png" alt="" />
                  <p>Available</p></li>

                <li> <img className='unavailable' src="https://cdn4.iconfinder.com/data/icons/car-components/100/car_seat_front_driver_passenger_race_sit-512.png" alt="" />
                  <p>Unavailable</p></li>

                <li> <img className='yourselection' src="https://cdn4.iconfinder.com/data/icons/car-components/100/car_seat_front_driver_passenger_race_sit-512.png" alt="" />
                  <p>Your Selection</p></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
