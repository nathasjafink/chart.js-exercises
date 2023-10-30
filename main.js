const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx,{
    data: {
        datasets: [{
            type: 'line',
            label: 'TikTok views',
            data: [24,75,90,70]
        },{
            type: 'line',
            label: 'Youtube views',
            data: [67,69,59,82],
            borderColor: ['cyan']
        }],
        labels: ['Monday', 'Tuesday','Wednesday','Thursday'],
    },
    options: {
        responsive: false,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
})