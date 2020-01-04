import React from "react";
import play from "./play-button-arrowhead.svg";
// import pause from "./pause-button.svg";
import arrow from "./sort-down.svg";

function clicks() {
  const menu = document.getElementById("list");
  if (menu.style.display === "flex") menu.style.display = "none";
  else menu.style.display = "flex";

  const arrow = document.getElementById("arrow");
  if (arrow.style.transform === "rotate(180deg)")
    arrow.style.transform = "rotate(0deg)";
  else arrow.style.transform = "rotate(180deg)";
}

function Search(props) {
  return (
    <section id="search-bar">
      <form className="input-bar">
        <label id="enter">Enter Text to be played:</label>
        <input type="text" onChange={props.onSearchChange} />
        <button onClick={props.onSubmit} className="play-pause">
          Speech
          <img
            src={play}
            alt="play"
            style={{ width: "13px", height: "auto" }}
          />
        </button>
      </form>
      <div className="dropdown">
        <button onClick={clicks} className="dropbtn">
          Voice Options
          <img
            src={arrow}
            alt="down"
            id="arrow"
            style={{ width: "13px", height: "auto" }}
          />
        </button>
        <div className="drop-down-content">
          <ul id="list">
            {props.voiceList.map((obj, index) => {
              return (
                <button
                  onClick={() => {
                    props.speech.setLanguage(obj.lang);
                    props.speech.setVoice(obj.name);
                  }}
                  href="#"
                  key={index}
                >
                  {obj.name}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Search;
