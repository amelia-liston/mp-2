import styled from "styled-components";
import {Amiibo} from "../interfaces/Amiibo.ts";

const AllAmiibosDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #D1F6FF;
`;

const OneAmiiboDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px solid lightblue;
    font: small-caps bold calc(2px + 1vw) "SF Pro Rounded";
    text-align: center;
    background-color: lavender;
`;

const StyledImage=styled.img`
    display: block;
    max-width: 100%;
`;

export default function Amiibos(props: {data:Amiibo[]}){
    return (
        <>
            <AllAmiibosDiv>
                {
                    props.data.map((amiibo: Amiibo) =>
                    <OneAmiiboDiv key={amiibo.head}>
                        <h1>{amiibo.name}</h1>
                        <StyledImage src={amiibo.image} alt={`image of ${amiibo.name}`}/>
                        <h3>{amiibo.amiiboSeries}</h3>
                    </OneAmiiboDiv>
                    )
                }
            </AllAmiibosDiv>
        </>
    );
}