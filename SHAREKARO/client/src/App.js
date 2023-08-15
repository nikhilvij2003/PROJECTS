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

  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <header></header>
      <img src={url} alt="description" className='img' /> 
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
