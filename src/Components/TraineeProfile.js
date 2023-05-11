import React, { useState } from 'react';
import TraineeProfileModal from './TraineeProfileModal';

{/* This hover will be used in the coach page */ }
const TraineeProfile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <h1>Trainee Profile</h1>
        <p>Name: Peter Parker</p>
        <p>Age: 25</p>
        <p>Email: spider@man.com</p>
        <p>Body Type: Athletic</p>
        <p>About: Trying to live as healthy as I can.</p>
      </div>
      <div>
        <h2>This will be in the coach page</h2>

        {/* This hover will be used in the coach page */}
        <p
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover over me to show the Trainee Profile Modal
        </p>
        {showModal && <TraineeProfileModal />}
      </div>
    </>
  );
};

export default TraineeProfile;