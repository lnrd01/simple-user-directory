import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch(' https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data.slice(0, 5));
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className='loading-screen'>Loading users...</div>;
  }

  if (error) {
    return <div className='error-message'>{error}</div>;
  }

  return (
    <div className='user-directory'>
      <h2>Simple User Directory</h2>
      <h3>By Christian Lenard Melecia</h3>
      <h3>BSIT-2A</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}><b>Name:</b> {user.name} <br /><b>Email:</b> {user.email} <br />
          <b>Company:</b> {user.company.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
