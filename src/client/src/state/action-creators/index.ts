import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import { Customer } from "../models/index";

export const createCustomer = (customer: Customer) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.CREATE_CUSTOMER,
			payload: customer,
		});
	};
};

export const readCustomer = (customerId: number) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.READ_CUSTOMER,
			payload: customerId,
		});
	};
};

export const updateCustomer = (customer: Customer) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.UPDATE_CUSTOMER,
			payload: customer,
		});
	};
};

export const deleteCustomer = (customerId: number) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.DELETE_CUSTOMER,
			payload: customerId,
		});
	};
};
