import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      This is a sample stateful and server-side
      rendered React application.
    </div>
  );
}