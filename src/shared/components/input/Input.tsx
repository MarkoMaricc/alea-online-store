import { ChangeEvent, FC, useState } from 'react'
import './Input.css';

interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password'
  label?: string
  value?: string | number
  name?: string
  placeholder?: string
  error?: string | null
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({
 type = 'text',
  label = '',
  value = '',
  name = '',
  placeholder = '',
  error = null,
  disabled = false,
  onChange = () => {}, 
}) => {
   const [showPassword, setShowPassword] = useState<boolean>(false);
     const isPassword = type === 'password';
    const currentType = isPassword && showPassword ? 'text' : type;




  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
       className="custom-input"
        type={currentType}
        id={name}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    {isPassword && (
  <img
    className="password-btn"
    width="24"
    src={showPassword ? "/eye-hide-svgrepo-com.svg" : "/eye-svgrepo-com.svg"}
    alt={showPassword ? "Hide password" : "Show password"}
    onClick={() => setShowPassword(prev => !prev)}
  />
)}
      
      {error && <p className="error">{error}</p>}
    </div>
  )
}

