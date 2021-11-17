<script>
	import Emojis from './Emojis.svelte';
	import Search from './Search.svelte';
	import {fetchAllEmojis} from './API'

	let promis = fetchAllEmojis();

</script>

<main>
	<h1>Hello!</h1>
	<h3>Get your random emojis now!!!</h3>
	
	<div>
		{#await promis then emojis}
			<Emojis {emojis}/>
		{/await}
	</div>

	<button class="btn" on:click={() => promis = fetchAllEmojis()}>Get Random Emojis</button>

	<br>

	<Search/>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h3 {
		font-size: 2em;
		font-weight: 100;
	}

	.btn {
		font-size: 2em;
		font-weight: 100;
		border: none;
		background: none;
	}

	.btn:hover {
        border: 2px solid black;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>