import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 10px;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`;

const ProductTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.2em;
`;

const ProductPrice = styled.p`
  color: #888;
  font-size: 1em;
`;

const ProductDescription = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #ddd;
  font-size: 0.9em;
  color: #555;
`;

const BuyNowButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 300px;
  z-index: 1000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h3`
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #5a6268;
  }
`;

const products = [
  { id: 1, title: 'Baseball Cap', price: 'Rs225.00', description: 'A comfortable baseball cap for everyday wear.', image: '/images/Baseball_cap.jpg' },
  { id: 2, title: 'Summer Hat', price: 'Rs330.00', description: 'A stylish summer hat perfect for sunny days.', image: '/images/pexels-photo-1124465.jpeg' },
  { id: 3, title: 'Winter Beanie', price: 'Rs220.00', description: 'A warm winter beanie to keep you cozy.', image: '/images/518x6PJKgkL._AC_UY1100_.jpg' },
  { id: 4, title: 'Sun Hat', price: 'Rs335.00', description: 'A wide-brimmed sun hat to protect you from the sun.', image: '/images/Young_Woman_in_Sun_Hat.jpg' },
  { id: 5, title: 'Fedora', price: 'Rs240.00', description: 'A classic fedora for a touch of elegance.', image: '/images/634e33b65bcf8908f84136c8-womens-bucket-hat-cotton-packable.jpg' },
  { id: 6, title: 'Cowboy Hat', price: 'Rs345.00', description: 'A rugged cowboy hat for the adventurous.', image: '/images/Hollywood-Copper-Leather-Cowboy-Hat-Mens-FW23-American-Hat-Makers_1.webp' },
  { id: 7, title: 'Top Hat', price: 'Rs550.00', description: 'A sophisticated top hat for formal occasions.', image: '/images/65385d3f94cc626b4404f79d-belfry-top-hat-theater-quality-100-wool.jpg' },
  { id: 8, title: 'Bucket Hat', price: 'Rs422.00', description: 'A casual bucket hat for a laid-back look.', image: '/images/4164K5UWmOL._AC_UY1100_.jpg' },
  { id: 9, title: 'Trilby', price: 'Rs328.00', description: 'A trendy trilby for a modern style.', image: '/images/images.jpg' },
  { id: 10, title: 'Flat Cap', price: 'Rs226.00', description: 'A traditional flat cap for a vintage appeal.', image: '/images/4350.webp' },
];

const ProductList = ({ searchQuery }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    product: '',
  });

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (id) => {
    setSelectedProductId(selectedProductId === id ? null : id);
  };

  const handleBuyNowClick = (productTitle) => {
    setFormData({ ...formData, product: productTitle });
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const customReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };
  
    const cleanedFormData = JSON.stringify(formData, customReplacer());
  
    
    emailjs.send('service_wygujro', 'template_3e2efh2', JSON.parse(cleanedFormData), 'YIFTUbjHt4302c4I2')
      .then((result) => {
          console.log(result.text);
          setShowForm(false);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <>
      <ProductContainer>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} onClick={() => handleProductClick(product.id)}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            {selectedProductId === product.id && (
              <>
                <ProductDescription>{product.description}</ProductDescription>
                <BuyNowButton onClick={() => handleBuyNowClick(product.title)}>Buy Now</BuyNowButton>
              </>
            )}
          </ProductCard>
        ))}
      </ProductContainer>
      {showForm && (
        <FormContainer>
          <Form onSubmit={handleFormSubmit}>
            <FormTitle>Buy Now</FormTitle>
            <FormGroup>
              <Label>Name:</Label>
              <Input type="text" name="name" value={formData.name} onChange={handleFormChange} required />
            </FormGroup>
            <FormGroup>
              <Label>Email:</Label>
              <Input type="email" name="email" value={formData.email} onChange={handleFormChange} required />
            </FormGroup>
            <FormGroup>
              <Label>Address:</Label>
              <Input type="text" name="address" value={formData.address} onChange={handleFormChange} required />
            </FormGroup>
            <FormGroup>
              <Label>Product:</Label>
              <Input type="text" name="product" value={formData.product} readOnly />
            </FormGroup>
            <SubmitButton type="submit">Submit</SubmitButton>
            <CancelButton type="button" onClick={() => setShowForm(false)}>Cancel</CancelButton>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default ProductList;
