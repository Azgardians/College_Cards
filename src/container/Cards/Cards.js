import React ,{useState, useEffect}  from 'react'
// import Data from '../../assets/colleges.json'
import CollegeCard from './CollegeCard'
import getColleges from './Api';


const Cards = (props) => {

    const [page , setPage] = useState(0);
    const [colleges , setColleges] = useState([]);
    const [loading , setLoading] = useState(true);

    const handleScroll = (event ) => {
        
            setPage(prev=>prev + 5);
    }
    useEffect(()=>{
        const loadColleges = async () => {
            setLoading(true);
            const newColleges = await getColleges(page);
            console.log(newColleges);
            setColleges(prev => [...prev , ...newColleges]);
            setLoading(false);

        };
        loadColleges();
    },[page]);
    return(
        <div style={{display:"flex",flexDirection:"column"}} >
            {colleges && colleges.map(college => (
                <CollegeCard {...college} />
            ))}
            {loading && <h2>LOADING....</h2>}
            <button style={{ padding:"10px 20px" , width:"50%" , alignSelf:"center", color:"white" , backgroundColor:"red" , cursor:"pointer" }}onClick={handleScroll}> Load More</button>
        </div>
    )
}

export default Cards