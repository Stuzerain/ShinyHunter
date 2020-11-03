import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Friends.css';

const Friends = ({friend}) => {

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  return (
    <div className={styles.friendEntry}>
      <img className={`${styles.avatar} ${styles[friend.favRegion]}`}
       src={friend.avatar}></img>


      <div className={styles.text}>
        <h3>{friend.name}</h3>
        <p>Your friend {friend.name} is currently hunting {capitalize(friend.hunting)} and is on number   {friend.huntingNum}</p>
        <button>Wish them luck!</button>  <button>Suggest Trade</button>
      </div>

      <img className={styles.huntingSprite} src={friend.huntingSprite}></img>
    </div>
  )
}

export default Friends;