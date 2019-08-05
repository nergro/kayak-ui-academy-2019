import React from 'react';
import List from './list-box/list-box';

const listsWrapper = () => {
  return (
    <div className="lists-wrapper">
      <List title="LIST 1" itemCount="5" updated="10 minutes" />
      <List title="LIST 2" itemCount="2" updated="1 minute" />
      <List title="LIST 3" itemCount="1" updated="10 seconds" />
      <List title="LIST 4" itemCount="15" updated="10 hours" />
      <List title="LIST 5" itemCount="21" updated="1 hour" />
      <List title="LIST 6" itemCount="42" updated="1 day" />
      <List title="LIST 7" itemCount="198" updated="10 days" />
    </div>
  );
};

export default listsWrapper;
