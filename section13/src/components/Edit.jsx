import  { useState } from 'react';
import Header from './Header';
import './../css/Edit.css';

const Edit = ({ schedule, onBack, onUpdate }) => {
  // 데이터 그대로 불러오기 (초기값 설정)
  const [form, setForm] = useState(schedule);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate(form);
  };

  return (
    <div className="page-container">
      <Header pageType="edit" onBack={onBack} onClose={() => alert('종료 버튼 클릭')} />
      <form className="form-content" onSubmit={handleUpdateSubmit}>
        <div className="input-group">
          <label>인물</label>
          <input type="text" name="person" value={form.person} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>위치</label>
          <input type="text" name="location" value={form.location} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>날짜</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>시간</label>
          <input type="time" name="time" value={form.time} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>목적</label>
          <input type="object" name="object" value={form.object} onChange={handleChange} />
        </div>
        
        <div className="edit-actions">
          <button type="button" className="cancel-btn" onClick={onBack}>취소하기</button>
          <button type="submit" className="update-btn">수정하기</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;