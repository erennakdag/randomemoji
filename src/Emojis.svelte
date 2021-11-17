<script>

    export let emojis;
    export let random = true;

    let amount = 5;

    let randoms = [];
    if (emojis && random) {
        console.log(random)
        for (let i = 0; i < amount; i++) {
            randoms.push(
                emojis[Math.floor(Math.random() * emojis.length)].character
            )
        }
    }
    else {
        randoms = emojis.map(emoji => emoji.character);
        randoms = new Set(randoms)
        console.log(randoms)
    }

    function handleClick(e) {
        let copyText = '';

        for (let emoji of randoms) {
            copyText += emoji;
        }

        navigator.clipboard.writeText(copyText);
    }

</script>

<div style="height: 50px; margin-bottom: 10px;">
    <button class="btn" on:click={handleClick}>
        Copy
    </button>
    <!-- <select bind:value={amount}>
        {#each [1, 2, 3, 4] as i}
        <option value={i}>{i}</option>
        {/each}
        <option selected value={5}>5</option>
    </select> -->
    <br>
</div>

{#each [...randoms] as character}
    <span class="emoji">
        {character}
    </span>
{/each}


<style>
    .emoji {
        font-size: 10rem;
    }


	.btn {
		font-size: 2em;
		font-weight: 100;
		border: none;
		background: none;
        border-radius: 5%;
	}

	.btn:hover {
        border: 2px solid black;
	}

    @media (max-width: 640px) {
		.emoji {
			font-size: 5rem;
		}
	}
</style>