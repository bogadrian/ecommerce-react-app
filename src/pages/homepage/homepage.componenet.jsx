import React, { Profiler } from 'react';
import './homepage.style.scss';
import Directory from '../../componenets/directory/directory.component';

const HomePage = () => {
  return (
    <div className="homepage">
      <Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log(id, phase, actualDuration);
        }}
      >
        <Directory />
      </Profiler>
    </div>
  );
};

export default HomePage;
