<script>
    class Enchantment {
        constructor(name, min, max, increase, every, id) {
            this.name = name;
            this.min = min;
            this.max = max;
            this.increase = increase;
            this.every = every;
            this.id = id;
        }
    }

    export let enchantments

    const addEnchantment = () => {
        enchantments.push(new Enchantment('Aqua Affinity', 0, 100, 1, 5, enchantments.length))
        enchantments = enchantments
        console.log(enchantments)
    }

    function deleteEnchantment(index) {
        enchantments.splice(index, 1)
        enchantments = enchantments
    }
</script>

<div class="flex flex-col w-full items-center gap-4">
    
    {#each enchantments as enchantment}
        <div class="flex gap-4 flex-wrap justify-center">
            
            <select bind:value={enchantment.name} class="select select-sm select-bordered">
                <option selected>Aqua Affinity</option>
                <option>Bane of Arthropods</option>
                <option>Curse of Binding</option>
                <option>Blast Protection</option>
                <option>Channeling</option>
                <option>Depth Strider</option>
                <option>Efficiency</option>
                <option>Feather Falling</option>
                <option>Fire Aspect</option>
                <option>Fire Protection</option>
                <option>Flame</option>
                <option>Fortune</option>
                <option>Frost Walker</option>
                <option>Impaling</option>
                <option>Infinity</option>
                <option>Knockback</option>
                <option>Looting</option>
                <option>Loyalty</option>
                <option>Luck of The Sea</option>
                <option>Lure</option>
                <option>Mending</option>
                <option>Multishot</option>
                <option>Piercing</option>
                <option>Power</option>
                <option>Projectile Protection</option>
                <option>Protection</option>
                <option>Punch</option>
                <option>Quick Charge</option>
                <option>Respiration</option>
                <option>Riptide</option>
                <option>Sharpness</option>
                <option>Silk Touch</option>
                <option>Smite</option>
                <option>Soul Speed</option>
                <option>Sweeping Edge</option>
                <option>Thorns</option>
                <option>Unbreaking</option>
                <option>Curse of Vanishing</option>                    
                </select>

            <div class="form-control">
                <label class="input-group input-group-sm">
                    <span>Min LVL</span>
                    <input bind:value={enchantment.min} type="number" class="input input-bordered input-sm w-16" />
                    <span>Max LVL</span>
                    <input bind:value={enchantment.max} type="number" class="input input-bordered input-sm w-16" />
                </label>
            </div>       

            <div class="form-control">
                <label class="input-group input-group-sm">
                    <span>Add</span>
                    <input bind:value={enchantment.increase} type="number" class="input input-bordered input-sm w-16" />
                    <span>every</span>
                    <input bind:value={enchantment.every} type="number" class="input input-bordered input-sm w-16" />
                    <span>LVLs</span>
                </label>
            </div>
            
            <button class="btn btn-sm btn-error " on:click={deleteEnchantment(enchantment.id)}>❌</button>
        </div>
    {/each}

    <button class="btn w-48 btn-sm normal-case" on:click={addEnchantment}>➕ Add Enchantment</button>
</div>