import React from 'react';

const WebcamListItem = ({
  w,
  updateSelectedWebcam,
  favorited,
  toggleFavorite,
  selectedWebcamId,
}) => (
  <div
    className={
      selectedWebcamId === w.id
        ? 'listItemContainer selectedListItem'
        : 'listItemContainer'
    }
  >
    <div className='listItemText'>
      <div className='listItemTitle' onClick={() => updateSelectedWebcam(w)}>
        {w.title}
      </div>
      <div className='listItemCountry'>{w.location.country}</div>
    </div>
    <i
      className={favorited ? 'fas fa-gem icon' : 'far fa-gem icon'}
      onClick={() => toggleFavorite(w)}
    />
  </div>
);

export default WebcamListItem;
