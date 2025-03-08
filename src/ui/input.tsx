import { FC } from 'react';

export const Input: FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <input className="input" type="text" value={value} onChange={(e) => onChange(e.target.value)} />
);
