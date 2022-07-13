import React from 'react'

const SlotCard = ({ id, name, mobile, booked, bookSlotCard, leaveSlot }) => {

    const leaveSlotHandler = (e) => {
        leaveSlot(e.target.id);
    }

    const bookSlotCardHandler = (e) => {
        let id = e.target.id;
        if (document.getElementById("nameInput" + id).value.length < 3) {
            window.alert("Name should contain atleast 3 characters");
        }
        else {
            let obj = {
                id: id,
                Name: document.getElementById("nameInput" + id).value,
                Mobile: document.getElementById("mobileInput" + id).value
            }
            bookSlotCard(obj);
        }
    }

    return (
        <>
            {booked && <div className="col">
                <div className="card h-100" style={{ border: '1px solid black', padding: '1.5rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Slot Number : {id + 1} ( Already Booked )</h5>
                        <div className='my-4'>
                            <h5 className="card-text">Name: {name}</h5>
                            {mobile.length > 0 && <h5 className="card-text">Mobile: {mobile}</h5>}
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary" id={id} onClick={leaveSlotHandler}>Leave Slot</button>
                        </div>
                    </div>
                </div>
            </div>}
            {!booked && <div className="col">
                <div className="card h-100 " style={{ border: '1px solid black' }}>
                    <div className="card-body">
                        <h5 className="card-title">Slot Number : {id + 1}</h5>
                        <div className="mb-3">
                            <label htmlFor={"nameInput" + id} className="form-label">Name</label>
                            <input type="text" className="form-control" id={"nameInput" + id} aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={"mobileInput" + id} className="form-label">Mobile Number</label>
                            <input type="number" className="form-control" id={"mobileInput" + id} aria-describedby="emailHelp" />
                        </div>
                        <button type="button" id={id} className="btn btn-primary" onClick={bookSlotCardHandler}>Book Slot</button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default SlotCard