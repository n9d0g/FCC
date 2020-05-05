import React, { useState } from 'react';

export default function App() {
  const vision = 
    "We are a Christ-centred, Holy Spirit-led community committed to " +
    "the building of strong relationships and planting of healthy " +
    "reproducing churches.";
  const mission =
    "to introduce and represent Christ through our nurturing small " +
    "group-driven ministries in the community.";

  return (
    <div>
      <h1 className="title">Welcome to Freedom in Christ Church!</h1>
      <h2 className="vision">{vision}</h2>
      <h3 className="mission">{mission}</h3>
    </div>
  );
}