import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Li } from './Styled';


import { getTrending } from '../components/Services/api';
import { Tittle } from './Styled';


function HomePage() {
  const [trendings, setTrendings] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
 

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        // setIsLoading(true);

        const trendings = await getTrending();
        setTrendings(trendings.results);
      } catch (error) {
       
      } finally {
       
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <section>
      <Tittle>Tranding today</Tittle>

      <ul>
        {trendings.map(({ id, title }) => {
          return (
            <Li key={id}>
              <Link to={`/movies/${id}`}> {title}</Link>
            </Li>
          );
        })}
      </ul>
    </section>
  );
}

export default HomePage;
