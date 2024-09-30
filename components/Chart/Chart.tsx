"use client"

import React from "react"
import Highcharts from "highcharts"
import HighchartsExporting from "highcharts/modules/exporting"
import HighchartsReact from "highcharts-react-official"

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts)
}

export function Chart({ options }) {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
