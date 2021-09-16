import {Component} from 'react'
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentList: [],
    starredFilterActive: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const newAppointment = {
      id: v4(),
      titleInput,
      dateInput,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onAddTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onAddDate = event => {
    this.setState({dateInput: event.target.value})
  }

  //   renderAppointmentItem = () => {
  //     const {appointmentList} = this.state
  //     return appointmentList.map(eachApp => (
  //       <AppointmentItem appDetails={eachApp} key={eachApp.id} />
  //     ))
  //   }

  onUpdateIsStarred = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachApp => {
        if (eachApp.id === id) {
          return {...eachApp, isStarred: !eachApp.isStarred}
        }
        return eachApp
      }),
    }))
  }

  onUpdateStarredFilter = () => {
    this.setState(prevState => ({
      starredFilterActive: !prevState.starredFilterActive,
    }))
  }

  getStarredList = () => {
    const {appointmentList} = this.state
    return appointmentList.filter(eachApp => eachApp.isStarred === true)
  }

  render() {
    const {
      titleInput,
      dateInput,
      appointmentList,
      starredFilterActive,
    } = this.state
    const filterClassName = starredFilterActive
      ? 'filter-filled'
      : 'filter-empty'

    const starredList = this.getStarredList()
    const finalAppointmentList = starredFilterActive
      ? starredList
      : appointmentList
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Add Appointment</h1>
          <div className="form-container">
            <form className="form" onSubmit={this.onAddAppointment}>
              <label className="lable" htmlFor="title">
                TITLE
              </label>{' '}
              <br />
              <input
                id="title"
                value={titleInput}
                type="text"
                className="input"
                placeholder="Title"
                onChange={this.onAddTitle}
              />
              <label className="lable" htmlFor="date">
                DATE
              </label>{' '}
              <br />
              <input
                id="date"
                value={dateInput}
                type="date"
                className="input"
                onChange={this.onAddDate}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-img"
            />
          </div>
          <hr className="line" />
          <div className="appointments-heading-container">
            <h1 className="app-heading">Appointments</h1>
            <button
              type="button"
              className={`starred-btn ${filterClassName}`}
              onClick={this.onUpdateStarredFilter}
            >
              Starred
            </button>
          </div>
          <ul className="appointmentsItems-container">
            {finalAppointmentList.map(eachApp => (
              <AppointmentItem
                appDetails={eachApp}
                key={eachApp.id}
                onUpdateIsStarred={this.onUpdateIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
