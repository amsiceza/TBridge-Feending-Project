import React from 'react'

const ActivityInputGroup = () => {
  return (
        <>
      <div className="activity-div">
        <span className="inputs-div">
          <input type="time" />
          <input type="time" />
          <input type="text" />
          <span className="activity-icons">
            <i type="button">
              <HiOutlineCheck />
            </i>
            <i type="button">
              <HiOutlineTrash />
            </i>
          </span>
        </span>
      </div>
    </>
  );

  return (
    <div>
      <App initialInputGroup={initialInputGroup} />
    </div>
  );
}
 
export default ActivityInputGroup