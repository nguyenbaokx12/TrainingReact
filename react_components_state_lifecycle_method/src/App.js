import './App.css';
import Alert from './components/Alert';
import Calculator from './components/Calculator';

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

    </div>
  );
}

export default App;
