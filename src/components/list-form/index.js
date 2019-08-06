import React from 'react';
import Proptypes from 'prop-types';

const listForm = ({ onSubmit, onChange, titleValue, descriptionValue, tooShort }) => {
  return (
    <form className="create-list-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          name="title-one"
          autoComplete="off"
          placeholder="List title"
          spellCheck="false"
          value={titleValue}
          onChange={e => onChange('title', e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <textarea
          type="text"
          name="description-one"
          placeholder="Description"
          spellCheck="false"
          value={descriptionValue}
          onChange={e => onChange('description', e.target.value)}
          rows="4"
          required
        />
      </div>
      {tooShort ? (
        <p className="form-error">Make sure title and description is at least 3 characters long</p>
      ) : null}
      <button type="submit" className="form-button">
        PUBLISH
      </button>
    </form>
  );
};

listForm.propTypes = {
  onSubmit: Proptypes.func.isRequired,
  onChange: Proptypes.func.isRequired,
  titleValue: Proptypes.string.isRequired,
  descriptionValue: Proptypes.string.isRequired,
  tooShort: Proptypes.bool.isRequired
};

export default listForm;
