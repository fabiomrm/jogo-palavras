import { useEffect, useState } from 'react';
import { Word } from 'types';
import { requestBackend } from 'utils/requests';
import CheckIcon from '../../assets/images/check-icon.png';
import WrongIcon from '../../assets/images/wrong-icon.png';
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
      <table className="suggestions-table">
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
              <td>
                <img src={CheckIcon} alt="aceitar" className="icon-correct" />
              </td>
              <td>
                <img src={WrongIcon} alt="recusar" className="icon-wrong" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
