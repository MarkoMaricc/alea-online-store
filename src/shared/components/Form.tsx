


export const Form: React.FC<{ onSubmit: (e: React.FormEvent<HTMLFormElement>) => void, children: React.ReactNode }> = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} >
      {children}
    </form>
  );
};