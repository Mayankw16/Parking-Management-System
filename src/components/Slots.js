import React from 'react'
import SlotCard from './SlotCard'

const Slots = ({ details, bookSlotCard, leaveSlot }) => {

    return (
        <>
            <div className="container mb-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        details.map((element, index) => <SlotCard key={index} id={index} name={element.Name} mobile={element.Mobile} booked={element.Booked} bookSlotCard={bookSlotCard} leaveSlot={leaveSlot} />)
                    }
                </div>
            </div>
        </>

    )
}



export default Slots