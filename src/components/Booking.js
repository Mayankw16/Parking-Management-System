import React from 'react'

const Booking = ({ bookSlot }) => {

    const bookSlotHandler = (e) => {
        e.preventDefault();
        if (document.getElementById('nameInput').value.length < 3) {
            window.alert("Name should contain atleast 3 characters");
        }
        else {
            let personDetails = {
                Name: document.getElementById('nameInput').value,
                Mobile: document.getElementById('mobileInput').value
            }
            bookSlot(personDetails);
        }
    }

    return (
        <>
            <div className="container" style={{ border: '1px solid black', padding: '2rem', marginTop: '5rem', marginBottom: "2rem" }}>
                <h1 className='text-center'>Book Your Slot</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameInput" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobileInput" className="form-label">Mobile Number</label>
                        <input type="number" className="form-control" id="mobileInput" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={bookSlotHandler}>Book Slot</button>
                </form>
            </div>
        </>

    )
}

export default Booking;