const INITIAL_STATE = {
  loading: false,
  make: [],
  model: [],
  version: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RESET_FILTERS':
      return {
        state: INITIAL_STATE
      };
    case 'STOP_LOADING':
      return {
        ...state,
        loading: false,
      };
    case 'GET_MAKE':
      return {
        ...state,
        loading: true,
        make: action.payload,
        model: [],
        version: [],
      };
    case 'GET_MODEL':
      return {
        ...state,
        loading: true,
        model: action.payload,
        version: [],
      };
    case 'GET_VERSION':
      return {
        ...state,
        loading: true,
        version: action.payload
      };
    default:
      return state;
  }
};
