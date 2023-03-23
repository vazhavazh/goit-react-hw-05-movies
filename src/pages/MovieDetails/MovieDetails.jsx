import { useState, useEffect } from 'react';

import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../api/Fetch';

import {
  MovieDetailsContainer,
  GoBackBtn,
  Title,
  Overview,
  Paragraph,
  Image,
  LinksWrapper,
  Loading,
  TextContainer,
  ImageWrapper,
} from './MovieDetailsStyled';


export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackBtn = location.state?.from ?? '/';
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchMovieById(movieId);
        setMovie(response);
      } catch (error) {
        console.error();
      }
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <Loading>Loading ...</Loading>;
  }

  const { title, overview, release_date, vote_average, poster_path } = movie;

  return (
    <MovieDetailsContainer>
      <GoBackBtn to={goBackBtn}>Go back</GoBackBtn>

     <ImageWrapper>
        <TextContainer>
          <Title>{title}</Title>
          <Overview>Overview</Overview>
          <Paragraph> {overview}</Paragraph>
          <Paragraph>Release date: {release_date}</Paragraph>
          <Paragraph>User Score: {(vote_average * 10).toFixed(0)} %</Paragraph>
        </TextContainer>
  
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${title} poster`}
        />
     </ImageWrapper>
      <>
        <LinksWrapper>
          <Link to={`cast`}>Casts</Link>
          <Link to={`reviews`}>Reviews</Link>
        </LinksWrapper>
      </>
      <Outlet />
    </MovieDetailsContainer>
  );
}
