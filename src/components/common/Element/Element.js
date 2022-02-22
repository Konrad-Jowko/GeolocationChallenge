import React from 'react';
import PropTypes from 'prop-types';

import styles from './Element.module.scss';

/* MAIN LAYOUT COMPONENT */
const Element = ({content}) => (
  <div className={styles.container}>
    <h1 className={styles.title}> {content}</h1>
    <h1 className={styles.hoverTitle}> Search again </h1>
  </div>
);

Element.propTypes = {
  content: PropTypes.string,
};

export default Element;
