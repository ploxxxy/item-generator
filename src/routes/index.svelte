<script>
    import Tabs from "$lib/Tabs.svelte";
    import Display from "$lib/Display.svelte";
    import Enchantments from "$lib/Enchantments.svelte";
    import Attributes from "$lib/Attributes.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";

    let items = ['Display', 'Enchantments', 'Attributes']
    let activeItem = 'Display'

    let item = 'stone'
    let itemName = ''
    let itemLore = ''
    let roman = true

    let from = 1
    let to = 100

    let attributes = []
    let enchantments = []

    const tabChange = e => {
        activeItem = e.detail
    }

    const beforeUnload = e => {
        e.preventDefault()
        e.returnValue = ''
    }
</script>

<svelte:window on:beforeunload={beforeUnload}/> 

<div class="alert alert-error mt-8 sm:hidden">
      <span>⚠ This may not work properly on small devices.</span>
  </div>

<Navbar />

<div class="container mx-auto mt-4 p-4 bg-base-200 rounded-md">
    <div class="flex flex-wrap gap-4">
        <div class="form-control">
            <label class="input-group input-group-sm">
                <span>Item</span>
                <input bind:value={item} type="text" class="input input-bordered input-sm" />
            </label>
        </div>
        
        <div class="form-control">
            <label class="input-group input-group-sm">
                <span>For items</span>
                <input bind:value={from} type="number" class="input input-bordered input-sm w-24" />
                <span>to</span>
                <input bind:value={to} type="number" class="input input-bordered input-sm w-24" />
            </label>
        </div>      
                    
    </div>
    
    <Tabs {items} {activeItem} on:tabChange={tabChange}/>

    <div class="bg-base-100 p-4 border-base-300 border flex flex-col rounded-b-md rounded-tr-md">
        
        {#if activeItem === 'Display'}
            <Display bind:itemName={itemName} bind:itemLore={itemLore} bind:item={item} bind:roman={roman}/>
        {:else if activeItem === 'Enchantments'}
            <Enchantments bind:enchantments={enchantments}/>
        {:else if activeItem === 'Attributes'}
            <Attributes bind:attributes={attributes}/>
        {/if}

        <ul class="input input-bordered w-full rounded-md mt-4 font-mono h-32 overflow-scroll">
            {#if item}
                <li><span>defineItemType({from}, {to}, {item})</span></li>
            {/if}
            {#if itemName}
                <li><span>defineItemName({from}, {to}, "{itemName}")</span></li>
            {/if}
            {#if itemLore}
                <li><span>defineItemLore({from}, {to}, ("{itemLore.split('\n').join('" and "')}"), {roman})</span></li>
            {/if}
            {#each enchantments as enchantment}
                <li><span>defineEnchantPattern({from}, {to}, "{enchantment.name}", {enchantment.min}, {enchantment.max}, {enchantment.increase}, {enchantment.every})</span></li>
            {/each}
            {#each attributes as attribute}
                <li><span>defineAttributePattern({from}, {to}, "{attribute.name}", {attribute.min}, {attribute.max}, {attribute.increase}, {attribute.every}, {attribute.operation}, "{attribute.slot}")</span></li>
            {/each}
        </ul>

    </div>
        
</div>

<Footer />
