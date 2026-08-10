import Header from './Header';
import './../css/Home.css';

const Home = ({ schedules, onNavigate, onSelectSchedule }) => {
  return (
    <div className="page-container">
      <Header pageType="home" onClose={() => alert('종료 버튼 클릭')} />
      <div className="home-content">
        <div className="action-buttons">
          <button className="primary-btn" onClick={() => onNavigate('create')}>일정 작성하기</button>
        </div>
        
        <h3>일정 목록</h3>
        <div className="schedule-list">
          {schedules.length === 0 ? (
            <p className="no-data">등록된 일정이 없습니다.</p>
          ) : (
            schedules.map((item) => (
              <div 
                key={item.id} 
                className="schedule-card"
                onClick={() => onSelectSchedule(item)}
              >
                <div className="schedule-info"><strong>인물:</strong> {item.person}</div>
                <div className="schedule-info"><strong>위치:</strong> {item.location}</div>
                <div className="schedule-info"><strong>날짜:</strong> {item.date}</div>
                <div className="schedule-info"><strong>시간:</strong> {item.time}</div>
                <div className="schedule-info"><strong>목적:</strong> {item.object}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;