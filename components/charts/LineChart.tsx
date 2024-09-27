"use client"

import React, { Component } from "react"
import Highcharts from "highcharts"
import HighchartsExporting from "highcharts/modules/exporting"
import HighchartsReact from "highcharts-react-official"

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts)
}

const data = [
  {
    entry_month: "2018-05",
    records_count: 3,
  },
  {
    entry_month: "2019-11",
    records_count: 4,
  },
  {
    entry_month: "2019-12",
    records_count: 8,
  },
  {
    entry_month: "2020-01",
    records_count: 1,
  },
  {
    entry_month: "2020-02",
    records_count: 1,
  },
  {
    entry_month: "2020-03",
    records_count: 2,
  },
  {
    entry_month: "2020-09",
    records_count: 30,
  },
  {
    entry_month: "2020-10",
    records_count: 7,
  },
  {
    entry_month: "2020-11",
    records_count: 1,
  },
  {
    entry_month: "2020-12",
    records_count: 14,
  },
  {
    entry_month: "2021-01",
    records_count: 24,
  },
  {
    entry_month: "2021-03",
    records_count: 5,
  },
  {
    entry_month: "2021-05",
    records_count: 6,
  },
  {
    entry_month: "2021-06",
    records_count: 2,
  },
  {
    entry_month: "2021-09",
    records_count: 8,
  },
  {
    entry_month: "2021-10",
    records_count: 46,
  },
  {
    entry_month: "2021-11",
    records_count: 6,
  },
  {
    entry_month: "2021-12",
    records_count: 37,
  },
  {
    entry_month: "2022-01",
    records_count: 8,
  },
  {
    entry_month: "2022-02",
    records_count: 3,
  },
  {
    entry_month: "2022-05",
    records_count: 25,
  },
  {
    entry_month: "2022-06",
    records_count: 2,
  },
  {
    entry_month: "2022-07",
    records_count: 14,
  },
  {
    entry_month: "2022-09",
    records_count: 4,
  },
  {
    entry_month: "2022-10",
    records_count: 3,
  },
  {
    entry_month: "2022-11",
    records_count: 2,
  },
  {
    entry_month: "2023-07",
    records_count: 70,
  },
  {
    entry_month: "2023-08",
    records_count: 106,
  },
  {
    entry_month: "2023-09",
    records_count: 41,
  },
  {
    entry_month: "2023-10",
    records_count: 21,
  },
  {
    entry_month: "2023-11",
    records_count: 16,
  },
  {
    entry_month: "2023-12",
    records_count: 23,
  },
  {
    entry_month: "2024-01",
    records_count: 27,
  },
  {
    entry_month: "2024-02",
    records_count: 21,
  },
  {
    entry_month: "2024-03",
    records_count: 50,
  },
  {
    entry_month: "2024-04",
    records_count: 13,
  },
  {
    entry_month: "2024-05",
    records_count: 5,
  },
  {
    entry_month: "2024-06",
    records_count: 19,
  },
  {
    entry_month: "2024-07",
    records_count: 27,
  },
  {
    entry_month: "2024-08",
    records_count: 11,
  },
  {
    entry_month: "2024-09",
    records_count: 30,
  },
]

export class LineChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        title: {
          text: "Endpoints added by month",
        },
        yAxis: {
          title: {
            text: "Number of Endpoints",
          },
        },
        xAxis: {
          categories: data.map((d) => d.entry_month),
        },
        series: [
          /* {
            data: data.map((d) => d.records_count),
            name: "Endpoints added",
            type: "column",
          }, */
          {
            data: data.reduce((acc: number[], curr, index) => {
              if (index === 0) {
                acc.push(curr.records_count)
              } else {
                acc.push(acc[index - 1] + curr.records_count)
              }
              return acc
            }, []),
            name: "Total Endpoints added",
            type: "area",
          },
        ],
        plotOptions: {
          series: {
            cummalative: true,
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this),
              },
            },
          },
        },
      },
      hoverData: null,
    }
  }

  setHoverData = (e: { target: { category: any } }) => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }

  render() {
    const { chartOptions, hoverData } = this.state

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        <h3>Hovering over {hoverData}</h3>
      </div>
    )
  }
}
