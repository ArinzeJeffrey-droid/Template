import React from 'react'
import Button from '../components/button/Button';
import Preview from '../components/preview/Preview';
import SelectField from '../components/select-field/SelectField';
import Table from '../components/table/Table';


const HomePage = () => {
    return ( 
        <>
            <div className="section-wrapper p-3">
                <Preview/>
                </div>
                <div className="p-3 select-container">
                    <SelectField/>
                </div>
                <div className="btn-container mt-3">
                    <div className="btn-inner">
                        <Button name="Send"/>
                        <Button name="Receive"/>
                    </div>
            </div>
            <Table/>
        </>
    );
}

export default HomePage;