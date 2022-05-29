<script>
    import logo from '$lib/download.gif';
    import Tabs from "../lib/Tabs.svelte";
    import Display from "../lib/Display.svelte";
    import Enchantments from "../lib/Enchantments.svelte";
    import Attributes from "../lib/Attributes.svelte";

    let items = ['Display', 'Enchantments', 'Attributes']
    let activeItem = 'Display'

    let item = 'stone'
    let itemName = ''
    let itemLore = ''
    let roman = true

    let from = 0
    let to = 100

    let enchantments = []

    const tabChange = e => {
        activeItem = e.detail
    }

    // setInterval(() => {
    //     console.log(enchantments)
    // }, 1000);

    const beforeUnload = e => {
        e.preventDefault()
        e.returnValue = ''
    }
</script>

<svelte:window on:beforeunload={beforeUnload}/> 

<div class="container mx-auto">
    test
    <div class="flex flex-row">
        <div class="w-3/4 p-4 bg-base-200 rounded-l-xl">
            <div class="flex">
                <div class="form-control my-4 mr-4">
                    <label class="input-group input-group-sm">
                        <span>item</span>
                        <input bind:value={item} type="text" placeholder="stone" class="input input-bordered input-sm" />
                    </label>
                </div>
                
                <div class="form-control my-4 mr-4">
                    <label class="input-group input-group-sm">
                        <span>for items</span>
                        <input bind:value={from} type="number" class="input input-bordered input-sm w-24" />
                        <span>to</span>
                        <input bind:value={to} type="number" class="input input-bordered input-sm w-24" />
                    </label>
                </div>                
            </div>
            
            <Tabs {items} {activeItem} on:tabChange={tabChange}/>

            <div class="bg-base-100 p-4 border-base-300 border flex flex-col rounded-b-xl rounded-tr-xl">
                
                {#if activeItem === 'Display'}
                    <Display bind:itemName={itemName} bind:itemLore={itemLore} bind:item={item} bind:roman={roman}/>
                {:else if activeItem === 'Enchantments'}
                    <Enchantments bind:enchantments={enchantments}/>
                {:else if activeItem === 'Attributes'}
                    <Attributes />
                {/if}

                <!-- <textarea type="text" class="input input-bordered w-full rounded-lg mt-4 font-mono h-32" disabled> -->
                <ul class="input input-bordered w-full rounded-lg mt-4 font-mono h-32 overflow-scroll">
                    <li><span>defineItemType({from}, {to}, {item})</span></li>
                    {#if itemName}
                        <li><span>defineItemName({from}, {to}, "{itemName}")</span></li>
                    {/if}
                    {#if itemLore}
                        <li><span>defineItemLore({from}, {to}, ("{itemLore.split('\n').join('" and "')}"), {roman})</span></li>
                    {/if}
                    {#each enchantments as enchantment}
                        <li><span>defineEnchantPattern({from}, {to}, "{enchantment.name}", {enchantment.min}, {enchantment.max}, {enchantment.increase}, {enchantment.every})</span></li>
                    {/each}
                </ul>
                <!-- </textarea>  -->

            </div>
              
        </div>
        <div class="w-1/4 bg-neutral rounded-r-xl text-neutral-content p-4 flex flex-col">
            <h1 class="font-bold text-2xl my-2">Item Generator</h1>
            <a href="https://" class="link">Need help?</a>
            <a href="https://" class="link">Join Discord</a>
            <a href="https://" class="link">Buy plugins</a>
            <img src="{logo}" class="my-2" alt="">
            <span>(^ this is adveritsement banner)</span>
        </div>
    </div>
</div>