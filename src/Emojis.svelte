<script>

    export let emojis;

    let randoms = [];
    if (emojis) {
        for (let i = 0; i < 5; i++) {
            randoms.push(
                emojis[Math.floor(Math.random() * emojis.length)].character
            )
        }
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
    <br>
</div>

{#each randoms as character}
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