import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store/store";
import { setTheme } from "../../../app/slices/themeSlice";
import { Dropdown } from "../select/Dropdown";
import { getTranslations } from "../../locales";
import { useAppSelector } from "../../../app/hooks/hooks";




export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.current);
   const t = getTranslations(useAppSelector((state) => state.language.currentLang));

   const themes = [
  {  label: t.theme.white, value: "white" },
  {  label: t.theme.black, value: "black" },
];

  const handleChange = (themeValue: string) => {
    dispatch(setTheme(themeValue));
  };

  return (
    <div >
    <Dropdown
  options={themes}             
  selected={currentTheme}      
  onSelect={handleChange}     
/>
    </div>
  );
};