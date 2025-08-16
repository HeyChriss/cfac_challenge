import React from 'react';
import '../../styles/NewsBar.css';

const NewsBar = () => {
  const newsItems = [
    "Spring Theatre Season Opens March 15th - Don't Miss Our Latest Productions!",
    "Music Department Wins Regional Competition - Congratulations to Our Students!",
    "Student Art Exhibition Now Open in the Main Gallery Through April 30th",
    "Communications Students Launch New Podcast Series - Listen Now!"
  ];

  return (
    <div className="news-bar">
      <div className="news-bar-container">
        <div className="news-content">
          {newsItems.map((news, index) => (
            <span key={index} className="news-item">
              {news}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBar;
