// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsData: [],
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchData = await response.json()
    const updatedData = fetchData.teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      imageUrl: eachData.team_image_url,
    }))

    this.setState({
      teamsData: updatedData,
      isLoading: false,
    })
  }

  renderTeamsList = () => {
    const {teamsData} = this.state

    return (
      <ul className="teams-list">
        {teamsData.map(team => (
          <TeamCard teamData={team} key={team.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-route-container">
        <div className="teams-list-container">
          <div className="ipl-dashboard-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home
