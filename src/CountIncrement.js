import react, { useEffect, useRef, useState } from 'react';

function CountIncrement(){

    const inputRef = useRef(0)
    
    const [count, setCount] = useState(0)
    const [x, setX] = useState(11)

    // console.log("Line Number 7")

    function increment(){
        setCount(count+1)
        inputRef.current =  inputRef.current + 1;
    }

    function changeValueOfX(){
        // console.log("Hi");
        
        setX(x+1)

        // console.log("Hi 2");

    }

    console.log("Line Number 13");


    useEffect(() => {
        console.log('In useEffect in line number 16'); // Runs after rendering is complete
        // setCount(count+1)

      }, []);
    

    return(
       <>
        {/* {console.log('In return Line Number 18')} Runs during rendering */}
       <button onClick={() => increment()}>add</button>
       <button onClick={() => changeValueOfX()}>x change</button>

       <h1>{inputRef.current && inputRef.current}</h1>
       <h1>{x}</h1>

       </>
    )

}

export default CountIncrement;