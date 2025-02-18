import styled from "styled-components";
import {Joke} from "../interfaces/Joke.ts";

const AllJokesDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lavender;
`;

const OneJokeDiv=styled.div<{category: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props) => (props.category === "Programming" ? 'lightblue' : 'gray')};
    border: 3px solid;
    text-align: center;
`;

export default function Jokes(props: {data:Joke[]}){
    return (
        <>
            <AllJokesDiv>
                {
                    props.data.map((joke: Joke) =>
                    <OneJokeDiv key={joke.id} category={joke.category}>
                        <h1>{joke.joke}</h1>
                    </OneJokeDiv>
                    )
                }
            </AllJokesDiv>
        </>
    );
}