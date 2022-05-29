<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
    
    export let items
    export let activeItem
</script>

<div class="tabs mt-4">
    {#each items as item}
        <button class="tab tab-lifted" class:tab-active={item === activeItem} on:click={() => dispatch('tabChange', item)}>{item}</button>
    {/each}
</div>