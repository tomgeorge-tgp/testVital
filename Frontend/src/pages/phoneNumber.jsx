import React from 'react'

const Phonenumber = (props) => {
  return (
    <>
      <div className="phonenumber-container">
        <div className="phonenumber-container1">
          <div className="phonenumber-container2"></div>
          <button className="phonenumber-button button">7</button>
          <button className="phonenumber-button01 button">4</button>
          <button className="phonenumber-button02 button">1</button>
          <button className="phonenumber-button03 button">0</button>
          <button className="phonenumber-button04 button">8</button>
          <button className="phonenumber-button05 button">5</button>
          <button className="phonenumber-button06 button">2</button>
          <button className="phonenumber-button07 button">9</button>
          <button className="phonenumber-button08 button">6</button>
          <button className="phonenumber-button09 button">3</button>
          <span className="phonenumber-text">
            <br></br>
            <br></br>
            <br></br>
          </span>
          <span className="phonenumber-text04">
            <br></br>
            <br></br>
            <br></br>
          </span>
          <span className="phonenumber-text08">
            <br></br>
            <br></br>
            <br></br>
          </span>
          <span className="phonenumber-text12">
            <br></br>
            <br></br>
            <br></br>
          </span>
          <button className="phonenumber-button10 button">Continue</button>
          <span className="phonenumber-text16">
            Please enter the OTP sent to your number
          </span>
          <div className="phonenumber-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M5.27411 13C5.06741 13 4.87445 12.9007 4.74438 12.7363L0.16095 6.97265C-0.0538986 6.70175 -0.0538986 6.29812 0.162445 6.02724H0.16095L4.74438 0.262124C4.87647 0.095151 5.07256 1.04233e-07 5.27411 1.04233e-07H17.3072C17.6855 1.04233e-07 18 0.333087 18 0.733823V12.2659C18 12.6666 17.6855 12.9997 17.3072 12.9997L5.27411 13ZM5.59767 11.5324H16.6163V1.46615H5.59767L1.59765 6.49907L5.59767 11.5324ZM8.42781 9.6615C8.25102 9.6615 8.07192 9.58838 7.93806 9.44645C7.67075 9.16331 7.67075 8.69162 7.93806 8.40847L9.73918 6.49907L7.93806 4.59126C7.67116 4.30855 7.67198 3.83842 7.93806 3.55501V3.55343C8.07409 3.40833 8.25183 3.33838 8.42781 3.33838C8.60461 3.33838 8.78332 3.41093 8.91757 3.55343L10.7187 5.46124L12.5198 3.55527C12.6558 3.40888 12.8345 3.33864 13.0115 3.33864C13.1911 3.33864 13.3686 3.41478 13.4997 3.55182L13.5012 3.5534C13.7685 3.83654 13.7685 4.30823 13.5012 4.59138L11.6986 6.4992L13.5012 8.40859C13.7685 8.69173 13.7685 9.16342 13.5012 9.44657C13.2339 9.72971 12.7886 9.72971 12.5213 9.44657L10.7187 7.53717L8.91757 9.44657C8.78358 9.5885 8.60433 9.66162 8.42781 9.66162L8.42781 9.6615Z"\r\n        fill="#125873" />\r\n</svg>',
              }}
            />
          </div>
          <span className="phonenumber-text17">Exisitng user sign-in</span>
          <div className="phonenumber-html-node1">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path d="M11 2L3 10L11 18" stroke="#125873" stroke-width="3" stroke-linecap="round" />\r\n</svg>',
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .phonenumber-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .phonenumber-container1 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 1024px;
            bottom: 0px;
            height: 600px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: rgba(158, 0, 0, 0);
            border-width: 1px;
            align-content: center;
            justify-content: flex-start;
          }
          .phonenumber-container2 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 1024px;
            height: 32px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #393939;
          }
          .phonenumber-button {
            top: 335px;
            left: 379px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
            border-bottom-left-radius: 10px;
          }
          .phonenumber-button01 {
            top: 282px;
            left: 379px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
          }
          .phonenumber-button02 {
            top: 228px;
            left: 379px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
            border-top-left-radius: 10px;
          }
          .phonenumber-button03 {
            top: 389px;
            left: 466px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .phonenumber-button04 {
            top: 335px;
            left: 467px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
          }
          .phonenumber-button05 {
            top: 282px;
            left: 467px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
          }
          .phonenumber-button06 {
            top: 228px;
            left: 467px;
            color: #125873;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
          }
          .phonenumber-button07 {
            top: 335px;
            color: #125873;
            right: 377px;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
            border-bottom-right-radius: 10px;
          }
          .phonenumber-button08 {
            top: 282px;
            color: #125873;
            right: 377px;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
          }
          .phonenumber-button09 {
            top: 228px;
            color: #125873;
            right: 377px;
            width: 90px;
            height: 55px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #125873;
            border-radius: 0px;
            justify-content: center;
            background-color: Button;
            border-top-right-radius: 10px;
          }
          .phonenumber-text {
            top: 172px;
            left: 583px;
            color: rgb(18, 88, 115);
            width: 61px;
            height: 40px;
            margin: auto;
            display: flex;
            position: absolute;
            font-size: 16px;
            align-items: center;
            font-family: Manrope;
            line-height: 21.86px;
            border-color: #125873;
            border-width: 1px;
            border-radius: 10px;
            justify-content: center;
          }
          .phonenumber-text04 {
            top: 172px;
            left: 514px;
            color: rgb(18, 88, 115);
            width: 61px;
            height: 40px;
            margin: auto;
            display: flex;
            position: absolute;
            font-size: 16px;
            align-items: center;
            font-family: Manrope;
            line-height: 21.86px;
            border-color: #125873;
            border-width: 1px;
            border-radius: 10px;
            justify-content: center;
          }
          .phonenumber-text08 {
            top: 172px;
            left: 445px;
            color: rgb(18, 88, 115);
            width: 61px;
            height: 40px;
            margin: auto;
            display: flex;
            position: absolute;
            font-size: 16px;
            align-items: center;
            font-family: Manrope;
            line-height: 21.86px;
            border-color: #125873;
            border-width: 1px;
            border-radius: 10px;
            justify-content: center;
          }
          .phonenumber-text12 {
            top: 172px;
            left: 376px;
            color: rgb(18, 88, 115);
            width: 61px;
            height: 40px;
            margin: auto;
            display: flex;
            position: absolute;
            font-size: 16px;
            align-items: center;
            font-family: Manrope;
            line-height: 21.86px;
            border-color: #125873;
            border-width: 1px;
            border-radius: 10px;
            justify-content: center;
          }
          .phonenumber-button10 {
            top: 473px;
            left: 389px;
            color: rgb(255, 255, 255);
            width: 245px;
            bottom: -96px;
            height: 50px;
            display: flex;
            position: absolute;
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            align-items: center;
            padding-top: 15px;
            border-width: 0px;
            padding-left: 83px;
            align-content: center;
            border-radius: 10px;
            padding-right: 70px;
            padding-bottom: 15px;
            justify-content: flex-start;
            background-color: rgb(18, 88, 115);
          }
          .phonenumber-text16 {
            top: 118px;
            left: 354px;
            color: rgb(147, 147, 147);
            position: absolute;
          }
          .phonenumber-html-node {
            top: 412px;
            left: 589px;
            position: absolute;
          }
          .phonenumber-text17 {
            top: 64px;
            left: 71px;
            color: rgb(18, 88, 115);
            width: 194px;
            height: 19px;
            position: absolute;
            font-size: 20px;
            font-family: Manrope;
            line-height: 19px;
          }
          .phonenumber-html-node1 {
            top: 64px;
            left: 40px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default Phonenumber
