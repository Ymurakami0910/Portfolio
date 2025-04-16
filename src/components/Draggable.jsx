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

const DraggableImg = ({ id, imageUrl }) => {
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

export default DraggableImg;