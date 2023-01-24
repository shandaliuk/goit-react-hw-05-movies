import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/getMovies';
import { Author, ReviewsList, Message } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getUserReviews = async () => {
      const userReviews = await getReviews(movieId);
      setReviews(userReviews);
    };
    getUserReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <Message>We don't have any reviews for this movie.</Message>
      ) : (
        <ReviewsList>
          {reviews.map(review => (
            <li key={review.id}>
              <Author>{review.author}</Author>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
