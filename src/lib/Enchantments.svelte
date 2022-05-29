<script>

    function Enchantment(name, min, max, increase, every, id) {
        this.name = name
        this.min = min
        this.max = max
        this.increase = increase
        this.every = every
        this.id = id
    }

    export let enchantments

    const addEnchantment = () => {
        enchantments.push(new Enchantment('Enchantment', 0, 100, 1, 5, enchantments.length))
        enchantments = enchantments
    }

    function deleteEnchantment(index) {
        enchantments.splice(index, 1)
        enchantments = enchantments
    }
</script>

<div class="flex">
    <div class="flex flex-col w-full mx-2 items-center">
        
        {#each enchantments as enchantment}
            <div class="flex my-2">
                <input type="text" bind:value={enchantment.name} class="input input-bordered input-sm mx-2" />

                <div class="form-control mx-2">
                    <label class="input-group input-group-sm">
                        <span>min level</span>
                        <input bind:value={enchantment.min} type="number" class="input input-bordered input-sm w-16" />
                        <span>max level</span>
                        <input bind:value={enchantment.max} type="number" class="input input-bordered input-sm w-16" />
                    </label>
                </div>       

                <div class="form-control mx-2">
                    <label class="input-group input-group-sm">
                        <span>increase by</span>
                        <input bind:value={enchantment.increase} type="number" class="input input-bordered input-sm w-16" />
                        <span>every</span>
                        <input bind:value={enchantment.every} type="number" class="input input-bordered input-sm w-16" />
                        <span>levels</span>
                    </label>
                </div>
                
                <button class="btn btn-sm btn-square btn-error" on:click={deleteEnchantment(enchantment)}>x</button>
            </div>
        {/each}

        <button class="btn w-48 btn-sm my-2" on:click={addEnchantment}>+ Add Enchantment</button>
    </div>
</div>