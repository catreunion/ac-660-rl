import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"

const ActivityDetails = () => {
  const { id } = useParams()
  const QUERY = gql`
    query GetActivity($id: ID!) {
      activity(where: { id: $id }) {
        title
        activityDate
        avgHr
        avgPace
        calories
        hours
        id
        maxHr
        mins
        secs
        totalAscent
        totalDescent
        desc {
          text
        }
      }
    }
  `
  const { loading, error, data } = useQuery(QUERY, { variables: { id } })

  if (loading) return null
  if (error) return `Error! ${error}`

  // return <pre>{JSON.stringify(data, null, 2)}</pre>
  return (
    <>
      <dir>LocationDetails</dir>
      <pre>{JSON.stringify(data.activity.title, null, 2)}</pre>
      <pre>{JSON.stringify(data.activity.desc.text, null, 2)}</pre>
      <pre>{JSON.stringify(data.activity, null, 2)}</pre>
      {/* <p>{data.location.name}</p> */}
    </>
  )
}

export default ActivityDetails
