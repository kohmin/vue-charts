import { Bubble } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
            datasets: []
        },
        options: {
          title: {
            display: true,
            text: 'GDP, happiness and population'
          }, 
          scales: {
            yAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Happiness"
              }
            }],
            xAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "GDP (PPP)"
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: false,
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('populations').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            var newDataset = {
              label: doc.data().country,
              backgroundColor: doc.data().backgroundColor,
              borderColor: doc.data().borderColor,
              data: []
            };
            newDataset.data.push(doc.data().data)
            this.datacollection.datasets.push(newDataset);
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  mounted() {
    this.fetchItems()
  }
}
