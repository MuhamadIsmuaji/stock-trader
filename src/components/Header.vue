<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<router-link to="/" tag="a" class="navbar-brand" exact>Stock Trader (Funds: {{ funds | currency}})</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<router-link to="/portofolio" tag="li" class="nav-item" active-class="active"><a class="nav-link">Portofolio</a></router-link>
				<router-link to="/stocks" tag="li" class="nav-item" active-class="active"><a class="nav-link">Stocks</a></router-link>
				<li class="nav-item"><a href="#" class="nav-link" @click="endDay">End Day</a></li>
			</ul>
			<!-- <span class="navbar-text">
			Fund: $ 98.00
			</span> -->
		</div>
	</nav>
</template>

<script type="text/javascript">
	import { mapActions } from 'vuex'

	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		},
		methods: {
			...mapActions([
				'randomizeStock'
			]),
			endDay() {
				this.randomizeStock();
			}
		}
	}
</script>