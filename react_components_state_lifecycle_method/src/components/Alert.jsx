import 'bootstrap/dist/css/bootstrap.css';

function Alert(props) {
    return (
        <div className="App">
            <div className="alert alert-warning" role="alert">
                {props.title}
            </div>
        </div>
    )
}

export default Alert;