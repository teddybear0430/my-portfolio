export const chartData = {
    labels: [
        'HTML',
        'CSS',
        'SCSS',
        'JavaScript',
        'React',
        'PHP',
        'Laravel',
        'MySQL',
        'WordPress',
        'Git'
    ],
    datasets: [
        {
            label: 'スキルレベル',
            data: [90,90,75,70,60,65,50,50,80,55],
            backgroundColor: [
                '#ff7f50',
                '#0080ff',
                '#ff66ff',
                '#ffe14d',
                '#66ffff',
                '#5270cc',
                '#ff4f1a',
                '#4479a1',
                '#007db7',
                '#ff4500',
            ]
        }
    ]
};

export const options = {
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            ticks: {
                min: 0,
                max: 100,
                stepSize: 10,
                fontSize: 10,
            }
        }],
        yAxes: [{
            barPercentage: 0.8, 
        }],
    }
};
