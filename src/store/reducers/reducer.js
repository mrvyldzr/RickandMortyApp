const initialState = {
  episodePart: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EPISODE_PART_NAME':
      return {
        ...state, //copy all previous states
        episodePart: action.payload,
      };
    default:
      return state;
  }
};
