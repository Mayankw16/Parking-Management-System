import { useState, useEffect } from "react";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slots from "./components/Slots";

let initialState = [];
for (let i = 0; i < 50; i++) {
  initialState.push({ Name: '', Mobile: 0, Booked: false, time: 0 });
}

function App() {

  useEffect(() => {
    localStorage.setItem('bookingDetails', JSON.stringify(details));
  })

  initialState = localStorage.getItem('bookingDetails') == null ? initialState : JSON.parse(localStorage.getItem('bookingDetails'));

  const [details, setDetails] = useState(initialState);

  const addMoreSlots = () => {
    let newDetails = [...details];
    for (let i = 0; i < 10; i++) {
      newDetails.push({ Name: '', Mobile: 0, Booked: false, time: 0 })
    }
    setDetails(newDetails);
    window.alert("10 more slots added successfully.")
  }

  const bookSlot = ({ Name, Mobile }) => {
    let flag = false;
    for (let i = 0; i < 50; i++) {
      if (details[i].Booked === false) {
        let newDetails = [...details];
        newDetails[i].Name = Name;
        newDetails[i].Mobile = Mobile;
        newDetails[i].Booked = true;
        newDetails[i].time = new Date();
        setDetails(newDetails);
        flag = true;
        break;
      }
    }
    if (!flag) window.alert("No more slots available.");
  }

  const bookSlotCard = ({ id, Name, Mobile }) => {
    let newDetails = [...details];
    newDetails[id].Name = Name;
    newDetails[id].Mobile = Mobile;
    newDetails[id].Booked = true;
    newDetails[id].time = new Date();
    setDetails(newDetails);
  }

  const leaveSlot = (id) => {
    let newDetails = [...details];
    newDetails[id].Name = '';
    newDetails[id].Mobile = 0;
    newDetails[id].Booked = false;
    let currentTime = new Date();
    let totalDuration = currentTime - (new Date(newDetails[id].time));
    totalDuration = Math.ceil(totalDuration / 60000)
    newDetails[id].time = 0;
    setDetails(newDetails);
    window.alert(`Total Duration : ${totalDuration} Minutes. Total Charges in Rupees : ${totalDuration}`);
  }


  return (
    <>
      <Navbar addMoreSlots={addMoreSlots} />
      <Booking bookSlot={bookSlot} />
      <Slots details={details} bookSlotCard={bookSlotCard} leaveSlot={leaveSlot} />
      <Footer />
    </>

  );
}

export default App;
