import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import styles from './Cart.module.css';
import { useNavigate } from "react-router-dom";
import { removeItemFromCart, removeFromCartByQuantity } from "../../app/slices/cartSlice";
import { getTranslations } from "../../shared/locales";

export const CartPage: React.FC=()=>{
const user = useAppSelector((state) => state.user);

const cartItems = useAppSelector((state) =>
  state.cart.items.filter((item) => item.userName === user.username)
);
const t = getTranslations(useAppSelector((state) => state.language.currentLang));


const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const sum = cartItems.reduce((sum, item) => sum + item.quantity, 0);
 const navigate =useNavigate();
  const dispatch = useAppDispatch();


   const handleSubmita = (e: FormEvent) => {
     e.preventDefault();
    navigate('/products');
     }

     const handleRemoveFromCartByQuantity = (id: number) => {
        dispatch(removeFromCartByQuantity(id));
     };


       const handleRemoveItemFromCart = (id: number) => {
        dispatch(removeItemFromCart(id));
     };
    return (

       
      <div className={styles['root']} >
        <div className={styles['position']}>
          <div className={styles['flex-column']}>
                     <h4 className={styles['desc-style-font']}>{t.cart.pageTitle}</h4>
                      <p className={styles['desc-style-font']}>{t.cart.totalPrice} {total}€ </p>
                      <p className={styles['desc-style-font']}>{t.cart.totalQuantity}  {sum}</p>
                      </div>
                      </div>
                     
               <div className={styles['content']}>
      {cartItems.map((p) => (
        <div className={styles['list-item']} key={p.id}>
         
          <img className={styles['img-style']} src={p.image} alt={p.title}  />
           <img className={styles['del-img-style']}
           alt="Delete"
            width={30}
            height={30}
        src="/4822a3f7ea26268f9e0a50725c6a24aa.png"
        onClick={() => handleRemoveItemFromCart(p.id)}
                  />
          <h4 className={styles['text-color']}>{p.title}</h4>
         <p className={styles['desc-style']}>{t.productList.price} {p.price}€</p>
                <div className='flex-row'>
             <p className={styles['desc-style']}>{t.cart.quantity} {p.quantity}</p>
                <img
           className="btn-image"
           alt="🛒"
            width={30}
        src="/cart-xmark-svgrepo-com.svg"
       onClick={() => handleRemoveFromCartByQuantity(p.id)}
                  />
           </div>

           
        </div>
      ))}
      
    </div>
    <button className="costumed-btn btn-wide-margin" onClick={(e) => handleSubmita(e)}>{t.products.back}</button>
    </div>
    );
};


