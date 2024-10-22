'use client';

import { useEffect, useState } from 'react';

interface Asteroid {
  id: string;
  name: string;
  close_approach_date: string;
  estimated_diameter_km: number;
}

const AsteroidsPage: React.FC = () => {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch asteroids from your backend API
    fetch('http://localhost:3000/asteroids')
      .then((response) => response.json())
      .then((data) => setAsteroids(data))
      .catch((error) => console.error('Error fetching asteroids:', error));
  }, []);

  const filteredAsteroids = asteroids.filter(asteroid =>
    asteroid.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Asteroids List</h1>
      <input
        type="text"
        placeholder="Search asteroids"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredAsteroids.map((asteroid) => (
          <li key={asteroid.id}>
            <strong>{asteroid.name}</strong> - Approaching on {asteroid.close_approach_date} 
            (Diameter: {asteroid.estimated_diameter_km} km)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsteroidsPage;