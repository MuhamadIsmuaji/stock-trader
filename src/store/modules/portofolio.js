const state = {
	funds: 10000,
	stocks: [],
}

const mutations = {
	'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
		// element refering each element of stocks on portofolio
		const record = state.stocks.find(element => element.id == stockId);

		if (record) {
			record.quantity += quantity;
		} else {
			state.stocks.push({
				id: stockId,
				quantity: quantity,
			});
		}

		state.funds -= stockPrice * quantity;
	},
	'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
		const record = state.stocks.find(element => element.id == stockId);

		if (record.quantity > quantity) {
			record.quantity -= quantity;
		} else {
			state.stocks.splice(state.stocks.indexOf(record), 1);
		}

		state.funds += stockPrice * quantity;
	}
}

const actions = {
	sellStock: ({commit}, order) => {
		commit('SELL_STOCK', order);
	}
}

const getters = {
	// getters can get all getters from all modules that registered on store.js
	stockPortofolio (state, getters) {
		// loop for state stocks, stock is refering each stock
		return state.stocks.map(stock => {
			// getters.stocks get getters from stocks.js module that registered on store.js
			const record = getters.stocks.find(element => element.id == stock.id);

			return {
				id: stock.id,
				quantity: stock.quantity,
				name: record.name,
				price: record.price,
			};
		});
	},
	funds (state) {
		return state.funds;
	}
}

export default {
	state,
	mutations,
	actions,
	getters,
}