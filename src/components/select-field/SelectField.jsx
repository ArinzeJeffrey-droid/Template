import React from 'react'


const SelectField = () => {
    return (
        <div className="form-group">
            <select name="" id="" className="form-control">
                <option defaultValue>Select Currency:</option>
                <option value="USD">USD</option>
                <option value="NGN">NGN</option>
                <option value="EURO">EURO</option>
            </select>
        </div>
    );
}

export default SelectField;