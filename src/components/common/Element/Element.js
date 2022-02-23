import React from 'react';
import PropTypes from 'prop-types';

import styles from './Element.module.scss';

/* COMPONENT PRESENTING ALREADY SEARCH ADRESS*/
const Element = ({content, getSearch}) => {
  const manageClick = (event) => {
    const adress = event.target.childNodes[0].textContent;

    getSearch(adress, true);
  };

  return (
    <div className={styles.container} onClick={manageClick}>
      <h1 className={styles.title}>{content}</h1>
      <h1 className={styles.hoverTitle}> Search again </h1>
    </div>
  );
};

Element.propTypes = {
  content: PropTypes.string,
  getSearch: PropTypes.func,
};

export default Element;
