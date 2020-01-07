import React from 'react';

function About() {
  const about = '五十鈴川';
  return <div className='about'>
    <svg className='svg-about' width="400" height="200" viewBox="30 -10 40 40">
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="10%" stopColor="#58B2DC" />
          <stop offset="95%" stopColor="#81C7D4" />
        </linearGradient>
        <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
          <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="2.5s"
              type="translate"
              from="0,0"
              to="40,0"
              repeatCount="indefinite" />
          </path>
        </pattern>
      </defs>
      <text textAnchor="middle" x="50" y="15" fill="url(#gradient)" fillOpacity="0.5">{about}</text>
      <text textAnchor="middle" x="50" y="15" fill="url(#wave)" fillOpacity="0.8">{about}</text>
    </svg>
  </div>
}

export default About 