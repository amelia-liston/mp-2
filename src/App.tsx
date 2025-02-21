import { useState, useEffect } from 'react'
import Amiibos from "./components/Amiibos.tsx";
import styled from "styled-components";
import {Amiibo} from "./interfaces/Amiibo.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px solid purple;
    text-align: center;
    background-color: #D1F6FF;
`;

const StyledHeader=styled.h1`
    font: bold calc(3px + 3vw) "SF Pro Rounded";
`;



function App() {
  const [data, setData] = useState<Amiibo[]>([]);

  useEffect(() => {
      async function fetchData(): Promise<void> {
          const rawData = await fetch("https://www.amiiboapi.com//api/amiibo/?gameseries=Animal%20Crossing");
          const {amiibo}= await rawData.json();
          setData(amiibo);
          console.log("These are the values: "+data);

      }
      fetchData()
          .then(() => console.log("Data fetched successfully"))
          .catch((e: Error) => console.log("There was an error: " + e));
  }, [data.length])

  return (
    <>
        <ParentDiv>
            <StyledHeader>Animal Crossing Characters</StyledHeader>
            <Amiibos data={data}/>
        </ParentDiv>
    </>
  )
}

export default App
