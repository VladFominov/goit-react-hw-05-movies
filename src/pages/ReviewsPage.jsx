import { getReviews } from 'components/Services/api';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsWrapper } from './Styled';


function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviewsDetails = async () => {
      try {
        const reviews = await getReviews(movieId);
        setReviews(reviews.results);
        console.log(reviews);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };
    fetchReviewsDetails(movieId);
  }, [movieId]);

  return (
    <ReviewsWrapper>
      {reviews.length === 0
        ? "we don't have any reviews for this movie"
        : reviews.map(({ id, author, content }) => {
            return (
              <div key={id}>
                <h3>
                  <b>Author: </b>
                  {author}
                </h3>
                <p>{content}</p>
              </div>
            );
          })}
    </ReviewsWrapper>
  );
}

export default ReviewsPage;
