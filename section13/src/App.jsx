import { useState } from 'react';
import Home from './components/Home';
import Write from './components/Write';
import Detail from './components/Detail';
import Edit from './components/Edit';
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [schedules, setSchedules] = useState([
    { id: 1, person: '김철수', location: '서울 강남구', date: '2026-06-10', time: '14:00', object: '식사' }
  ]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  // 일정 추가
  const handleSaveSchedule = (newSchedule) => {
    setSchedules([...schedules, { ...newSchedule, id: Date.now() }]);
    setCurrentView('home');
  };

  // 일정 삭제
  const handleDeleteSchedule = (id) => {
    setSchedules(schedules.filter(item => item.id !== id));
    setCurrentView('home');
  };

  // 일정 수정 반영
  const handleUpdateSchedule = (updatedSchedule) => {
    setSchedules(schedules.map(item => item.id === updatedSchedule.id ? updatedSchedule : item));
    setCurrentView('home');
  };

  return (
    <div>
      {currentView === 'home' && (
        <Home 
          schedules={schedules} 
          onNavigate={(view) => setCurrentView(view)} 
          onSelectSchedule={(schedule) => {
            setSelectedSchedule(schedule);
            setCurrentView('detail');
          }}
        />
      )}
      {currentView === 'create' && (
        <Write 
          onBack={() => setCurrentView('home')} 
          onSave={handleSaveSchedule} 
        />
      )}
      {currentView === 'detail' && (
        <Detail 
          schedule={selectedSchedule} 
          onBack={() => setCurrentView('home')} 
          onEdit={(schedule) => {
            setSelectedSchedule(schedule);
            setCurrentView('edit');
          }}
          onDelete={handleDeleteSchedule}
        />
      )}
      {currentView === 'edit' && (
        <Edit 
          schedule={selectedSchedule} 
          onBack={() => setCurrentView('detail')} 
          onUpdate={handleUpdateSchedule} 
        />
      )}
    </div>
  );
}

export default App;