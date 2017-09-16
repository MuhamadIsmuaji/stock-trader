import Home from './components/Home.vue'
import Portofolio from './components/portofolio/Portofolio.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
	{path: '/stock-trader', component: Home},
	{path: '/stock-trader/portofolio', component: Portofolio},
	{path: '/stock-trader/stocks', component: Stocks},
];