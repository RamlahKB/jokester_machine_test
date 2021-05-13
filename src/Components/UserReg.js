import React, { Component } from 'react'

export default class UserReg extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fName : "", lName : "", mobNo : "", email : "", dob : "", address : "", city : "", state : "", pass : "", cPass : "", image : null,
            err1 : "", err2 : "", err3 : "", err4 : "", err5 : "", err6 : "", err7 : "", err8 : ""
        }
    }

    Handle=(e)=>{
        this.setState ({
            [e.target.name] : e.target.value
        });
    }

    FileUpload=(e)=>{
        this.setState({
            image : e.target.files[0]
        });
    }

    Valid=()=>{
        const {fName, lName, mobNo, email, pass, cPass, dob} = this.state;
        let err1="", err2="", err3="", err4="", err5="", err6="", err7="", err8="",
        nameRE = /^[A-Za-z]+$/,
        emailRE = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        passRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,20}$/;
        if (fName === "" || (!fName.match(nameRE)))
        {
            err1 = "*Please Enter Appropriate First Name";
        }
        if (lName === "" || (!lName.match(nameRE)))
        {
            err2 = "*Please Enter Appropriate Last Name";
        }
        if (mobNo === "")
        {
            err3 = "*Please Enter Mobile No.";
        }
        if (email === "" || (!email.match(emailRE)))
        {
            err4 = "*Please Enter Appropriate Email ID";
        }
        if (dob === "")
        {
            err5 = "*Please Enter Date of Birth";
        }
         if (pass === "")
        {
            err6 = "*Please Enter Password";
        }
        if (!pass.match(passRE))
        {
            err7 = "*Password should contain at least 8 characters and at most 20, at least one digit, one upper case alphabet, one lower case alphabet and no white spaces.";
        }
        if (pass !== cPass)
        {
            err8 = "*Please Enter Same Password as Above";
        }
        if (err1 || err2 || err3 || err4 || err5 || err6 || err7 || err8)
        {
            this.setState({
                err1, err2, err3, err4, err5, err6, err7, err8
            });     
            return false;       
        }
        return true;
    }    

    Submit=()=>{
        const isValid = this.Valid();
        if (isValid)
        {
            let obj = {
                firstName : this.state.fName,
                lastName : this.state.lName,
                mobileNo : this.state.mobNo,
                email : this.state.email,
                dob : this.state.dob,
                address: this.state.address,
                state : this.state.state,
                city : this.state.city,
                password : this.state.pass,
                image : this.state.image
            };
            console.log("User Data : ",obj);
            this.setState({
                fName : "", lName : "", mobNo : "", email : "", dob : "", address : "", city : "", state : "", pass : "", cPass : "", image : null
            });
        }
    }

    render() {
        const {fName, lName, email, pass, cPass, mobNo, dob, address, city, state, err1, err2, err3, err4, err5, err6, err7, err8} = this.state;
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-sm-10 col-xs-10 card py-3 px-5">
                        <h2 className="text-center text-info mb-4 mt-3">User Registration</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="validate">{err1}</div>
                                <div className="form-group mb-3">
                                    <input type="text" name="fName" className="form-control form-control-sm" value={fName} onChange={this.Handle} placeholder="First Name"/>
                                </div>
                                <div className="validate">{err2}</div>
                                <div className="form-group mb-3">
                                    <input type="text" name="lName" className="form-control form-control-sm" value={lName} onChange={this.Handle} placeholder="Last Name"/>
                                </div>
                                <div className="validate">{err3}</div>
                                <div className="form-group mb-3">
                                    <input type="number" name="mobNo" className="form-control form-control-sm" value={mobNo} onChange={this.Handle} placeholder="Mobile No."/>
                                </div>
                                <div className="validate">{err4}</div>
                                <div className="form-group mb-3">
                                    <input type="text" name="email" className="form-control form-control-sm" value={email} onChange={this.Handle} placeholder="Email ID"/>
                                </div>
                                <div className="validate">{err5}</div>
                                <div className="form-group mb-3">
                                    <input type="date" name="dob" className="form-control form-control-sm" value={dob} onChange={this.Handle} placeholder="Date of Birth"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input name="image" onChange={this.FileUpload} type="file" id="inputGroupFile03 form-control-sm" className="custom-file-input"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <input type="text" name="address" className="form-control form-control-sm" value={address} onChange={this.Handle} placeholder="Address"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input type="text" name="city" className="form-control form-control-sm" value={city} onChange={this.Handle} placeholder="City"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input type="text" name="state" className="form-control form-control-sm" value={state} onChange={this.Handle} placeholder="State"/>
                                </div>
                                <div className="validate">{err6}{err7}</div>
                                <div className="form-group mb-3">
                                    <input type="password" name="pass" className="form-control form-control-sm" placeholder="Password" value={pass} onChange={this.Handle} />
                                </div>
                                <div className="validate">{err8}</div>
                                <div className="form-group mb-3">
                                    <input type="password" name="cPass" className="form-control form-control-sm" value={cPass} onChange={this.Handle} placeholder="Confirm Password"/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-outline-primary" type="submit" onClick={this.Submit}>SUBMIT</button>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="mt-4 note">**Your data will not be disclosed.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
