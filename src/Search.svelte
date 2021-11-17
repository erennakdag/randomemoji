<script>
    import {fetchSearchEmojis} from './API'
    import Emojis from './Emojis.svelte';

    let searchTerm = '';
    let promis;

    $: promis = fetchSearchEmojis(searchTerm)

</script>

<input type="text" placeholder="Search Emoji" bind:value={searchTerm}>

<div>
    {#await promis then emojis}
        <Emojis {emojis} random={false}/>
    {/await}
</div>