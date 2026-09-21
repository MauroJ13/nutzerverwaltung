import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCakeCandles,
  faEnvelope,
  faGlobe,
  faPhone,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import "./UserCard.scss";
import type { User } from "../../types/User";

type UserCardProps = {
  user: User;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function UserCard({ user }: UserCardProps) {
  return (
    <Link to={`/edit/${user.id}`} className="usercard-link">
      <div className="usercard-container">
        <div className="usercard-header">
          {user.photo ? (
            <img
              className="usercard-header-image"
              src={user.photo}
              alt={user.name}
            />
          ) : (
            <div className="usercard-header-fallback">
              {getInitials(user.name)}
            </div>
          )}
        </div>

        <div className="usercard-body">
          <div className="usercard-body-title">
            <strong>{user.name}</strong>
          </div>

          <div className="usercard-body-content">
            <div className="usercard-data-list">
              <div className="usercard-data-list-item">
                <span className="usercard-data-icon">
                  <FontAwesomeIcon icon={faCakeCandles} />
                </span>
                <span className="usercard-data-text">{user.dob}</span>
              </div>

              <div className="usercard-data-list-item">
                <span className="usercard-data-icon">
                  <FontAwesomeIcon icon={faVenusMars} />
                </span>
                <span className="usercard-data-text">{user.gender}</span>
              </div>

              <div className="usercard-data-list-item">
                <span className="usercard-data-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="usercard-data-text">{user.email}</span>
              </div>
            </div>
            <div className="usercard-data-list">
              <div className="usercard-data-list-item">
                <span className="usercard-data-icon">
                  <FontAwesomeIcon icon={faAddressBook} />
                </span>
                <span className="usercard-data-text">{user.address}</span>
              </div>

              <div className="usercard-data-list-item">
                <span className="usercard-data-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="usercard-data-text">{user.phone}</span>
              </div>

              <div className="usercard-data-list-item">
                <span className="usercard-data-icon">
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
                <span className="usercard-data-text">{user.web}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
