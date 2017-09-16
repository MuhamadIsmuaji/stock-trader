import Home from './components/Home.vue'
import Portofolio from './components/portofolio/Portofolio.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
	{path: '/stock-trader', name: 'home', component: Home},
	{path: '/stock-trader/portofolio', name: 'portofolio', component: Portofolio},
	{path: '/stock-trader/stocks', name: 'stocks', component: Stocks},
	{path: '*', redirect: {name: 'home'}}
];