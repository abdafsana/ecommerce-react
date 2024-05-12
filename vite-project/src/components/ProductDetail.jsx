import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../services/api'; 

function ProductDetail() {
  const { id } = useParams(); 
  const { data: product, error, isLoading } = useGetProductByIdQuery(id); 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>; 
  if (!product) return <div>No product found</div>; 

  return (
    <div className='shoppingcart'>
      <h1>{product.name}</h1>
      <div>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount Percentage: %{product.discountPercentage}</p>
    </div>
  );
}

export default ProductDetail;
