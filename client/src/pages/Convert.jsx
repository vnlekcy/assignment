import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Convert = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [shortUrlInput, setShortUrlInput] = useState('');
  const base_url = 'https://assignment-12in.onrender.com';
  const handleConvert = async () => {
    try {
      const res = await axios.post(`${base_url}/shorten`, { longUrl });
      setShortUrl(res.data.shortUrl);
      toast.success('URL shortened successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Error shortening the URL');
    }
  };

  const handleVisit = async () => {
    if (!shortUrlInput) {
      toast.error("Please enter a short URL to visit");
      return;
    }

    try {
      const shortCode = shortUrlInput.split('/').pop();
      const res = await axios.get(`${base_url}//${shortCode}`);
      window.open(res.data.redirect, '_blank');
      toast.success("Successfully redirected");
    } catch (error) {
      console.error(error);
      toast.error('Error visiting the shortened URL');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Shorten or Visit URL</h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Enter long URL..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div className="flex space-x-2 w-full sm:w-1/2">
          <button
            onClick={handleConvert}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Convert
          </button>
          <button
            onClick={handleVisit}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full sm:w-auto"
          >
            Visit
          </button>
        </div>
      </div>

      {shortUrl && (
        <div className="mt-6 p-4 bg-gray-100 rounded break-all">
          <p className="text-gray-700">
            <strong>Short URL:</strong> {shortUrl}
          </p>
        </div>
      )}

      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter short URL to visit..."
          value={shortUrlInput}
          onChange={(e) => setShortUrlInput(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>
    </div>
  );
};

export default Convert;
