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
</script>

<!--PHOEBE GO WILD HERE-->
<div class=" gap-4 grid grid-cols-4 text-white ">
    <div class=" card ">
        Avg Age: {averageAge}
    </div>
    <div class="card">
        Total Revenue: {totalRevenue}
    </div>
    <div class=" card ">
        Avg Spending Per Customer: {averageSpending}
    </div>
    <div class=" card ">
        Avg Daily Revenue: {averageDailyRevenue}
    </div>
</div>