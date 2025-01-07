<script lang="ts">
    // Simple Metrics Calculation for Header Bar
    import salesJSON from "$lib/sales.json"

    // All functions below are self explanatory and do what they say. Each creates a variable to be rendered in the HTML below
    const averageAge: number = salesJSON.sales.reduce((acc, curr) => {
        return acc + curr.age;
    }, 0) / salesJSON.sales.length;

    const averageSpending: number = salesJSON.sales.reduce((acc, curr) => {
        return acc + curr.total_spent;
    }, 0) / salesJSON.sales.length;

    const dailyRevenue: Record<string, number> = salesJSON.sales.reduce((acc: Record<string, number>, sale) => {
        acc[sale.purchase_date] = (acc[sale.purchase_date] || 0) + sale.total_spent;
        return acc
    }, {})

    const totalDays: number = Object.keys(dailyRevenue).length // get number of unique dates
    const totalRevenue: number = Object.values(dailyRevenue).reduce((acc: number, rev: number) => acc + rev, 0);
    const averageDailyRevenue: number = totalDays > 0 ? totalRevenue / totalDays : 0; // <- ternary to prevent divide by 0

    const insertCommas = (x: number) => {
        let stringified = x.toString();
        let pattern = /(-?\d+)(\d{3})/; // unholy regex sent down by the gods of stack overflow
        while (pattern.test(stringified)) 
            stringified = stringified.replace(pattern, "$1,$2");
        return stringified;
    }
</script>

<!--PHOEBE GO WILD HERE-->
<div class=" gap-4 grid grid-cols-4 text-white ">
    <div class=" card ">
        <p class=" text-sm text-gray-200 font-medium">Avg Age</p>
        <p class=" text-2xl font-semibold " >{averageAge.toFixed(0)}</p>
    </div>
    <div class="card">
        <p class=" text-sm text-gray-200 font-medium ">Total Revenue</p>
        <p class=" text-2xl font-semibold ">£ {insertCommas(Number(totalRevenue.toFixed(2)))}</p>
    </div>
    <div class=" card ">
        <p class=" text-sm text-gray-200 font-medium ">Avg Spending Per Customer</p>
        <p class=" text-2xl font-semibold ">£ {averageSpending.toFixed(2)}</p>
    </div>
    <div class=" card ">
        <p class=" text-sm text-gray-200 font-medium ">Avg Daily Revenue</p>
        <p class=" text-2xl font-semibold">£ {insertCommas(Number(averageDailyRevenue.toFixed(2)))}</p>
    </div>
</div>

<style>
    .card{
        background: #111827;
        border-radius: 0.5rem;
        height: 100%;
        width: 100%;
        padding: 1rem;
    }
    .card:hover{
        background: #1f2937;
        position: relative;
        bottom: 0.1rem;
    }
</style>