import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const VisitAll = () => {
  const [urls, setUrls] = useState([]);
  const base_url = 'https://assignment-12in.onrender.com/api';

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get(`${base_url}/admin/visitall`);
        setUrls(res.data.allurl || []);
      } catch (error) {
        console.error(error);
        toast.error('Error fetching URLs');
      }
    };

    fetchUrls();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">All Shortened URLs</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border sm:px-2">Long URL</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border sm:px-2">Short URL</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border sm:px-2">Visits</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-sm break-all sm:px-2">{url.longUrl}</td>
                <td className="px-4 py-2 border text-sm sm:px-2">
                  {`${base_url}/${url.shortCode}`}
                </td>
                <td className="px-4 py-2 border text-sm sm:px-2">{url.visited || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisitAll;
