<script>
    import Modal from "$lib/Modal.svelte"

    export let item
    export let itemName
    export let itemLore
    export let roman
</script>

<div class="flex flex-wrap md:flex-nowrap gap-4">
    <div class="flex flex-col w-full">
        <div class="form-control">
            <label for="name" class="label">
                <span class="label-text">Item Name</span>
                <Modal placeholder=0/>
            </label>
            <input bind:value={itemName} name="name" type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label for="lore" class="label">
                <span class="label-text">Item Lore</span>
                <div>
                    <input type="checkbox" bind:checked={roman} class="checkbox checkbox-xs tooltip" data-tip="Use Roman numerals? (8 = VIII)" />
                    <Modal placeholder=1/>
                </div>
            </label>
            <textarea bind:value={itemLore} name="lore" class="textarea textarea-bordered h-48" />
        </div>
    </div>
    
    <div class="w-full bg-neutral text-neutral-content p-4 rounded-md">
        <div class="bg-minecraft flex flex-col p-3 rounded text-minecraft">
            <span class="minecraft-aqua">{itemName ? itemName : item ? item : 'Stone'}</span>
            {#each itemLore.split("\n") as lore}
                <span class="minecraft-dark-purple">{lore}</span>
            {/each}
            <span class="lowercase minecraft-dark-gray">minecraft:{item ? item : 'stone'}</span>
        </div>
    </div>
</div>
