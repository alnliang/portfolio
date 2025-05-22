// src/components/react/Greeting.jsx
import React, { useState } from 'react';

export default function Greeting({ message }) {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '1px solid blue', padding: '1rem', marginTop: '1rem' }}>
            <h2>{message} (from React!)</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}