import React from 'react';
import './styles/BadgeForm.css'

class Badgeform extends React.Component {
    //state = {}
    /*firstName: '',
    lastName: '',
    email: '',
    twitter: '',
    jobTitle: 'Development'
}; */
    /*    handleChange = e => {
            console.log({
            name: e.target.name,
            value: e.target.value
            })
        this.setState({
        [e.target.name]: e.target.value,
        })
       } */
    handleClick = e => {
        console.log("Button click");
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted')
        console.log(this.state)
    }

    render() {
        return (
            <div className="BadgeForm">
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.formValue.firstName} />
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValue.lastName} />
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            vale={this.props.formValue.email} />
                    </div>
                    <div className="form-group">
                        <label >Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValue.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label >Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValue.twitter}
                        />
                    </div>

                    <button type="button" onClick={this.handleClick} className="btn btn-picture">Profile picture uploaded</button>
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>)
    }
}

export default Badgeform;