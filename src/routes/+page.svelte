<script lang="ts">
    import salesJSON from '$lib/sales.json'
    import { json } from '@sveltejs/kit';
    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';

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
        return genderSales
    }

    const calculateSalesByAge = () => {
        let ageSales = {
            under18: 0,
            youngAdult: 0,
            adult: 0,
            middleAged: 0,
            elderly: 0
        }
        salesJSON.sales.forEach(sale => {
            if (sale.age < 18) {
                ageSales.under18++;
            } else if (sale.age < 25) {
                ageSales.youngAdult++;
            } else if (sale.age < 40) {
                ageSales.adult++;
            } else if (sale.age < 65) {
                ageSales.middleAged++;
            } else {
                ageSales.elderly++;
            }
        })
        return ageSales
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>Sales: {calculateSalesByGender()}</p>
