import { gql, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

const Activities = () => {
  // wrap the query in gql template literal
  const QUERY = gql`
    query GetActivitiesBrief {
      activities(orderBy: activityDate_DESC, first: 100) {
        id
        activityDate
        title
        avgPace
        calories
        totalAscent
        totalDescent
        avgHr
        maxHr
        hours
        mins
        secs
        desc {
          text
        }
        coverPhoto {
          url
        }
      }
    }
  `

  // `useQuery` automatically executes the query
  // return the result with 3 properties
  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  // if (data) console.log(data.activities)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {data?.activities.map((item) => (
                <Link to={`/activities/${item.id}`} key={item.id}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg" src={item.coverPhoto.url} alt="running" />
                    </div>
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <span>{`${item.hours}:${item.mins}:${item.secs}`}</span>
                      <span className="text-sm text-gray-500">{` @ ${item.activityDate}`}</span>
                      <p className="text-indigo-600">{`${item.calories} Calories, ${item.totalAscent} 米爬升`}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{item.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
