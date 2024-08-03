import React, { useEffect, useState } from 'react';
import planeImage from '../../Assets/images/plan.png';

const Plane = ({ isCrashed, isGameRunning }) => {
  const [planeClass, setPlaneClass] = useState('');

  useEffect(() => {
    if (isGameRunning) {
      setPlaneClass('vibrate');
    } else if (isCrashed) {
      setPlaneClass('burst');
    } else {
      setPlaneClass('');
    }
  }, [isCrashed, isGameRunning]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div className={planeClass} style={{
        position: 'absolute',
        top: '58%',
        left: '61%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}>
        <img src={planeImage} alt="Plane" style={{ width: '100px' }} />
      </div>
    </div>
  );
};

export default Plane;
