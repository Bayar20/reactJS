import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <p>You clicked the button {count} times!</p>
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button>
        </div>
    )
}

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me!
//       </button>
//     </div>
//   );
// }

export default Counter