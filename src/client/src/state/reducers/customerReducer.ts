import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { Customer } from "../models/customer";

const initialState: Customer[] = [];

const reducer = (state: Customer[] = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.CREATE_CUSTOMER:
			return [...state, action.payload];
		case ActionType.READ_CUSTOMER:
			return state.find((customer) => customer.id === action.payload);
		case ActionType.UPDATE_CUSTOMER:
			let customerIndex = state.findIndex(
				(customer) => customer.id === action.payload.id
			);
			state[customerIndex] = action.payload;
			return state;
		case ActionType.DELETE_CUSTOMER:
			return state.filter((customer) => customer.id === action.payload);
		default:
			return state;
	}
};

export default reducer;
