import React from "react";
import "../ticker.css";

const Ticker = () => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        <div className="ticker-item">
          <img src="/assets/ticker/lt.png" alt="LingoTalk" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/nmtx.png" alt="Nematix" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/radx.png" alt="RADX Group" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/rise.png" alt="Rise" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/skvl.png" alt="Skilvul" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/yrp.png" alt="YoRipe" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/zizo.png" alt="ZIZO" />
        </div>

        {/* Duplicate the logos for the smooth ticker effect */}
        <div className="ticker-item">
          <img src="/assets/ticker/lt.png" alt="LingoTalk" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/nmtx.png" alt="Nematix" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/radx.png" alt="RADX Group" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/rise.png" alt="Rise" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/skvl.png" alt="Skilvul" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/yrp.png" alt="YoRipe" />
        </div>
        <div className="ticker-item">
          <img src="/assets/ticker/zizo.png" alt="ZIZO" />
        </div>
      </div>
    </div>
  );
};

export default Ticker;
