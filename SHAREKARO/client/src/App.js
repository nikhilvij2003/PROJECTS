import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';
import axios from 'axios';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://fileshare-rho.vercel.app', {})
    .then (result => console.log(result))
    .catch(err => console.log(err))
  }

  const fileInputRef = useRef();

  
  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <header></header>
      <div className='wrapper'>
        <h1>SHARE KARO!</h1>
        <p>Upload and share the download link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target='_blank' rel="noopener noreferrer" >{result}</a> 
      </div>
      <footer></footer>
    </div>
  
  );
}

export default App;
