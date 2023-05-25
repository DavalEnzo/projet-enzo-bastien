import React, { useState, useEffect} from 'react'
import SpaceXNavbar from "../components/SpaceXNavbar";
import axios from 'axios'
import Event from '../components/Event/Event';

export default function HistoryList(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/history') 
            setData(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <>
            <SpaceXNavbar></SpaceXNavbar>
            <div className='text-center'>
                <h1>Historique de l'Entreprise</h1>
                <br/>
                {
                    data.map((item,i )=>{
                        return (<><Event key={i} data={item}></Event><br/><br/></>)
                    })
                }
            </div>
        </>
    )
}