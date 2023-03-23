import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActorsById } from '../../../api/Fetch';
import { ActorItem, Image } from './CastStyled';

export default function Cast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchMovieActorsById(movieId);
        setCast(response.cast);
      } catch (error) {
        console.error();
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(actor => (
          <ActorItem key={actor.id}>
            <Image
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : ''
              }
              alt=""
            />
            <h4>{actor.name}</h4>
            <span>Character - {actor.character}</span>
          </ActorItem>
        ))}
      </ul>
    </>
  );
}
