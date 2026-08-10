import Header from './Header';
import './../css/Detail.css';

const Detail = ({ schedule, onBack, onEdit, onDelete }) => {
  
  // 삭제 버튼 클릭 시 실행할 함수
  const handleDeleteClick = () => {
    // confirm 창 띄우기 (확인을 누르면 true, 취소를 누르면 false 반환)
    const isConfirmed = window.confirm("정말로 이 일정을 삭제하시겠습니까?");

    if (isConfirmed) {
      // 사용자가 '확인'을 눌렀을 때만 삭제 함수 실행
      onDelete(schedule.id);
    }
  };

  return (
    <div className="page-container">
      <Header pageType="detail" onBack={onBack} onClose={() => alert('종료 버튼 클릭')} />
      <div className="detail-content">
        <div className="detail-box">
          <p><strong>인물:</strong> {schedule.person}</p>
          <p><strong>위치:</strong> {schedule.location}</p>
          <p><strong>날짜:</strong> {schedule.date}</p>
          <p><strong>시간:</strong> {schedule.time}</p>
          <p><strong>목적:</strong> {schedule.object}</p>
        </div>

        <div className="detail-actions">
          <button className="edit-btn" onClick={() => onEdit(schedule)}>수정페이지</button>
          {/* 수정된 삭제 핸들러 연결 */}
          <button className="delete-btn" onClick={handleDeleteClick}>삭제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;