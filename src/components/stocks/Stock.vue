<template>
	<div class="col-md-4">
		<div class="card">
			<div class="card-header">
				{{ stock.name }} <small>(Price: {{ stock.price }})</small>
			</div>
			<div class="card-body">
				<div class="float-left col-md-6">
					<input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientFunds}">
				</div>
				<div class="float-right col-md-6">
					<button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || Number.isInteger(quantity)">
						{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	.danger {
		border: 1px solid red;
	}
</style>

<script type="text/javascript">
	export default {
		props: ['stock'],
		data() {
			return {
				quantity: 0,
			}
		},
		computed: {
			funds() {
				return this.$store.getters.funds;
			},
			insufficientFunds() {
				return this.quantity * this.stock.price > this.funds;
			}
		},
		methods: {
			buyStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity,
				};

				// console.log(order);
				this.$store.dispatch('buyStock', order);
				this.quantity = 0;
			}
		}
	}
</script>