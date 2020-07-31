import cities from "./mocks/cities";
import offers from "./mocks/offers";
import {extend} from "./utils";

const initialState = {
  cities,
  offers,
  selectedCity: `Amsterdam`
};

const actionType = {
  SELECT_CITY: `CITIES/SELECT_CITY`
};

const actionCreators = {
  selectCity: (city) => {
    return {
      type: actionType.SELECT_CITY,
      payload: city
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionType.SELECT_CITY) : {
      return extend(state, {selectedCity: action.payload});
    }
  }
  return state;
};

export {reducer, actionType, actionCreators};
