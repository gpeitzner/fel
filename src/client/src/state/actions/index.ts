import { ActionType } from "../action-types";
import { Customer, Product } from "../models/index";

interface CreateCustomerAction {
	type: ActionType.CREATE_CUSTOMER;
	payload: Customer;
}

interface ReadCustomerAction {
	type: ActionType.READ_CUSTOMER;
	payload: number;
}

interface UpdateCustomerAction {
	type: ActionType.UPDATE_CUSTOMER;
	payload: Customer;
}

interface DeleteCustomerAction {
	type: ActionType.DELETE_CUSTOMER;
	payload: number;
}

interface CreateProductAction {
	type: ActionType.CREATE_PRODUCT;
	payload: Product;
}

interface ReadProductAction {
	type: ActionType.READ_PRODUCT;
	payload: number;
}

interface UpdateProductAction {
	type: ActionType.UPDATE_PRODUCT;
	payload: Product;
}

interface DeleteProductAction {
	type: ActionType.DELETE_PRODUCT;
	payload: number;
}

export type Action =
	| CreateCustomerAction
	| ReadCustomerAction
	| UpdateCustomerAction
	| DeleteCustomerAction
	| CreateProductAction
	| ReadProductAction
	| UpdateProductAction
	| DeleteProductAction;
