// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatch

    return (
      <div className="latest-match-container">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-details-logo-container">
            <div className="latest-match-details-1">
              <p className="latest-match-team-name">{competingTeam}</p>
              <p className="latest-match-date">{date}</p>
              <p className="match-details">{venue}</p>
              <p className="match-details">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="latest-match-team-logo"
              alt={`latest match ${competingTeam}`}
            />
          </div>

          <div className="latest-match-details-2">
            <div className="match-info-item">
              <p className="latest-match-details-label">First Innings</p>
              <p className="latest-match-details-value">{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Second Innings</p>
              <p className="latest-match-details-value">{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Man Of The Match</p>
              <p className="latest-match-details-value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Umpires</p>
              <p className="latest-match-details-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
