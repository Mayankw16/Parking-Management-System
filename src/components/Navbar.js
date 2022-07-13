import React from 'react'

const Navbar = ({ addMoreSlots }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand">Parking Management System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">
                            <button className="btn btn-outline-success" type="button" onClick={() => { addMoreSlots() }}>Add More Slots</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar