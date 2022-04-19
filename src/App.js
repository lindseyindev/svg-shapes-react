import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [dayMode, setDayMode] = useState(true);
  const [animationsOn, setAnimationsOn] = useState(true);

  return (
    <>
      <div className="App">
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="450px"
          height="100px"
          viewBox="0 0 450 100"
        >
          <defs>
            <pattern
              id="image"
              x="-40"
              y="0"
              patternUnits="userSpaceOnUse"
              height="450px"
              width="800px"
            >
              <image
                x="0"
                y="0"
                height="100px"
                width="450px"
                href="https://gyazo.com/d4ea395e2630a23ef1d7028dd72a383b.jpg"
              ></image>
            </pattern>
          </defs>
          <defs xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="image2"
              patternUnits="objectBoundingBox"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <image
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref={
                  dayMode
                    ? "http://www.boogdesign.com/examples/svg/daisy-grass-repeating-background.jpg"
                    : "https://live.staticflickr.com/7347/8719349462_91ba8d69ff_b.jpg"
                }
                x="0"
                y="-.5"
                width="2"
                height="2"
              />
            </pattern>
          </defs>
          <rect
            className={animationsOn ? "rectangle" : ""}
            x="10"
            y="5"
            fill="#89937C"
            stroke="black"
            width="90"
            height="90"
          />
          <circle fill="url(#image)" stroke="black" cx="170" cy="50" r="45" />
          <polygon
            fill="#715B64"
            stroke="black"
            className={animationsOn ? "star" : ""}
            points="279,5 294,35 328,40 303,62 309,94 
279,79 248,94 254,62 230,39 263,35 "
          />
          <line fill="none" stroke="black" x1="410" y1="95" x2="440" y2="6" />
          <line fill="none" stroke="black" x1="360" y1="6" x2="360" y2="95" />
          <ellipse
            fill="url(#image2)"
            cx="50"
            cy="150"
            rx="50"
            ry="100"
            stroke="black"
          >
            {animationsOn ? (
              <animateTransform
                attributeName="transform"
                type="scale"
                from="1 1"
                to="2 2"
                begin="0s"
                dur="10s"
                repeatCount="indefinite"
              />
            ) : null}
          </ellipse>
          <text
            x="20"
            y="180"
            text-anchor="middle"
            fill="#EDCB96"
            font-size="30"
            class="mode-text"
          >
            {dayMode ? "Day" : "Night"}
          </text>
        </svg>
      </div>
      <div className="button-container">
      <button
        className="mode-button"
        type="button"
        onClick={(e) => setDayMode(!dayMode)}
      >
        {dayMode ? "Night Mode" : "Day Mode"}
      </button>
      <button
        className="mode-button"
        type="button"
        onClick={(e) => setAnimationsOn(!animationsOn)}
      >
        {animationsOn ? "Disable Animations" : "Enable Animations"}
      </button>
      </div>
    </>
  );
}
