import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appDetails, onUpdateIsStarred} = props
  const {id, titleInput, dateInput, isStarred} = appDetails

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const formatedDate = format(new Date(dateInput), 'dd MMMM yyyy, EEEE')

  const onClickStar = () => {
    onUpdateIsStarred(id)
  }

  return (
    <li className="app-item">
      <div className="app-heading-container">
        <p className="app-name">{titleInput}</p>
        <button
          type="button"
          className="star-btn"
          testid="star"
          onClick={onClickStar}
        >
          <img src={starImgUrl} alt="star" className="star-img" />
        </button>
      </div>
      <p className="app-date">Date:{formatedDate}</p>
    </li>
  )
}

export default AppointmentItem
