export const landLordReducer = (state = "", action) => {
  switch (action.type) {
    case 'LANDLORDS::TYPING':
      return { ...state, ...action.payload }
    case 'LANDLORDS::CLEAR_INPUTS':
      return { ...action.payload }
        default:
          return state;
      }
  }

  export default landLordReducer;