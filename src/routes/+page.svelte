<script lang="ts">
    import salesJSON from '$lib/sales.json'
    import { json } from '@sveltejs/kit';
    import { onMount } from 'svelte';

    const calculateSalesByGender = () => {
        let genderSales = {
            Male: 0,
            Female: 0,
            Other: 0
        }
        salesJSON.sales.forEach(sale => {
           switch (sale.gender) {
                case "Male":
                    genderSales.Male++;
                    break;
                case "Female":
                    genderSales.Female++;
                    break;
                default:
                    genderSales.Other++;
           } 
        });
        return JSON.stringify(genderSales)
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>Sales: {calculateSalesByGender()}</p>
