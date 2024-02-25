import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, FormControlLabel, Switch } from "@mui/material";
import Observable from "./Observable";
const ExampleObserverPattern = () => {

    // we create before the function ...

    function toastify(data) {
        toast(data, {
            position: "bottom-right",
            closeButton: false,
            autoClose: 2000,
            className: "test-notification"
        });
    }
    const logger = (data) => {
        console.log(`${Date.now()} ${data}`);
    }


    // ... and then subscribe them and put in the observers array
    Observable.subscribe(logger);
    Observable.subscribe(toastify);

    function handleClick() {
        Observable.notify("User clicked button!");
    }

    function handleToggle() {
        Observable.notify("User toggled switch!");
    }

    return(
        <>
            <div className="container">
                <Button onClick={handleClick}>
                    Click Me!
                </Button>
                <FormControlLabel
                control={<Switch name="" onChange={handleToggle} />}
                label="Toggle me!"
                />
                <ToastContainer/>
            </div>
        </>
    );
}

export default ExampleObserverPattern;