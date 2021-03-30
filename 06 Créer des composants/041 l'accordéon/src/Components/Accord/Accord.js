import React, {useState, useRef, useEffect} from 'react'
import './Accord.css'
import Chevron from './chevron.svg'

export default function Accord() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    }

    const refHeight = useRef();

    useEffect(() => {
        
        setHeightEl(`${refHeight.current.scrollHeight}px`)
   
    }, [])


    return (
        <div className="accord">
            
            <div 
            onClick={toggleState}
            className="accord-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Chevron} alt="chevron down"/>
            </div>

            <div 
            ref={refHeight} 
            className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            >
                <p
                aria-hidden={toggle ? "true" : "false"}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, debitis? Aut quia tempora perspiciatis at fuga dignissimos minus, quo laborum? Nemo sunt voluptas eligendi ullam saepe odio enim suscipit aut?
                </p>
            </div>
        </div>
    )
}
