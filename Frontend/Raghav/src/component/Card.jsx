import React from 'react'

const Card = () => {
  return (
    <div className="card mt-4 mx-auto" style={{ width: "400px" }}>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
  )
}

export default Card
