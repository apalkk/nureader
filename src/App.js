import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    const newUrl = e.target.value;
    const pattern = /novelupdates\.com/;
    if (newUrl.match(pattern)) {
      setUrl(newUrl);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <iframe src={url} />
    </div>
  );
}

export default App;
