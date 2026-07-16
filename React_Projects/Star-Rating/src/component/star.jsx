import {FaStar} from 'react-icons/fa'
import { useState } from 'react'
import './style.css'

const StarRating = ({noOfStars = 5}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(index){
      setRating(index)
    }
    function MouseEnter(index){
      setHover(index)
    }
    function MouseLeave(){
      setHover(rating)
    }
  return (
    <div className="star-rating">
      {
        [...Array(noOfStars)].map((_, index) => {
          index += 1
          return (
            <FaStar 
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => MouseEnter(index)}
            onMouseLeave={() => MouseLeave()}
            size={40}
            />
          )
        })
      }
    </div>
  )
}

export default StarRating