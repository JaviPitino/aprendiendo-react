import { useState } from "react";

export function TwitterFollowCard({ userName = 'unknown', name, initialIsFollowing }) {

  const [isFollow, setIsFollow] = useState(initialIsFollowing)

  const text = isFollow ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollow ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  const handleClick = () => { 
    setIsFollow(!isFollow)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="avatar"
        />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-info-name">{name}</strong>
          <span className="tw-followCard-info-username">@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>
        <span className="tw-followCard-text" >{text}</span>
          <span className="tw-followCard-stopFollow" >Dejar de seguir</span>
        </button>
      </aside>
    </article> 
  );
}
