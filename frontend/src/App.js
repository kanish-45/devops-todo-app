import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/status")
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch((err) => console.error('Error fetching status:', err));
  }, []);

  if (!status) return <p>Loading status…</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>🛠️ DevOps Todo App</h1>
      <p><strong>API Status:</strong> {status.status}</p>
      <p>
        <strong>Timestamp:</strong>{' '}
        {new Date(status.timestamp).toLocaleString()}
      </p>
    </div>
  );
}

export default App;
