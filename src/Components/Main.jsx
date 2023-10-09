import "./Main.css"
import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Main(props) {
    let ticketNumber = props.quanityOfTicker
    const [bookNumber, setBookNumber] = useState(0)

    const [layout, setLayout] = useState([
        [0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 7, 8, 0, 9, 10, 0, 11, 12, 0, 13, 14],
        [0, 0, 0, 0, 0, 15, 16, 0, 17, 18, 0, 19, 20, 0, 21, 22, 0, 23, 24, 0, 25, 26, 0, 27, 28],
        [0, 0, 0, 0, 0, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 0, 0, 0, 39, 40, 41, 42, 43, 44, 45],
        [0, 0, 0, 0, 0, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 0, 0, 0, 56, 57, 58, 59, 60, 61, 62],
        [0, 0, 0, 0, 0, 63, 64, 65, 67, 68, 69, 70, 71, 72, 73, 0, 0, 0, 74, 75, 76, 77, 78, 79, 80],
        [0, 0, 0, 0, 0, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 0, 0, 0, 91, 92, 93, 94, 95, 96, 97],
        [0, 0, 0, 0, 0, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 0, 0, 0, 108, 109, 110, 111, 112, 113, 114],
        [115, 116, 117, 0, 0, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 0, 0, 0, 128, 129, 130, 132, 132, 133, 134],
        [135, 136, 137, 0, 0, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 0, 0, 0, 148, 149, 150, 151, 152, 153, 154],
        [0, 0, 0, 0, 0, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 0, 0, 0, 165, 166, 167, 168, 169, 170, 171],
        [0, 0, 0, 0, 0, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 0, 0, 0, 182, 183, 184, 185, 186, 187, 188],

    ]);

    const [seats, setSeats] = useState(layout.map(item => item.map((data) => (
        { id: data, isZero: data, isSelected: false, isBooked: false, type: "standard" }))));


    const bookHandler = (seatId) => {

        if (bookNumber < ticketNumber) {
            let updatedSeat = seats.map(item => item.map(data => {
                if (data.id == seatId) {
                    if (data.isBooked) {
                        alert("THis seat Already Booked ... !")
                        return { ...data, isSelected: false }
                    } else {
                        if (data.isSelected === false) {
                            setBookNumber(bookNumber + 1)
                            return { ...data, isSelected: true }

                        } else {
                            setBookNumber(bookNumber - 1)
                            return { ...data, isSelected: false }
                        }
                    }

                } else {
                    return data
                }
            }))
            setSeats(updatedSeat)
        } else {
            toast.error("You have select all tickets Click to proceed..!")
        }

    }

    const proceedHandler = () => {
        setSeats(seats.map(item => item.map(data => {
            if (data.isSelected) {
                return { ...data, isBooked: true, isSelected: false }
            } else {
                return data
            }
        })))

        toast("ticket booked.. !")
        setBookNumber(0)
    }
    return (<div className="container">
        <div>
            {seats.map((row, index1) => {
                return (
                    <div key={index1} style={{ display: "flex" }}>
                        <div style={{ width: "40px" }}>
                            {String.fromCharCode(69 + index1)}
                        </div>
                        {row.map((seat, index2) => (
                            <div key={index2}>
                                {seat.isZero != 0 ? (
                                    <img className={` ${seat.isSelected ? 'selected' : seat.isBooked ? 'booked' : 'available hover'} `}
                                        src="https://cdn4.iconfinder.com/data/icons/car-components/100/car_seat_front_driver_passenger_race_sit-512.png" alt=""
                                        style={{ width: "3rem", height: "3rem" }}
                                        onClick={() => bookHandler(seat.id)}
                                    />
                                ) : (
                                    <span style={{ marginRight: "1rem" }}></span>
                                )}
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
        <button className="btn" onClick={proceedHandler}>PROCEED</button>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>)
}

export default Main;