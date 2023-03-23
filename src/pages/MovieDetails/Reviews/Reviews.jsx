import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'api/Fetch';

import{ReviewItem} from './ReviewsStyled'

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchMovieReviewsById(movieId);

        setReviews(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <h4>{`Author: ${review.author}`}</h4>
              <p>{review.content}</p>
            </ReviewItem>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};
