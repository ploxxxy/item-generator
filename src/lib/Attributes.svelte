<script>
    class Attribute {
        constructor(name, min, max, increase, every, operation, slot, id) {
            this.name = name
            this.min = min
            this.max = max
            this.increase = increase
            this.every = every
            this.operation = operation
            this.slot = slot
            this.id = id
        }
    }

    export let attributes

    const addAttribute = () => {
        attributes.push(new Attribute('generic.armor', 0, 100, 1, 5, '0', 'mainhand', attributes.length))
        attributes = attributes
    }

    function deleteAttribute(index) {
        attributes.splice(index, 1)
        attributes = attributes
    }
</script>

<div class="flex flex-col w-full items-center gap-4">
    
    {#each attributes as attribute}
        <div class="flex gap-4 flex-wrap justify-center">
            <select bind:value={attribute.name} class="select select-sm select-bordered">
                <option selected value="generic.armor">Armour</option>
                <option value="generic.armor_toughness">Armour Toughness</option>
                <option value="generic.attack_damage">Attack Damage</option>
                <option value="generic.attack_knockback">Attack Knockback</option>
                <option value="generic.attack_speed">Attack Speed</option>
                <option value="generic.knockback_resistance">Knockback Resistance</option>
                <option value="generic.luck">Luck</option>
                <option value="generic.max_health">Max Health</option>
                <option value="generic.follow_range">Mob Follow Range</option>
                <option value="generic.movement_speed">Movement Speed</option>
            </select>

                
            <select bind:value={attribute.slot} class="select select-sm select-bordered capitalize">
                <option selected>mainhand</option>
                <option>offhand</option>
                <option>head</option>
                <option>chest</option>
                <option>legs</option>
                <option>feet</option>
            </select>

            
            <select bind:value={attribute.operation} class="select select-sm select-bordered">
                <option selected value=0>Additive</option>
                <option value=1>Multiply Additive</option>
                <option value=2>Multiply Multiply</option>
            </select>

            <div class="form-control">
                <label class="input-group input-group-sm">
                    <span>Min LVL</span>
                    <input bind:value={attribute.min} type="number" class="input input-bordered input-sm w-16" />
                    <span>Max LVL</span>
                    <input bind:value={attribute.max} type="number" class="input input-bordered input-sm w-16" />
                </label>
            </div>       

            <div class="form-control">
                <label class="input-group input-group-sm">
                    <span>Increase by</span>
                    <input bind:value={attribute.increase} type="number" class="input input-bordered input-sm w-16" />
                    <span>every</span>
                    <input bind:value={attribute.every} type="number" class="input input-bordered input-sm w-16" />
                    <span>LVLs</span>
                </label>
            </div>
            
            <button class="btn btn-sm btn-error font-mono" on:click={deleteAttribute(attribute.id)}>❌</button>
        </div>
    {/each}

    <button class="btn w-48 btn-sm normal-case" on:click={addAttribute}>➕ Add Attribute</button>
</div>