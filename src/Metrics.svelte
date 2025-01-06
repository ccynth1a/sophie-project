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
<p>
    Avg Age: {averageAge}
    Avg Spending Per Customer: {averageSpending}
    Avg Daily Revenue: {averageDailyRevenue}
</p>