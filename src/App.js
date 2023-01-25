import React, { useState } from 'react';
import stage from "./style.css"

function App() {
  const [url, setUrl] = useState('');

  const handleStart = () => {
    window.open("https://www.google.com");
  }

  const handleChange = (e) => {
    const newUrl = e.target.value;
    const pattern = /novelupdates\.com/;
    if (newUrl.match(pattern)) {
      setUrl(newUrl);
    } else {
      <div>
        Enter Valid URL
      </div>
    }
  }

  return (
    <div>
      <button onClick={handleStart} class='bn59'>Start Reading</button>
      <div className='search'>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
      </div>
      <iframe src={url} class='one' frameBorder="0"/>
    </div>
  );
}

export default App;
