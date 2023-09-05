import React from 'react';
import "./validationResult.css"

//Display either correct or incorrect for credit card format
export const ValidationResult = ({result}) => {
    if(result){
        return(
            <div className="correct">Credit Card is valid!</div>
        );  
    } else {
        return (
            <div className="incorrect">Credit Card is invalid!</div>
        )
    }
}