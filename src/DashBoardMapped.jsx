import React from "react";
import {sprintData} from './sprintData'

function DashBoardMapped () {

  return (
    <>
      {sprintData.map((sprint) => {
          return(
            <div className='sprint-box'>
                <h1>{sprint.name}</h1>
                <p>{sprint.blurb}</p>
            </div>
          )
      })}
    </>
  )
}

export default DashBoardMapped