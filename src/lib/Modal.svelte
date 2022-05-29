
<script>
    let placeholders = ['"-level" - returns a level', '"-enchantment" (i.e. -sharpness) - returns enchantment level']
    export let placeholder;
</script>

<div class="dropdown dropdown-end">
    <label for="" tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </label>
    <div tabindex="0" class="card compact dropdown-content shadow-xl bg-base-100 rounded-box w-64">
        <div class="card-body">
            <h2 class="card-title">Available placeholders:</h2> 
                    <p>{placeholders[placeholder]}</p>
        </div>
    </div>
</div>