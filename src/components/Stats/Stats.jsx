import { FaStar } from 'react-icons/fa';
import './Stats.css';

function Stats() {
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__items">
          <div className="stats__item">
            <div className="stats__amount">
              <span className="stats__amount--number">32,000+</span>
            </div>
            <div className="stats__desc">
              <span className="stats__desc--text">Experienced tutors</span>
            </div>
          </div>

          <div className="stats__item">
            <div className="stats__amount">
              <span className="stats__amount--number">300,000+</span>
            </div>
            <div className="stats__desc">
              <span className="stats__desc--text">5-star tutor reviews</span>
            </div>
          </div>

          <div className="stats__item">
            <div className="stats__amount">
              <span className="stats__amount--number">120+</span>
            </div>
            <div className="stats__desc">
              <span className="stats__desc--text">Subjects taught</span>
            </div>
          </div>

          <div className="stats__item">
            <div className="stats__amount">
              <span className="stats__amount--number">180+</span>
            </div>
            <div className="stats__desc">
              <span className="stats__desc--text">Tutor nationalities</span>
            </div>
          </div>

          <div className="stats__item">
            <div className="stats__amount stats__vote">
              <span className="stats__amount--number">4.8</span>
              <div className="stats__amount--icon">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="stats__desc">
              <span className="stats__desc--text">on the App Store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
