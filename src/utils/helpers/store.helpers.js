import { useEffect } from "react";

const initialState = {
	account: null,
	isWalletConnected: false,
	isLoading: false,
	status: "",
};

const useSetPersistStore = (store) => {
	useEffect(() => {
		localStorage.setItem("persist-radenu-protocol", JSON.stringify(store));
		//eslint-disable-next-line
	}, [store]);
};

const useGetPersistedStore = () =>
	JSON.parse(localStorage.getItem("persist-radenu-protocol")) ||
	initialState;

export { useSetPersistStore, useGetPersistedStore, initialState };