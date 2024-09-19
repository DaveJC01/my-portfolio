import { useEffect, useState } from 'react';

const DecodingText: React.FC = () => {
  const [text, setText] = useState('Jean Carlos David');
  const originalText = 'Jean Carlos David';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let interval: NodeJS.Timeout;

  useEffect(() => {
    let iteration = 0;

    const startDecoding = () => {
      iteration = 0; // Reiniciar la iteración
      interval = setInterval(() => {
        setText((prev) =>
          prev
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join('')
        );

        if (iteration >= originalText.length) {
          clearInterval(interval);
          setTimeout(startDecoding, 3000); // Espera 3 segundo antes de reiniciar
        }

        iteration += 1 / 3;
      }, 30);
    };

    startDecoding();

    return () => clearInterval(interval);
  }, []);

  return <h1>{text}</h1>;
};

export default DecodingText;
