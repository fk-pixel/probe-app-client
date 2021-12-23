const donutData =
{
    chart: {
        type: 'donut'
    },
    colors: ["#781D42", "#A3423C", "#DE834D", "#F0D290","#519259","#F0BB62" /* "#cfd11a", "#1dd3b0",
             "#3c1642", "#086375", "#affc41", "#b2ff9e", "#a8dadc", "#e63946" */],
    labels: [],

    stroke: {
        show: false,
        width: 0
    },
    plotOptions: {
        pie: {
            donut: {
                size: '45%'
            }
        }
    },
    legend: {
        show: true,
        position: "bottom"
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
}



export { donutData }
