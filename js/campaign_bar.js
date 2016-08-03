
$( document ).ready(function() {
    console.log( "ready!" );

// Defining the line chart

$('#bread-line-graph').highcharts({
  colors: ['#006890','#DF7A00','#696969','#AAB300', '#899F99', '#AAB300', '#FFF','#6AF9C4'],

  chart: {
    backgroundColor: '#f6f6f6',
    type: 'column',
    height: 350,
    spacingBottom: 20,
    style: {
      fontFamily: 'Gotham'
    },
    events: {
            redraw: function(){
                var chart = this;
                img.attr({
                    x: chart.plotLeft + chart.plotWidth - 150,
                    y: chart.plotTop + chart.plotHeight - 300
                })
            }
        }
    },
  credits: {
      enabled: true,
      text: 'SOURCE: Center for Responsive Politics',
      href: 'https://www.opensecrets.org/industries/totals.php?cycle=2016&ind=N01',
      style:{
        fontFamily: 'Calibri',
        fontSize: '10pt',
        color: "gray"
      },
      position: {
        y: 0
      }
    },
  exporting: { 
      enabled: false,
      scale: 1,
    },
  title: {
    text: 'Congressional Campaign Contributions from Food and Beverage Industry',
    useHTML: true,
    widthAdjust: -400,
    margin: 5, 
    align: 'left',
    y: 10,
    style: {
      color: '#513C40',
      fontSize: '18px'
    } 
  },
  subtitle: {
    text: '<i></i>',
    useHTML: true, 
    widthAdjust: -400,
    margin: 0,
    y: 27,
    align: 'left',
    style: {
      color: "#C0C0BB",
      fontSize: "14px"
    }
  },
  xAxis: {
    categories: ['2000','2002', '2004', '2006', '2008', '2010',
    '2012','2014','2016'
    ],
    title: {
      text: 'Year'
    }
  },
  yAxis: {
    title: {
      text: 'Million USD',
      useHTML: true
    },
    labels: {
                format: '${value}'
            },
    min: 0,
    max: 30,
    area: {
      dataLabels: {
        enabled: true,
                }
      }
  },
  plotOptions: {
    series:{
      connectNulls: true
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }],
    gridLineDashStyle: 'dot'
  },
  tooltip: {
    valuePrefix: '$',
    valueSuffix: ' million',
    backgroundColor: 'rgba(255, 255, 255, .4)',
    borderWidth: 0,
    shadow: false
  },
  legend: {
    enabled: false,
    floating: true,
    layout: 'horizontal',
    align: 'right',
    verticalAlign: 'bottom',
    y: -50,
    x: -20,
    borderWidth: 0
  },
  series: [{
    name: '',
    data: [14.1, 12.3, 14.8, 12.5, 19.2, 15.5, 27.3, 17.3, 10.9]
  }
  ]
},

// Rendering the Bread for the World Logo

 function (chart) { // on complete

        var top = chart.plotTop + chart.plotHeight - 282, 
        left = chart.plotLeft + chart.plotWidth - 150;

        img = chart.renderer.image('data:image/png;base64,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', left, top, 150, 40)
            .add();

    });

// Programmatically-defined buttons

$(".chart-export").each(function() {
  var jThis = $(this),
      chartSelector = jThis.data("#bread-line-graph"),
      chart = $("#bread-line-graph").highcharts();

  $("*[data-type]", this).each(function() {
    var jThis = $(this),
        type = jThis.data("type");
    if(Highcharts.exporting.supports(type)) {
      jThis.click(function() {
        chart.exportChartLocal({ type: type });

      });
    }
    else {
      jThis.attr("disabled", "disabled");
    }
  });
});

//closing document.ready

});


