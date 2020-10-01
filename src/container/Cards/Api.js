import Data from '../../assets/colleges.json'

const getColleges = page => {
    const colleges = []
    for (let i = page ; i<page+5 ; i++){
        colleges.push(Data.colleges[i])
    }
    return colleges;
}

export default getColleges