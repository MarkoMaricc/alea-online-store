import { useState, ChangeEvent } from 'react';

type Rule =
  | { rule: 'required'; message: string }
  | { rule: 'minLength'; value: number; message: string }
  | { rule: 'number'; message: string }
  | { rule: 'regex'; value: RegExp; message: string }
  | { rule: 'custom'; validate: (value: string) => boolean; message: string };

const useInput = (initialValue: string, rules: Rule[] = []) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(null); 
  };

  const validate = () => {
    for (const rule of rules) {
      if (rule.rule === 'required' && !value.trim()) {
        setError(rule.message);
        return false;
      }
      if (rule.rule === 'minLength' && value.length < rule.value) {
        setError(rule.message);
        return false;
      }
      if (rule.rule === 'regex' && !rule.value.test(value)) {
        setError(rule.message);
        return false;
      }
      if (rule.rule === 'custom' && !rule.validate(value)) {
        setError(rule.message);
        return false;
      }
    }

    setError(null);
    return true;
  };

  return {
    value,
    error,
    onChange: handleChange,
    setError,
    validate,
  };
};

export default useInput;
