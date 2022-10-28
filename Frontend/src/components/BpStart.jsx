import React from 'react'

import PropTypes from 'prop-types';
import "./style/bp_start.css";
function Bpstart(props){
    console.log(props);
  return (
    <>
      <div className="bpstart-container">
        <div className="bpstart-container1">
          <div className="bpstart-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="237" height="199" viewBox="0 0 237 199" fill="none" xmlns="http://www.w3.org/2000/svg"\r\n    xmlns:xlink="http://www.w3.org/1999/xlink">\r\n    <mask id="mask0_419_1605" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="237" height="199">\r\n        <rect y="0.542969" width="236.377" height="198.419" fill="#D9D9D9" />\r\n    </mask>\r\n    <g mask="url(#mask0_419_1605)">\r\n        <rect x="-212.223" y="-28.7852" width="459.814" height="258.807" fill="url(#pattern0)" />\r\n    </g>\r\n    <defs>\r\n        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">\r\n            <use xlink:href="#image0_419_1605" transform="scale(0.00187617 0.00333333)" />\r\n        </pattern>\r\n        <image id="image0_419_1605" width="533" height="300"\r\n            xlink:href="data:image/jpeg;base64,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" />\r\n    </defs>\r\n</svg>',
              }}
            />
          </div>
          <div className="bpstart-html-node1">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="237" height="199" viewBox="0 0 237 199" fill="none" xmlns="http://www.w3.org/2000/svg"\r\n    xmlns:xlink="http://www.w3.org/1999/xlink">\r\n    <mask id="mask0_419_1605" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="237" height="199">\r\n        <rect y="0.542969" width="236.377" height="198.419" fill="#D9D9D9" />\r\n    </mask>\r\n    <g mask="url(#mask0_419_1605)">\r\n        <rect x="-212.223" y="-28.7852" width="459.814" height="258.807" fill="url(#pattern0)" />\r\n    </g>\r\n    <defs>\r\n        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">\r\n            <use xlink:href="#image0_419_1605" transform="scale(0.00187617 0.00333333)" />\r\n        </pattern>\r\n        <image id="image0_419_1605" width="533" height="300"\r\n            xlink:href="data:image/jpeg;base64,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" />\r\n    </defs>\r\n</svg>',
              }}
            />
          </div>
          <div className="bpstart-html-node2">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="237" height="199" viewBox="0 0 237 199" fill="none" xmlns="http://www.w3.org/2000/svg"\r\n    xmlns:xlink="http://www.w3.org/1999/xlink">\r\n    <mask id="mask0_419_1605" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="237" height="199">\r\n        <rect y="0.542969" width="236.377" height="198.419" fill="#D9D9D9" />\r\n    </mask>\r\n    <g mask="url(#mask0_419_1605)">\r\n        <rect x="-212.223" y="-28.7852" width="459.814" height="258.807" fill="url(#pattern0)" />\r\n    </g>\r\n    <defs>\r\n        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">\r\n            <use xlink:href="#image0_419_1605" transform="scale(0.00187617 0.00333333)" />\r\n        </pattern>\r\n        <image id="image0_419_1605" width="533" height="300"\r\n            xlink:href="data:image/jpeg;base64,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" />\r\n    </defs>\r\n</svg>',
              }}
            />
          </div>
          <div className="bpstart-html-node3">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <g filter="url(#filter0_d_419_1579)">\r\n        <rect x="20.7734" y="10.832" width="43.4388" height="43.4388" rx="5" fill="white" />\r\n    </g>\r\n    <path\r\n        d="M46.9788 35.4602C46.6263 35.4602 46.3007 35.6482 46.1243 35.9536C45.9481 36.2588 45.9481 36.6349 46.1243 36.9401C46.3007 37.2453 46.6263 37.4333 46.9788 37.4333C48.5711 37.4333 50.0424 36.584 50.8385 35.205C51.6347 33.8259 51.6347 32.1271 50.8385 30.7478C50.0424 29.3689 48.5711 28.5195 46.9788 28.5195C46.6263 28.5195 46.3007 28.7076 46.1243 29.0128C45.9481 29.318 45.9481 29.6941 46.1243 29.9992C46.3007 30.3046 46.6263 30.4927 46.9788 30.4927C47.8661 30.4927 48.686 30.966 49.1297 31.7345C49.5734 32.5028 49.5734 33.4497 49.1297 34.2181C48.686 34.9866 47.8661 35.4599 46.9788 35.4599V35.4602Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M37.7438 37.6882L44.1217 42.1722C44.3199 42.3114 44.5625 42.373 44.803 42.345C45.0437 42.3169 45.2656 42.2015 45.4265 42.0203C45.5873 41.8393 45.6761 41.6053 45.6756 41.3631V24.5915C45.6754 24.3494 45.5865 24.116 45.4254 23.9355C45.2644 23.7548 45.0426 23.6397 44.8023 23.612C44.562 23.5842 44.3197 23.6457 44.1217 23.7849L37.7438 28.2663H34.5375C34.2758 28.2663 34.0248 28.3702 33.8398 28.5554C33.6547 28.7403 33.5508 28.9913 33.5508 29.253V36.7016C33.5508 36.9632 33.6547 37.2143 33.8398 37.3992C34.0248 37.5843 34.2758 37.6882 34.5375 37.6882L37.7438 37.6882ZM35.5241 30.2396H38.0891C38.3613 30.2388 38.6209 30.1254 38.8067 29.9263L43.7025 26.4882V39.4664L38.8116 36.0283C38.6257 35.8293 38.366 35.7159 38.0938 35.715H35.5312L35.5241 30.2396Z"\r\n        fill="#125873" />\r\n    <defs>\r\n        <filter id="filter0_d_419_1579" x="0.773438" y="0.832031" width="83.4375" height="83.4375"\r\n            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\r\n            <feFlood flood-opacity="0" result="BackgroundImageFix" />\r\n            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"\r\n                result="hardAlpha" />\r\n            <feOffset dy="10" />\r\n            <feGaussianBlur stdDeviation="10" />\r\n            <feComposite in2="hardAlpha" operator="out" />\r\n            <feColorMatrix type="matrix" values="0 0 0 0 0.0187153 0 0 0 0 0.236739 0 0 0 0 0.320833 0 0 0 0.16 0" />\r\n            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_419_1579" />\r\n            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_419_1579" result="shape" />\r\n        </filter>\r\n    </defs>\r\n</svg>',
              }}
            />
          </div>
          <button className="bpstart-button button"
          onClick={props.onExitClick}>Exit</button>
          <button className="bpstart-button1 button" 
          onClick={props.onContinueClick}>
            Start
          </button>
          <span className="bpstart-text">{props.setinitateTestPopUp}</span>
        </div>
      </div>
     
    </>
  )
}



export default Bpstart