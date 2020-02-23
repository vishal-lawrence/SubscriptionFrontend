import React from 'react';
import axios from 'axios';

class SubscriptionForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            amount : '',
            subscriptionType : '',
            weekOrMonthDay : '',
            fromDate : '',
            toDate : ''
        }

    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

        axios.post('http://localhost:8080/api/subscriptions', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {amount, subscriptionType, weekOrMonthDay, fromDate, toDate} = this.state
        return(
            <div>
            <form onSubmit={this.submitHandler}>
                <div>
                    <h2>Create A Subscription</h2>
                </div>
                <div>
                <label>
                Enter Amount
                </label>
                                
                <input type="text" name="amount" value={amount} onChange={this.changeHandler}/>  
                </div>              

                <div>
                <label>
                Select Subscription Type  
                </label>            
                
                <select name="subscriptionType" value={subscriptionType} onChange={this.changeHandler}>
                    <option value="DAILY">DAILY</option>
                    <option value="WEEKLY">WEEKLY</option>
                    <option value="MONTHLY">MONTHLY</option>
                </select>
                </div>


                <div>
                <label>
                Enter Week/Month Day
                </label>
                <input type="text" name="weekOrMonthDay" value={weekOrMonthDay} onChange={this.changeHandler}/>
                </div>

                <div>
                <label>
                Enter From Date
                </label>
                <input type="text" name="fromDate" value={fromDate} onChange={this.changeHandler}/>
                </div>

                <div>
                <label>
                Enter To Date
                </label>
                
                <input type="text" name="toDate" value={toDate} onChange={this.changeHandler}/>
                </div>
                
                <br></br>
                <br></br>
                <div>
                <button type="submit">Create Subscription</button>
                </div>
            </form> 

            
            <div>
                <h2>Subscription Details</h2>
                    
            </div>          
            </div>
            
            
        );
    }
}

export default SubscriptionForm;