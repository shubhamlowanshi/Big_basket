import React, { useEffect, useState } from 'react';

const Jason = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let result = await response.json();
        setUsers(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
}

export default Jason;
