<template>
	<div class="col-md-4">
		<div class="card">
			<div class="card-header">
				{{ stock.name }} <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
			</div>
			<div class="card-body">
				<div class="float-left col-md-5">
					<input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientQuantity}">
				</div>
				<div class="float-right col-md-7">
					<button class="btn btn-info" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)">	{{ insufficientQuantity ? 'Insufficient Stocks' : 'Sell' }}
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
	import { mapActions } from 'vuex'

	export default {
		props: ['stock'],
		data() {
			return {
				quantity: 0,
			}
		},
		computed: {
			insufficientQuantity() {
				return this.quantity > this.stock.quantity;
			}
		},
		methods: {
			...mapActions({
				placeSellOrder: 'sellStock'
			}),
			sellStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};

				this.placeSellOrder(order);
				this.quantity = 0;
			}
		}
	}
</script>