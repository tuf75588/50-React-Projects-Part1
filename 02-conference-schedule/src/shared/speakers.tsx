import React from 'react';
import faker from 'faker';

function Speakers() {
  const numSpeakers = new Array(8).fill(0);
  return (
    <div className="center-me">
      {numSpeakers.map((speaker: string) => (
        <div className="Person" key={speaker}>
          <img src={faker.image.avatar()} alt="avatar" className="Avatar" />
          <strong style={{ fontSize: '18px' }}>{faker.name.firstName()} {faker.name.lastName()} </strong>
          <em style={{ color: '#444', display: 'inline-block', fontSize: '14px', height: 45 }}>{faker.name.jobTitle()}</em>
        </div>
      ))}
    </div>
  )
}
export default Speakers;