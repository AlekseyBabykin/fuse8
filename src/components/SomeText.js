import React from "react";
import "../style/SomeText.css";

const SomeText = ({ items }) => {
  if (!items) {
    return <div>Либоя думаю / либо вы ничего не ввели</div>;
  }
  return (
    <div className="containerSomeText">
      <div className="containerSomeTextFirst">
        {items.slice(0, 2).map((item, index) => (
          <a href={item.url} target="_blank">
            <div key={index} className={`item${index + 1}`}>
              <div>{item.value}</div>
              <div className="containerDataId">
                <div>{item.id}</div>
                <div className="date1">{item.created_at.slice(0, 11)}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="containerSomeTextSecond">
        {items.slice(2, 8).map((item, index) => (
          <a href={item.url} target="_blank">
            <div key={index} className={`item${3 + index}`}>
              <div>{item.value}</div>
              <div className="containerDataId">
                <div>{item.id}</div>
                <div className="date2">{item.created_at.slice(0, 11)}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SomeText;
