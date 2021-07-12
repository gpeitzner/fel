import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

function App() {
	const dispatch = useDispatch();
	const { createCustomer, readCustomer, updateCustomer, deleteCustomer } =
		bindActionCreators(actionCreators, dispatch);
	const customers = useSelector((state: State) => state.customer);
	console.log("[CUSTOMERS]", customers);
	return (
		<div className="App">
			<button>Create Customer</button>
			<button onClick={() => console.log("[READ CUSTOMER]", readCustomer(1))}>
				Read Customer
			</button>
			<button onClick={() => console.log("[UPDATE CUSTOMER]")}>
				Update Customer
			</button>
			<button onClick={() => console.log("[DELETE CUSTOMER")}>
				Delete Customer
			</button>
		</div>
	);
}

export default App;
