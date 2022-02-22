/* SELECTORS */
export const getGlobal = ({globalData}) => globalData;

/* ACTION NAME CREATOR */
const reducerName = 'global';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const ENABLE_LOADING = createActionName('ENABLE_LOADING');
const DISABLE_LOADING = createActionName('DISABLE_LOADING');

/* ACTION CREATORS */
export const enableLoading = payload => ({ payload, type: ENABLE_LOADING });
export const disableLoading = payload => ({ payload, type: DISABLE_LOADING });

/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case ENABLE_LOADING: {
      return {
        ...statePart,
        loading: true,
      };
    }
    case DISABLE_LOADING: {
      return {
        ...statePart,
        loading: false,
      };
    }
    default:
      return statePart;
  }
};
