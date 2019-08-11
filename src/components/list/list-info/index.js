import React from 'react';
import Proptypes from 'prop-types';

const ListInfo = ({ list }) => {
  const convertRuntime = runtime => {
    const runtimeHours = Math.floor(runtime / 60);
    const runtimeMinutes = runtime - runtimeHours * 60;
    return `${runtimeHours}H ${runtimeMinutes}M`;
  };
  const convertRevenue = revenue => {
    const billion = 1000000000;
    const million = 1000000;
    const thousand = 1000;
    if (revenue > billion) {
      return `$${Math.floor(revenue / billion)}B`;
    }
    if (revenue > million) {
      return `$${Math.floor(revenue / million)}M`;
    }
    if (revenue > thousand) {
      return `$${Math.floor(revenue / thousand)}K`;
    }
    return revenue;
  };
  return (
    <div className="list-info">
      <div className="list-info__item list-info__items-count">
        <h2>{list.items}</h2>
        <p>{list.items === 1 ? 'ITEM ON THIS LIST' : 'ITEMS ON THIS LIST'}</p>
      </div>
      <div className="list-info__item list-info__rating">
        <h2>{list.rating.toFixed(2)}</h2>
        <p>AVERAGE RATING</p>
      </div>
      <div className="list-info__item list-info__runtime">
        <h2>{convertRuntime(list.runtime)}</h2>
        <p>TOTAL RUNTIME</p>
      </div>
      <div className="list-info__item list-info__revenue">
        <h2>{convertRevenue(list.revenue)}</h2>
        <p>TOTAL REVENUE</p>
      </div>
    </div>
  );
};

ListInfo.propTypes = {
  list: Proptypes.object.isRequired
};

export default ListInfo;
