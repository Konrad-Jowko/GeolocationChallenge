import React from 'react';
import PropTypes from 'prop-types';
import Element from '../../common/Element/Element';

import styles from './History.module.scss';

/* MAIN LAYOUT COMPONENT */
const History = ({elements}) => (
  <div className={styles.container}>
    <h2 className={styles.title}> Previously Searched</h2>
    <div className={styles.elementsContainer}>
      {elements.map(element => (
        <Element key={element} content={element} />
      ))}
    </div>
  </div>
);

History.propTypes = {
  elements: PropTypes.array,
};

export default History;
