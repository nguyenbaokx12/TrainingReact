import './App.css';

function App() {
  const students = [
    {
      name: 'John Doe',
      age: 21,
      address: 'UK'
    },
    {
      name: 'Jonathan',
      age: 34,
      address: 'VN'
    },
    {
      name: 'Sage',
      age: 34,
      address: 'TQ',
    }
  ]
  return (
    <div className="App">
      <div className="wrap-container">
        <h2>[Bài tập] Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng</h2>
        <p>Browser's details: {navigator.userAgent}</p>
      </div>

      <div className="wrap-container">
        <h2>[Bài tập] Tạo Element thể hiện bảng thông tin các sinh viên trong lớp học</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
          {students.map(student => (
            <tr>
              <th>{student.name}</th>
              <th>{student.age}</th>
              <th>{student.address}</th>

            </tr>
          )
          )}
        </table>
      </div>

      <div className="wrap-container">
        <h2>[Bài tập] Tạo Element thể hiện Profile Card (như hình minh hoạ)</h2>
        
      </div>
    </div>
  );
}

export default App;
