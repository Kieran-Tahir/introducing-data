import React from "react";
import {db} from "./db"
import {useLiveQuery} from "dexie-react-hooks"

function DashBoardMapped () {

  const sprintData = useLiveQuery(
    () => db.sprintData.toArray()
  )

  return (
    <>
      {sprintData?.map(sprint => {
        return(
          <div key={sprint.id} className='sprint-box'>
            <h1>{sprint.name}</h1>
            <p>{sprint.blurb}</p>
          </div>
        )
      })}
    </>
  )
}

export default DashBoardMapped