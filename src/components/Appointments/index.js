import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', arrayList: []}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const object = {
      id: uuidv4(),
      titles: title,
      dates: date,
      isFavorite: false,
    }
    this.setState(prevState => ({
      arrayList: [...prevState.arrayList, object],
      title: '',
      date: '',
    }))
  }

  render() {
    const {date, arrayList} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <div className="title-container">
            <div className="input-container">
              <h1 className="heading">Add Appointment</h1>
              <form className="form-element" onSubmit={this.onAddAppointment}>
                <label className="label" htmlFor="inputTitle">
                  TITLE
                </label>
                <input
                  type="text"
                  className="name"
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                  id="inputTitle"
                />
                <label className="label" htmlFor="date" type="date">
                  DATE
                </label>
                <input
                  type="date"
                  className="date"
                  placeholder="dd/mm/yyyy"
                  onChange={this.onChangeDate}
                  value={date}
                />
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <div className="appointments">
            <h1 className="para">Appointments</h1>
            <button className="star-btn" type="submit">
              Starred
            </button>
          </div>
          <ul className="comment-holder">
            {arrayList.map(eachObject => (
              <AppointmentItem
                key={eachObject.id}
                arrayList={eachObject}
                toggleFavorite={this.toggleFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
