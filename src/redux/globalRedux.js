import Axios from 'axios';
import { URL } from '../config';

/* SELECTORS */
export const getGlobal = ({globalData}) => globalData;

/* ACTION NAME CREATOR */
const reducerName = 'global';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const SET_USER_ADRESS = createActionName('SET_USER_ADRESS');
const SET_USER_GEO = createActionName('SET_USER_GEO');
const SET_SEARCH_ADRESS = createActionName('SET_SEARCH_ADRESS');
const SET_SEARCH_GEO = createActionName('SET_SEARCH_GEO');
const UPDATE_HISTORY = createActionName('UPDATE_HISTORY');

/* ACTION CREATORS */
export const setUserAdress = payload => ({ payload, type: SET_USER_ADRESS });
export const setUserGeo = payload => ({ payload, type: SET_USER_GEO });
export const setSearchAdress = payload => ({ payload, type: SET_SEARCH_ADRESS });
export const setsearchedGeo = payload => ({ payload, type: SET_SEARCH_GEO });
export const updateHistory = payload => ({payload, type: UPDATE_HISTORY});

export const getUser = () => {
  return (dispatch, getState) => {
    const state = getState();

    if (!state.globalData.userAdressInfo) {
      Axios
        .get(`${URL}api/user`)
        .then(res => {
          dispatch(setUserAdress(res.data.adressData));
          dispatch(setUserGeo(res.data.geolocation));
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };
};

export const getSearch = (adress, noSave) => {
  return (dispatch) => {
    console.log(noSave);
    Axios
      .get(`${URL}api/search/${adress}`)
      .then(res => {
        console.log(res.data);
        dispatch(setSearchAdress(res.data.adressData));
        dispatch(setsearchedGeo(res.data.geolocation));
        if (noSave !== true) {dispatch(updateHistory(adress));}
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};


/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case SET_USER_ADRESS: {
      return {
        ...statePart,
        userAdressInfo: action.payload,
      };
    }
    case SET_USER_GEO: {
      return {
        ...statePart,
        userGeo: action.payload,
      };
    }
    case SET_SEARCH_ADRESS: {
      return {
        ...statePart,
        searchedAdressInfo: action.payload,
      };
    }
    case SET_SEARCH_GEO: {
      return {
        ...statePart,
        searchedGeo: action.payload,
      };
    }
    case UPDATE_HISTORY: {
      return {
        ...statePart,
        history: [
          ...statePart.history,
          action.payload,
        ],
      };
    }
    default:
      return statePart;
  }
};
