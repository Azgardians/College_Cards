import React  from 'react'
import Data from '../../assets/colleges.json'
import CollegeCard from './CollegeCard'

const colleges = Data.colleges;

const Cards = (props) => {
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            {colleges.map(college => (
                <CollegeCard college={college}/>
            ))}
        </div>
    )
}

export default Cards