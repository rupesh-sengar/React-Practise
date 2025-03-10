import { useState } from 'react'
import "./SeatingArrangement.css"

const seatingArrangement=
  Array.from({ length: 6 }, (_, rowIndex) =>
    Array.from({ length: 5 }, (_, colIndex) => rowIndex * 5 + colIndex + 1)
  )
  

export const SeatingArrangement = ()=>{
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
    console.log(selectedSeats)
    function handleSelectedSeats (event: React.MouseEvent, val:number){
      event.preventDefault()
      console.log(val)
  
      if (selectedSeats.includes(val)) setSelectedSeats(selectedSeats.filter(seat => seat !== val))
      else{
      selectedSeats.push(val)
      setSelectedSeats([...selectedSeats])}
    }
  
    console.log(seatingArrangement)
  
    return (
      <div className='seat-container'>
        <div className="seat-grid">
        {seatingArrangement.map((seatRow:number[])=>{
          
          return  seatRow.map((col:number)=>{
               return <button onClick={(e) => handleSelectedSeats(e, col)}>{col}</button>
           })
         })}
         </div>
      </div>
    )
}
