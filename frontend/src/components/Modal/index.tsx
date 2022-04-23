import './styles.css';
import iconClose from '../../assets/images/close-image.png';

type Props = {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
};

export const Modal = ({ children, visible, onClose }: Props) => {
  return visible ? (
    <div className="modal-container">
      <div className="card">
        <div className="close-area">
          <h2>Sugerir nova palavra</h2>
          <img src={iconClose} alt="fechar" onClick={onClose} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};
