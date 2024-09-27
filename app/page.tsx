import { LineChart } from "@/components/charts/LineChart"

export default function Home() {
  return (
    <div className="govuk-width-container">
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl">Planning Data Land</h1>
            <p className="govuk-body">
              A magical land showing data for planning data.
            </p>
            <LineChart />
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
