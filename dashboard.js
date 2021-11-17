/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Launch Pool',
        '1st Weekly Trades[11-11-21]',
        '2nd Weekly Trades',
        '3rd Weekly Trades',
        '4th Weekly Trades',
        '5th Weekly Trades'
      ],
      datasets: [
      {
        label: 'Trade Value',
        data: [
          50000,
          50199
          
        ],
        lineTension: 0.1,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBackgroundColor: '#007bff'
      },
      {
        label: 'Fund Value',
        data: [
          50000,
          50000,
          51515
          
        ],
        lineTension: 0.1,
        backgroundColor: 'transparent',
        borderColor: '#f53794',
        pointBackgroundColor: '#007bff'
      }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: true
      }
    }
  })
})()
