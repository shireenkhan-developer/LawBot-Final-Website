import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";


const User = ({ user, onDelete }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
     
    
      <section id="sec2">
        <div className="gallery">
          <div className="user_card">
            <div className="card-img">
              <img src={user.picture.large} alt="" />
            </div>
            <div className="user_card_details">
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => {
                  onDelete(user);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h3>
                {user.name.title}. {user.name.first} {user.name.last}
              </h3>
              <section {...getCollapseProps()}>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Gender:</strong> {user.gender}
                </p>
                <p>
                  <strong>Age:</strong> {user.dob.age}
                </p>
                <p>
                  <strong>Country:</strong> {user.location.country}
                </p>
              </section>

              <button
                type="button"
                className="btn btn-secondary"
                {...getToggleProps({
                  onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
              >
                {isExpanded ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>
        </div>
      </section>
     
      
    </>
  );
};

export default User;
