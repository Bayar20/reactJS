import React, { useRef, useState, useEffect } from 'react'
import './App.css'

const SomeComponent = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const usernameRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        usernameRef.current.focus()
    })

    return (
        <>
            <h1>{ a }</h1>
            <input ref={ usernameRef } placeholder="username" />
            <input ref={ passwordRef } placeholder="password" />
            <button onClick={ () => setA(a + 1) }>inc a</button>
            <button onClick={ () => setB(b + 1) }>int b</button>
        </>
    )
}

const App = () => {
    return (
        <div>
            <SomeComponent />
        </div>
    )
}

export default App;