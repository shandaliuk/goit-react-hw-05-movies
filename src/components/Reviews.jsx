import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from './services/getMovies';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getUserReviews = async () => {
      const userReviews = await getReviews(movieId);
      setReviews(userReviews);
    };
    getUserReviews();
  }, [movieId]);

  console.log(reviews);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h2>{review.author}</h2>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
