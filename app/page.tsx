import { Chart } from "@/components/Chart/Chart"

export default function Home() {
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

  return (
    <div className="govuk-width-container">
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl">Planning Data Land</h1>
            <p className="govuk-body">
              A magical land showing data for planning data.
            </p>
            <Chart
              options={{
                title: {
                  text: "Total endpoints by month",
                },
                yAxis: {
                  title: {
                    text: "Number of endpoints",
                  },
                },
                xAxis: {
                  categories: data.map((d) => d.entry_month),
                  title: {
                    text: "Cumulative endpoints by month",
                  },
                },
                series: [
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
                    cumulative: true,
                  },
                },
              }}
            />
          </div>
          <div className="govuk-grid-column-one-third">
            <h2 className="govuk-heading-m">Side panel</h2>
            <p className="govuk-body">
              This is a paragraph inside a one-third wide column
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
