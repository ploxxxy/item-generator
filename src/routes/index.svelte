<script>
    import logo from '$lib/download.gif';
    import Display from "../lib/Display.svelte";

    let item = ''
    let itemName = ''
    let itemLore = ''

    let from = 0
    let to = 100
</script>

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
            

            <div class="tabs mt-4">
                <button class="tab tab-lifted tab-active">Display</button>
                <button class="tab tab-lifted">Enchantments</button>
                <button disabled class="tab tab-lifted disabled:cursor-default disabled:hover:bg-none disabled:hover:text-gray-500">Attributes</button>
            </div>

            <div class="bg-base-100 p-4 border-base-300 border flex flex-col rounded-b-xl rounded-tr-xl">
                
                <Display bind:itemName={itemName} bind:itemLore={itemLore} bind:item={item}/>

                <textarea type="text" class="input input-bordered w-full rounded-lg mt-4 font-mono h-32" disabled>{`defineItemType(${from}, ${to}, ${item}); defineEnchantPattern(${from}, ${to}, "Sharpness", 2, 100, 1, 2); defineItemName(${from}, ${to}, "${itemName}"); defineItemLore(${from}, ${to}, "${itemLore}", 1, true)`.split('; ').join('\n')}</textarea> 

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