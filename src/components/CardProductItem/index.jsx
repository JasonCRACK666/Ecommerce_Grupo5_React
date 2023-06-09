import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa'

const CardProductItem = ({
  id,
  image,
  title,
  originalPrice,
  discountRate,
  finalPrice,
  averageScore,
  countReviews
}) => {
  const residuaryStar = 5 - averageScore

  return (
    <div className='card'>
      <Link to={`/product/${id}`}>
        <img
          src={image}
          className='card-img-top'
          alt='productItem'
          style={{ height: '220px', objectFit: 'cover' }}
        />
      </Link>

      <div className='card-body bg-dark'>
        <h4 className='card-title text-light'>{title}</h4>

        <div className='d-flex align-items-end gap-2'>
          <p className='text-light fw-bold fs-5'>S/{finalPrice}</p>

          {discountRate && (
            <p className='text-decoration-line-through text-secondary'>
              S/{originalPrice}
            </p>
          )}
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          {[...Array(averageScore)].map((_, index) => (
            <FaStar key={index} className='text-warning fs-5' />
          ))}

          {[...Array(residuaryStar)].map((_, index) => (
            <FaStar key={index} className='text-light fs-5' />
          ))}

          <p className='text-light ps-2 fs-5 m-0'>({countReviews})</p>
        </div>
      </div>
    </div>
  )
}
export default CardProductItem
