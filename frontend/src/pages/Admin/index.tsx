import { useEffect, useState } from 'react';
import { Word } from 'types';
import { requestBackend } from 'utils/requests';
import './styles.css';

export const Admin = () => {
  const [suggestedWords, setSuggestedWords] = useState<Word[]>();

  useEffect(() => {
    requestBackend({ url: '/words/suggestions', method: 'GET' }).then((res) =>
      setSuggestedWords(res.data)
    );
  }, []);

  return (
    <div className="suggestions-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>ACEITAR</th>
            <th>RECUSAR</th>
          </tr>
        </thead>
        <tbody>
          {suggestedWords?.map((word) => (
            <tr key={word.id}>
              <td>{word.id}</td>
              <td>{word.name}</td>
              <td>ACEITAR</td>
              <td>RECUSAR</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
