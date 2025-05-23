
import React, { FormEvent, useEffect, useState } from 'react';

import { fetchProducts } from './ProductService';
import './ProductList.css';
import { Product } from './types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { addToCart } from '../../app/slices/cartSlice';
import { getTranslations } from '../../shared/locales';


export const ProductListPage: React.FC=()=>{

   const [products, setProducts] = useState<Product[]>([]);
   const navigate =useNavigate();
   const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const [message, setMessage] = useState<string | null>(null);
    const [selectedProId, setSelectedProId] = useState<number | null >(null);
    const t = getTranslations(useAppSelector((state) => state.language.currentLang));
  
 useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() =>console.log("Uspesno ucitavanje.") );
  }, []);
 


const handleSubmit = (e: FormEvent,id:number) => {
  e.preventDefault();
 navigate('/products/'+id);
  }



const handleAddToCart = (product: Product) => {
  
   dispatch(addToCart({product,userName: user.username}));
   setMessage(t.productList.added);
   setSelectedProId(product.id)
    setTimeout(() =>{setSelectedProId(product.id);
                    setMessage(null);
    } , 3000);
  
};




    return (
       <div className='content-lp'>
      {products.map((p) => (
        <div className='list-item-lp' key={p.id}>
          <img className='img-style' src={p.image} alt={p.title}  />
        
          <h4 className='text-color'>{p.title}</h4>
           <p className='desc-style'>{p.description}</p>
           <div className="content-row">
             <p className='desc-style'>{t.productList.price} {p.price} €</p>
             <img
           className="btn-image"
           alt="🛒"
            width={24}
        src="/basket-svgrepo-com.svg"
       onClick={() => handleAddToCart(p)}
                  />
                  {(message &&selectedProId===p.id) && <div className="success-message">{message}</div>}
           </div>
           <button className="costumed-btn btn-default-margin" onClick={(e) => handleSubmit(e, p.id)}>{t.productList.details}</button>
        </div>
      ))}
    </div>
    );
};