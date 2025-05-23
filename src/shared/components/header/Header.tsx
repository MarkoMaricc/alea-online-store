import { useNavigate } from "react-router-dom";
import { ThemeSwitch } from "./ThemeSwitch";
import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { clearUser } from "../../../app/slices/userSlice";
import './Header.css';
import { LanguageSwitch } from "./LanguageSwitch";
import { getTranslations } from "../../locales";


export const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.user.login);
   const t = getTranslations(useAppSelector((state) => state.language.currentLang));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(clearUser());
    navigate('/login');
  };

  const handleCart = (e: FormEvent) => {
    e.preventDefault();
    navigate('/cart');
  };

  const handleHome = (e: FormEvent) => {
    e.preventDefault();
    navigate('/products');
  };

  return (
    <header className="header">
      <div className="flex-row align-it-gap">
        {login ? (
          <>
            <h1 className="title-hover" onClick={handleHome}>{t.header.title}</h1>
            <img
              onClick={handleHome}
              className="img-hover"
              alt="🛒"
              width={28}
              src="/store.png"
            />
          </>
        ) : (
          <>
            <h1 className="title">{t.header.title}</h1>
            <img
              alt="🛒"
              width={28}
              src="/store.png"
            />
          </>
        )}
      </div>

      {login && <h1 className="title-hover" onClick={handleCart}>{t.header.cart}</h1>}

      <ThemeSwitch />
      <LanguageSwitch />

      {login && (
        <img
          className="img-hover"
          alt={t.header.logoutAlt}
          width={50}
          onClick={handleSubmit}
          src="/icons8-logout-64.png"
        />
      )}
    </header>
  );
};
