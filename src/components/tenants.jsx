import React from "react";
import Nav from "./Nav";
import SearchIcon from "../assets/img/SearchIcon.svg";
import "../styles/tenants.css";

const Tenant = () => {
  return (
    <div>
      <Nav />
      <div className="d-flex">
        <div className="container tenantsContainer">
          <div className="d-flex align-items-center justify-content-start">
            <h2 className="tenantsText">tenants</h2>
            <div className="form-check ms-3 mb-1">
              <label className="d-flex align-items-center mb-1">
                <input
                  type="checkbox"
                  name="Checkbox square-checkbox"
                  className="form-check-input"
                />
                <p className="m-2 mb-1 tenantShow">
                  Show only tenants with missed payment{" "}
                  <span className="filterMissedPayment">2</span>
                </p>
              </label>
            </div>
          </div>
        </div>
        <div className="search-container d-flex align-items-center justify-content-end mt-4">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <img className="SearchIcon" src={SearchIcon} alt="SearchIcon" />
        </div>
      </div>
    </div>
  );
};

export default Tenant;
