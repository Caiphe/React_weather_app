import React from 'react'

const Form = props => (
    <form onSubmit={props.getWeather}>
        <p className="Form_label">Complete the Form</p>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
        <button> Get Weather</button>
    </form>
);
export default Form
