import './App.css';
import Alert from './components/Alert';
import Calculator from './components/Calculator';
import LoginLogout from './components/LoginLogout';

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          [Bài tập] Xây dựng Alert component
        </h1>
        <Alert title="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
      </div>

      <div>
        <h1>
          [Bài tập] Xây dựng ứng dụng máy tính đơn giản
        </h1>
        <Calculator />
      </div>

      <div>
        <h1>
          [Bài tập] Xử lý sự kiện Login/Logout với form đăng nhập bằng Bootstrap
          <LoginLogout />
        </h1>
      </div>

    </div>
  );
}

export default App;
