import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import "./App.css";
import "../../styles/form.scss";

const FormNewPolicy = () => {
  const [insuranceFormData, setInsuranceFormData] = useState({
    customer_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInsuranceFormData({
      ...insuranceFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("", insuranceFormData);
      alert("Policy data submitted successfully");
      setInsuranceFormData({ customer_name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to submit form");
    }
  };

  return (
    <>
      <div className="registration_form">
        <div className="header">
          <h1>Insurance Registration From</h1>
          <Link to="/admin/customer"> back</Link>
        </div>

        <form className="container" onSubmit={handleSubmit}>
          <div className="form_ui">
            <div>
              <label htmlFor="customer_name">Customer Name:</label>
              <input
                type="text"
                name="Customer_name"
                placeholder="Enter Customer Name"
                value={insuranceFormData.customer_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={insuranceFormData.customer_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="policy_booking_date">Policy Booking Date:</label>
              <input
                type="date"
                placeholder="Enter Policy Booking Date"
                name="policy_booking_date"
                value={insuranceFormData.customer_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="customer_group">Customer Group:</label>
              <input
                type="text"
                placeholder="Enter Customer Group"
                name="customer_group"
                value={insuranceFormData.customer_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="insurer">Insurer:</label>
              <input
                type="text"
                placeholder="ICICI"
                name="insurer"
                value={insuranceFormData.customer_name}
                onChange={handleChange}
              />
            </div>

            {/*  insurance types*/}
            <div>
              <label htmlFor="insurance_type">Insurance Type:</label>
              <select id="insurance_type" name="insurance_type">
                <option value="two_wheeler">Car Insurance</option>
                <option value="harvester"> Bike Insurance</option>
                <option value="four_wheeler">Health Insurance</option>
                <option value="pvt_car">Life Insurance</option>
                <option value="commercial_vehicle">General Insurance</option>
                <option value="gcv">Travel Insurance</option>
                <option value="car">Other Insurance</option>
                {/* <option value="taxi">Taxi</option> */}
              </select>
            </div>
            <div>
              <label htmlFor="policy_type">Policy Type:</label>
              <select id="policy_type" name="policy_type">
                <option value="two_wheeler">Two Wheeler</option>
                <option value="harvester">Harvester</option>
                <option value="four_wheeler">Four Wheeler</option>
                <option value="pvt_car">PVT Car</option>
                <option value="commercial_vehicle">Commercial Vehicle</option>
                <option value="gcv">GCV</option>
                <option value="car">Car</option>
                <option value="taxi">Taxi</option>
              </select>
            </div>
            <div>
              <label htmlFor="policy_plan_type">Policy Plan Type:</label>
              <select id="policy_plan_type" name="policy_plan_type">
                <option value="first_party">First Party</option>
                <option value="third_party">Third Party</option>
                <option value="comprehansive">Comprehansive</option>
                <option value="saod">SAOD</option>
              </select>
            </div>
            <div>
              <label htmlFor="policy_number">Policy Number:</label>
              <input
                type="text"
                id="policy_number"
                placeholder="Enter Policy Number"
                name="policy_number"
              />
            </div>
            <div>
              <label htmlFor="ncb">NCB:</label>
              <input type="text" id="ncb" placeholder="Enter NCB" name="ncb" />
            </div>

            <div>
              <label htmlFor="vehicle_number">Vehicle Number:</label>
              <input
                type="text"
                id="vehicle_number"
                placeholder="Enter your Vehicle Number"
                name="Vehicle_number"
              />
            </div>
            <div>
              <label htmlFor="vehicle_make_and_model">Vehicle Model:</label>
              <input
                type="text"
                id="vehicle_make_and_model"
                placeholder="Enter your Vehicle Model"
                name="Vehicle_make_and_model"
              />
            </div>
            <div>
              <label htmlFor="policy_start">Policy Start:</label>
              <input
                type="date"
                id="policy_star"
                placeholder="Enter Policy Start Date"
                name="policy_star"
              />
            </div>
            <div>
              <label htmlFor="policy_end">Policy End:</label>
              <input
                type="date"
                id="policy_end"
                placeholder="Enter Policy End Date"
                name="policy_end"
              />
            </div>

            <div>
              <label htmlFor="idv">IDV:</label>
              <input type="text" id="idv" placeholder="Enter IDV" name="idv" />
            </div>
            <div>
              <label htmlFor="od">OD:</label>
              <input type="text" id="od" placeholder="Enter OD" name="od" />
            </div>
            <div>
              <label htmlFor="tp">TP:</label>
              <input type="text" id="tp" placeholder="Enter TP" name="tp" />
            </div>
            <div>
              <label htmlFor="gst_percentage">GST Percentage:</label>
              <input
                type="text"
                id="gst_percentage"
                placeholder="Enter GST Percentage"
                name="gst_percentage"
              />
            </div>
            <div>
              <label htmlFor="total_premeium">TOtal Premium:</label>
              <input
                type="text"
                id="total_premeium"
                placeholder="Enter Total Premium"
                name="total_premeium"
              />
            </div>
            <div>
              <label htmlFor="indirect_broker">Indirect Broker:</label>
              <input
                type="text"
                id="indirect_broker"
                placeholder="Enter Indirect Broker"
                name="indirect_broker"
              />
            </div>
            <div>
              <label htmlFor="rm_name">RM Name:</label>
              <input
                type="text"
                id="rm_name"
                placeholder="Enter RM Name"
                name="rm_name"
              />
            </div>
            <div>
              <label htmlFor="agent_name">Agent Name:</label>
              <input
                type="text"
                id="agent_name"
                placeholder="Enter Agent Name"
                name="agent_name"
              />
            </div>
            <div>
              <label htmlFor="agent_code">Agent Code:</label>
              <input
                type="text"
                id="agent_code"
                placeholder="Enter Agent Code"
                name="agent_code"
              />
            </div>
            <div>
              <label htmlFor="medium">Medium:</label>
              <select id="medium" name="medium">
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="other">Others</option>
              </select>
            </div>
            <div>
              <label htmlFor="given_payout">Given Payout:</label>
              <input
                type="text"
                id="given_payout"
                placeholder="Enter Given Payout"
                name="given_payout"
              />
            </div>
            <div>
              <label htmlFor="incoming_payout">Incoming Payout:</label>
              <input
                type="text"
                id="incoming_payout"
                placeholder="Enter Incoming Payout"
                name="incoming_payout"
              />
            </div>
            <div>
              <label htmlFor="payout_slab">Payout Slab:</label>
              <input
                type="text"
                id="payout_slab"
                placeholder="Enter Payout Slab"
                name="payout_slab"
              />
            </div>
            <div>
              <label htmlFor="policy_copy">Policy Copy:</label>
              <input
                type="text"
                id="policy_copy"
                placeholder="Enter Policy Copy"
                name="policy_copy"
              />
            </div>
            <div>
              <label htmlFor="payout">Payout:</label>
              <input
                type="text"
                id="payout"
                placeholder="Enter Payout"
                name="payout"
              />
            </div>
            <div>
              <label htmlFor="payin">Payin:</label>
              <input
                type="text"
                id="payin"
                placeholder="Enter Payin"
                name="payin"
              />
            </div>

            <button
            type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormNewPolicy;
