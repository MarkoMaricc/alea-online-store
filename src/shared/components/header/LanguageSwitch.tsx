import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store/store";
import { setLanguage } from "../../../app/slices/languageSlice";
import { Dropdown } from "../select/Dropdown";
import { getTranslations } from "../../locales";
import { useAppSelector } from "../../../app/hooks/hooks";







export const LanguageSwitch = () => {
     const t = getTranslations(useAppSelector((state) => state.language.currentLang));
  const dispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.language.currentLang);

  const handleChange = (langValue: string) => {
    dispatch(setLanguage(langValue as "en" | "sr"));
  };
const languages = [
  { label: t.language.en, value: "en" },
  { label: t.language.sr, value: "sr" },
];
  return (
    <div>
      <Dropdown
        options={languages}
        selected={currentLang}
        onSelect={handleChange}
      />
    </div>
  );
};
