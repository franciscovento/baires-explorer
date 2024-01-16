import { useState } from 'react';

const useLocalStorage = (key:string, initialValue:any) => {
  // Obtener el valor almacenado en localStorage al inicio
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Estado para almacenar el valor actual
  const [value, setValue] = useState(initial);

  // Función para actualizar el valor y almacenarlo en localStorage
  const setStoredValue = (newValue:any) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

export default useLocalStorage;