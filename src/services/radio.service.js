import axios from "axios";
 const getStations = async () => {
    const res = await axios.get(
        `https://radio-world-75-000-worldwide-fm-radio-stations.p.rapidapi.com/api.php?category_detail&id=146`,
        {headers: {
            'X-RapidAPI-Key': 'fa5bad6589mshb734081f8b4ef73p190d4ajsn623b5dc8d870',
            'X-RapidAPI-Host': 'radio-world-75-000-worldwide-fm-radio-stations.p.rapidapi.com'
          }}
    );
    return res.data;
}

export const RadioServices = {
   getStations 
}