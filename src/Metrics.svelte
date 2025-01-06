<script lang="ts">
    import salesJSON from "$lib/sales.json"

    const averageAge = salesJSON.sales.reduce((acc, curr) => {
        return acc + curr.age;
    }, 0) / salesJSON.sales.length;

    const averageSpending = salesJSON.sales.reduce((acc, curr) => {
        return acc + curr.total_spent;
    }, 0) / salesJSON.sales.length;

    const dailyRevenue = salesJSON.sales.reduce((acc: any, sale) => {
        acc[sale.purchase_date] = (acc[sale.purchase_date] || 0) + sale.total_spent;
        return acc
    }, {})

    const totalDays = Object.keys(dailyRevenue).length // get number of unique dates
    const totalRevenue = Object.values(dailyRevenue).reduce((acc, rev) => acc + rev, 0);
    const averageDailyRevenue = totalDays > 0 ? totalRevenue / totalDays : 0;

    const insertCommas = (x) => {
        x = x.toString();
        let pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x)) 
            x = x.replace(pattern, "$1,$2");
        return x;
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
        <p class=" text-2xl font-semibold ">£ {insertCommas(totalRevenue.toFixed(2))}</p>
    </div>
    <div class=" card ">
        <p class=" text-sm text-gray-200 font-medium ">Avg Spending Per Customer</p>
        <p class=" text-2xl font-semibold ">£ {averageSpending.toFixed(2)}</p>
    </div>
    <div class=" card ">
        <p class=" text-sm text-gray-200 font-medium ">Avg Daily Revenue</p>
        <p class=" text-2xl font-semibold">£ {insertCommas(averageDailyRevenue.toFixed(2))}</p>
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