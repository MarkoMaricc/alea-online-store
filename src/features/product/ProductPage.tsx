import { Product } from "./types";
import './Product.css';
import { useNavigate, useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { fetchProductById } from "./ProductService";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { addToCart } from "../../app/slices/cartSlice";
import { getTranslations } from "../../shared/locales";



const defaultProduct: Product = {
  id: 0,
  title: 'Nepoznat proizvod',
  price: 0,
  description: 'Opis nije dostupan.',
  category: 'nepoznato',
  image: '/placeholder.png',
  rating: {
    rate: 0,
    count: 0,
  },
};



export const ProductPage: React.FC=()=>{
const { id } = useParams<{ id: string }>();
 const [pro, setProduct] = useState<Product>(defaultProduct);
const dispatch = useAppDispatch();
 const navigate =useNavigate();
 const user = useAppSelector((state) => state.user);
   const [message, setMessage] = useState<string | null>(null);
     const [selectedProId, setSelectedProId] = useState<number | null >(null);
     const t = getTranslations(useAppSelector((state) => state.language.currentLang));

  const handleSubmita = (e: FormEvent) => {
   e.preventDefault();
  navigate('/products');
   }
 
 const handleAddToCart = (product: Product) => {
   dispatch(addToCart({product,userName: user.username}));
      setMessage(t.productList.added);
      setSelectedProId(product.id)
       setTimeout(() =>{setSelectedProId(product.id);
                       setMessage(null);
       } , 3000);
 };
 


  useEffect(() => {
     fetchProductById(id)
       .then((data) => setProduct(data))
       .catch((err) => console.error(err))
       .finally(() =>console.log("Uspjesno ucitavanje.") );
   }, []);

    return (

       
      <div className='content'>
        <div className='left-side'>
         <img className='img-style-pro' src={pro.image} alt={pro.title}  />
          </div>
          <div className='right-side-1'>
  <div className='right-side' key={pro.id}>
    <h4>{pro.title}</h4>
    <div className='flex-row'>
     <p className="desc-style-pro " > {t.products.category}  {pro.category}</p>
          </div>
          
          
                     <p className='desc-style-pro'>{pro.description}</p>
                    <div className="rating-box">
  <div className="desc-style-pro">
    <p>❤️ {pro.rating.count} {t.products.voteCount}</p>
  </div>
  <div className="desc-style-pro">
    <p>⭐{pro.rating.rate} {t.products.rate}</p>
  </div>
   <div className='content-price'>
             <p className="desc-style-pro">{t.productList.price} {pro.price}€</p>
             <img
           className="btn-image"
           alt="🛒"
            width={40}
        src="/basket-svgrepo-com.svg"
        onClick={() => handleAddToCart(pro)}
                  />
                   {(message &&selectedProId===pro.id) && <div className="success-message-pro">{message}</div>}
                    </div>
</div>
         

      </div>
      
      </div>
         
        
          
        
     <button className="costumed-btn btn-wide-margin" onClick={(e) => handleSubmita(e)}>{t.products.back}</button>
    </div>
    );
};


