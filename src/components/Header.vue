<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<router-link to="/" tag="a" class="navbar-brand" exact>Stock Trader</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<router-link to="/portofolio" tag="li" class="nav-item" active-class="active"><a class="nav-link">Portofolio</a></router-link>
				<router-link to="/stocks" tag="li" class="nav-item" active-class="active"><a class="nav-link">Stocks</a></router-link>
				<!-- <router-link to="/" tag="li" class="nav-item" active-class="active"><a class="nav-link">End Day</a></router-link> -->
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Save & Load
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a class="dropdown-item" href="#">Save Data</a>
						<a class="dropdown-item" href="#">Load Data</a>
					</div>
				</li>
			</ul>
			<!-- <span class="navbar-text">
			Fund: $ 98.00
			</span> -->
		</div>
	</nav>
</template>