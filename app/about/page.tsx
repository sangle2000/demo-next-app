'use client'

import styles from "./styles.module.css"
import {useState} from "react";

function About() {
    const [number, setNumber] = useState<number>(0);

    return (
        <>
            <h1 className={styles.title}>About Page: {number}</h1>
            <button onClick={() => {setNumber(prev => prev + 1)}}>
                Increase
            </button>

            <button onClick={() => {setNumber(prev => prev - 1)}}>
                Decrease
            </button>
        </>
    )
}

export default About;