import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom"

const Activities = () => {
  // wrap the query in gql template literal
  const QUERY = gql`
    query GetActivitiesBrief {
      activities(orderBy: activityDate_DESC, first: 100) {
        id
        activityDate
        desc {
          text
        }
      }
    }
  `

  // `useQuery` automatically executes the query
  // return the result with 3 properties
  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  if (data) console.log(data.activities)
  // if (data) const activities = {data.activities}

  return (
    <>
      <h1>test</h1>
      {data?.activities.map((item) => (
        <Link to={`/activities/${item.id}`} key={item.id}>
          <h3>{item.id}</h3>
          <h2>{item.activityDate}</h2>
          {/* <p>{item.desc}</p> */}
        </Link>
      ))}
    </>
  )
}

export default Activities
