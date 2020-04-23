import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

//libraries
import Axios from 'axios'


export default () => {

    const [labels, setLabels] = useState([])
    const [values, setValues] = useState([])
    
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    
    useEffect(() => {
        
        const fetchData = async (date) => {
            if (date >= dd) return;
        
            const result = await Axios({
              method: "GET",
              url: `https://covid-19-data.p.rapidapi.com/report/country/code?format=json&date-format=YYYY-MM-DD&date=2020-${mm}-${date}&code=my`,
              headers: {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "cfb0f14a9fmsh913ae802309e7c9p175585jsn825aebcbd5ac",
              },
            });
        
            setLabels((val) => {
              let temp = [...val];
              temp.push(result.data[0].date);
              return temp;
            });

            setValues((val) => {
                let temp = [...val];
                temp.push(result.data[0].provinces[0].confirmed);
                return temp;
            })
            
            fetchData(++date);

          };
        
          let day = () => {
              if ((dd - 10) >= 0) {
                  return dd-10
              } else {
                  return dd-10
              }
          }
          
          fetchData(day());
        
    }, [])

    const data = {
        labels: labels,
        datasets: [{ 
            data: values,
            label: "Malaysia",
            borderColor: "#3e95cd",
            fill: false,
        }]
    }
    
    return (
        <div>
            <div style={{width:'800px', height:'600px'}}>
                <Line data={data} />
            </div>
        </div>
    )
}