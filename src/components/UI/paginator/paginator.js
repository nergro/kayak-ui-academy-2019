import React from 'react';

const paginator = ({ pages, currentPage, currentUrl }) => {
  const previousPage = +currentPage - 1;
  const nextPage = +currentPage + 1;
  return (
    <div className="paginator">
      {pages > 1 ? (
        <ul className="paginator-list">
          {pages >= 3 ? (
            <li className="paginator-list__item paginator-list__item--first">
              <a href={currentUrl + '/1'}>FIRST</a>
            </li>
          ) : null}
          {previousPage > 0 ? (
            <li className="paginator-list__item">
              <a href={currentUrl + '/' + previousPage}>{previousPage}</a>
            </li>
          ) : null}
          <li className="paginator-list__item active">
            <a href={currentUrl + '/' + currentPage}>{currentPage}</a>
          </li>
          {nextPage <= pages ? (
            <li className="paginator-list__item">
              <a href={currentUrl + '/' + nextPage}>{nextPage}</a>
            </li>
          ) : null}
          {pages >= 3 ? (
            <li className="paginator-list__item paginator-list__item--last">
              <a href={currentUrl + '/' + pages}>LAST</a>
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
};

export default paginator;
