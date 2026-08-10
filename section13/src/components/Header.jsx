import './../css/Header.css';

const Header = ({ pageType, onBack, onClose }) => {
  // pageType에 따라 헤더 중앙 텍스트 및 좌측 버튼 노출 여부 결정
  const getCenterTitle = () => {
    switch (pageType) {
      case 'home': return '홈 - 캘린더';
      case 'create': return '나의 일정 작성';
      case 'edit': return '나의 일정 수정';
      case 'detail': return '나의 일정';
      default: return '';
    }
  };

  return (
    <header className="app-header">
      <div className="header-left">
        {pageType !== 'home' && (
          <button className="back-btn" onClick={onBack}>이전</button>
        )}
      </div>
      <div className="header-center">
        <h2>{getCenterTitle()}</h2>
      </div>
      <div className="header-right">
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </header>
  );
};

export default Header;