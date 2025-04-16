import { useRef } from 'react';
import Draggable from 'react-draggable';


// 初期位置を計算（横一列に少し重なるように）
const getDefaultPosition = (id) => {
  const savedPos = localStorage.getItem(`imgPos-${id}`);
  if (savedPos) {
    return JSON.parse(savedPos);
  }
  
  const overlapOffset = 200;
  const x = 200 + (id - 1) * overlapOffset;
  const y = 100;
  return { x, y };
};

const DraggableImg = ({ id, imageUrl, resetFlag }) => {
  const nodeRef = useRef(null); 
  const initialPos = getDefaultPosition(id);

  // ドラッグ終了時に位置を保存
  const handleStop = (e, data) => {
    localStorage.setItem(`imgPos-${id}`, JSON.stringify({
      x: data.x,
      y: data.y
    }));
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds=".about-scrapBook"
      defaultPosition={initialPos}
      onStop={handleStop}
      key={resetFlag} // resetFlagが変わるとコンポーネントが再マウントされる
    >
      <div
        ref={nodeRef}
        className={`scrapbook-image img-${id}`}
        style={{
          position: 'absolute',
          cursor: 'grab',
          transform: `rotate(${Math.random() * 10 - 5}deg)`,
          zIndex: 1,
        }}
      >
        <img
          src={imageUrl}
          alt={`Scrapbook ${id}`}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
    </Draggable>
  );
};

// Resetボタン付きのラッパーコンポーネント
export const DraggableImages = ({ images }) => {
  const [resetFlag, setResetFlag] = useState(false);

  const handleReset = () => {
    // localStorageからすべての位置データを削除
    images.forEach((_, id) => {
      localStorage.removeItem(`imgPos-${id + 1}`);
    });
    // resetFlagを更新してコンポーネントを再マウント
    setResetFlag(prev => !prev);
  };

  return (
    <div className="scrapbook-container">
      {images.map((imageUrl, index) => (
        <DraggableImg 
          key={`${index}-${resetFlag}`}
          id={index + 1} 
          imageUrl={imageUrl}
          resetFlag={resetFlag}
        />
      ))}
      <button 
        onClick={handleReset}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#ff4d4d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        Reset Positions
      </button>
    </div>
  );
};

export default DraggableImg;

// 使用例
// import { DraggableImages } from './DraggableImg';
// <DraggableImages images={[BOOK1, BOOK2, BOOK3, BOOK4, BOOK5, BOOK6, BOOK7]} />