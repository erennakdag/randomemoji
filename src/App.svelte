<script>
	import Emojis from './Emojis.svelte';

	async function getData() {
		const resp = await fetch('https://emoji-api.com/emojis?access_key=db84f07a2ee1d3865941220a913cba2510f79b33');
		const data = await resp.json();

		return data;
	}

	let promis = getData();

</script>

<main>
	<h1>Hello!</h1>
	<h3>Get your random emojis now!!!</h3>
	
	<div>
		{#await promis then emojis}
			<Emojis {emojis}/>
		{/await}
	</div>

	<button class="btn" on:click={() => promis = getData()}>Get Random Emojis</button>

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