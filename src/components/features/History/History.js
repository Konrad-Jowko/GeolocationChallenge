import React from 'react';
import PropTypes from 'prop-types';
import Element from '../../common/Element/Element';

import styles from './History.module.scss';

/* MAIN LAYOUT COMPONENT */
const History = ({elements, getSearch}) => (
  <div className={styles.container}>
    <h2 className={styles.title}> Previously Searched</h2>
    <div className={styles.elementsContainer}>
      {elements ? elements.map(element => (
        <Element
          key={elements.indexOf(element)}
          content={element}
          getSearch={getSearch} />
      ))
        : null
      }
    </div>
  </div>
);


History.propTypes = {
  elements: PropTypes.array,
  getSearch: PropTypes.func,
};

export default History;
