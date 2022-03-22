import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <div className="App">
            <header className="App-header">
                CISC275: WELCOME TO GROUP 9 WEBSITE
            </header>
            <span>
                <Button onClick={() => setValue(1 + value)}>Add One</Button>
            </span>
            <span>
                <Button onClick={() => setValue(value - 1)}>
                    Subtract One
                </Button>
                Count = {value}
            </span>
        </div>
    );
}

export default App;
