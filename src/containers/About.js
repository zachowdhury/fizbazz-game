import React,{Component, PropertyTypes } from 'react';



export default class About extends Component  {
    render(){
        return(
            <div>

            <h1><b>How to play</b></h1>
            <p>Buzz-Fizz is a challenging combination for those who have already mastered&nbsp;<a href="https://www.classicgamesandpuzzles.com/Buzz.html">Buzz!</a>&nbsp;and<a href="https://www.classicgamesandpuzzles.com/Fizz.html">&nbsp;Fizz!</a>&nbsp;and wish to step it up a level.</p>
                <p>In this game the word Fizz replaces all the numbers 
                    with a five in them or that are multiples of five. 
                </p>
                <p>As in Buzz! all numbers that have a three or are a multiple of three are replaced with Buzz!.</p>
                <h2>Setting Up the Game</h2>
                <p>Players sit in a circle facing each other. A player is chosen to start the counting sequence. Another player is chosen to be the scorekeeper.</p>
                <h2>Playing Buzz-Fizz</h2>
                <p>The chosen player starts by saying the number "one". The player to their right goes next by saying "two". Play continues counter clockwise in order until a player calls out any number that contains a 5 or 3 or is a multiple of 5 or 3.
                    Play continues to the number 100.</p>
                <p>When the 50's are reached every number is replaced with Fizz!. Numbers like 55 become Fizz! and 53 becomes Buzz-Fizz! because it contains both a 5 and 7.</p>
                <p>When the 30's are reached every number is replaced with "Buzz!". Numbers with a 3 in them as well as a multiple of 3, like 30 or 33, receive a double buzz and 75 is replaced with Buzz-Fizz!.</p>
                <p>Play continues as quickly as possible. If a player misses a buzz, fizz, buzz-fizz or uses one at the wrong time they are given a penalty point and play starts over with the number one.</p>
                <h2>Winning the Game</h2>
                <p>When the count reaches 100 the player with the least amount of penalty points is the winner.</p>
            </div>


        );
    }
}