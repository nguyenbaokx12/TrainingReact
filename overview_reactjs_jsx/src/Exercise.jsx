import './Exercise.css';
import 'bootstrap/dist/css/bootstrap.css';

function Exercise() {
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
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/sites/default/files/2024-02/elon_musk.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <div className="wrap-container">
                <h2>[Bài tập] Tạo Element thể hiện Sign in Form sử dụng Bootstrap</h2>
                <div className="container d-flex align-items-center text-center">
                    <div className="form-signin">
                        <form>
                            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                            <div className="form-floating">
                                <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
                                <label>Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
                                <label>Password</label>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" /> Remember me
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exercise;