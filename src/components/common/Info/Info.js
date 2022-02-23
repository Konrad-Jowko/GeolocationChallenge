import React from 'react';
import PropTypes from 'prop-types';

import styles from './Info.module.scss';

/* COMPONENT PRESENTING GEOLOCATION INFO ACQUIRED FROM API */
const Info = ({adressInfo}) => {
  const manageClick = (event) => {
    const children = event.target.childNodes;
    const info = event.target.parentNode.childNodes[1].innerHTML;

    navigator.clipboard.writeText(info);

    children[0].classList.add('hidden');
    children[1].classList.add('active');

    setTimeout(() => {
      children[0].classList.remove('hidden');
      children[1].classList.remove('active');
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Adress information </h1>
      <div className={styles.contentContainer}>
        {adressInfo ? adressInfo.map(element => (
          <div key={element.name} className={styles.element}>
            <h4 className={styles.elementTitle}>{element.name}:</h4>
            <h4 className={styles.elementContent}>{element.content}</h4>
            <div className={styles.copyContainer} onClick={(event) => manageClick(event)}>
              <div className={styles.copy}> COPY </div>
              <div className={styles.blend}> DONE </div>
            </div>
          </div>
        )) :
          <h4 className={styles.noElement}> Type URL or IP into the search bar </h4>
        }
      </div>
    </div>
  );
};

Info.propTypes = {
  adressInfo: PropTypes.array,
};

export default Info;
