// src/components/TraineeProfileModal.js
import React from 'react';

const TraineeProfileModal = ({ trainee }) => {
  // Placeholder data for now
  const placeholderTrainee = {
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com',
    bodyType: 'Athletic',
    about: 'I love working out and staying fit.',
    imageURL: 'https://via.placeholder.com/150'
  };

  const { name, age, email, bodyType, about, imageURL } = trainee || placeholderTrainee;

  const greenColor = '#198754'; // Bootstrap success color

  return (
    <div
      className="card"
      style={{
        backgroundColor: 'black',
        color: greenColor,
        position: 'relative',
        width: 'fit-content',
        minWidth: '350px',
        padding: '10px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <div className="card-body d-flex flex-column">
        <div className="row">
          <div className="col-4">
            <img src={imageURL} className="rounded-circle" alt="Trainee" />
          </div>
          <div className="col-8">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Body Type: {bodyType}</p>
            <p>About: {about}</p>
          </div>
        </div>
        <div className="mt-auto">
          <button
            type="button"
            className="btn btn-success"
            style={{ alignSelf: 'flex-end' }}
          >
            Go to Trainee Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TraineeProfileModal;