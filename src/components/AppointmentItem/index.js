import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {arrayList} = props

  const {id, titles, dates, isFavorite} = arrayList

  const dateRes = format(new Date(dates), 'dd MMMM yyyy, EEEE')

  const imgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-container" key={id}>
      <div>
        <div className="content">
          <h1 className="title">{titles}</h1>
          <img src={imgUrl} className="star-image" />
        </div>
        <p className="date">Date:{dateRes}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
