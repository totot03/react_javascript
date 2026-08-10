import { useState } from 'react';
import Header from './Header';
import './../css/Write.css';

const Write = ({ onBack, onSave }) => {
  const [form, setForm] = useState({
    person: '',
    location: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.person || !form.date) {
      alert('인물과 날짜는 필수 입력입니다.');
      return;
    }
    onSave(form);
  };

  return (
    <div className="page-container">
      <Header pageType="create" onBack={onBack} onClose={() => alert('종료 버튼 클릭')} />
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>인물</label>
          <input type="text" name="person" value={form.person} onChange={handleChange} placeholder="인물 입력" />
        </div>
        <div className="input-group">
          <label>위치</label>
          <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="위치 입력" />
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
        <button type="submit" className="submit-btn">작성 완료</button>
      </form>
    </div>
  );
};

export default Write;