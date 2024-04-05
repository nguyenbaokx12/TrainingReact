import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


function Calculator() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [result, setResult] = useState(0);

    const handleChange1 = (event) => {
        setValue1(event.target.value)
    };

    const handleChange2 = (event) => {
        setValue2(event.target.value)
    }

    const handlePlus = () => {
        setResult(parseInt(value1) + parseInt(value2))
        console.log(result)
    }

    const handleMinus = () => {
        setResult(parseInt(value1) - parseInt(value2))
    }

    const handleMultiply = () => {
        setResult(parseInt(value1) * parseInt(value2))
    }

    const handleDivision = () => {
        setResult(parseInt(value1) / parseInt(value2))
    }

    return (
        < div className="App">
            <form action="#" style={{ width: "400px", padding: "10px", border: "1px solid" }}>
                <input className='form-control' type="number" name="num1" onChange={handleChange1} value={value1} /><br />
                <input className='form-control' type="number" name="num2" onChange={handleChange2} value={value2} /><br />
                <p className='form-control' ><b>Kết quả: </b> {result}</p> <br />
                <div className='d-flex justify-content-between align-items-center'>
                    <button onClick={handlePlus} className="btn btn-outline-primary">+</button>
                    <button onClick={handleMinus} className="btn btn-outline-primary">-</button>
                    <button onClick={handleMultiply} className="btn btn-outline-primary">x</button>
                    <button onClick={handleDivision} className="btn btn-outline-primary">/</button>
                </div>
            </form>
        </ div>
    )
}

export default Calculator;