import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import SearchIcon from "../assets/img/SearchIcon.svg";
import Edit from "../assets/img/Edit.svg";
import Delete from "../assets/img/Delete.svg";
import CheckMark from "../assets/img/CheckMark.svg";
import tenantsData from "./tenantsData";
import "../styles/tenants.css";

const Tenant = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [tenants, setTenants] = useState(tenantsData);
  const [selectedRowData, setSelectedRowData] = useState(null);


  const handleEdit = (rowData) => {
    setSelectedRowData(rowData);
    setIsEditOpen(true);
  };

  const handleDelete = () => {
    // Lógica para borrar la tabla
  };

  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="d-flex w-100">
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
              className="form-control form-control-sm"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <img className="SearchIcon" src={SearchIcon} alt="SearchIcon" />
          </div>
        </div>
        <div className="container-fluid tenants d-flex justify-content-start">
          <div className="row container-fluid">
            <div className="col table-container">
              <table className="table mt-4 w-100">
                <thead>
                  <tr>
                    <td>
                      <p className="lead name p1">NAME</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1">LISTINGS</p>
                    </td>
                    <td>
                      <p className="lead status p1">PAYMENT STATUS</p>
                    </td>
                    <td>
                      <p className="lead email p1">EMAIL</p>
                    </td>
                    <td>
                      <p className="lead phone p1">PHONE</p>
                    </td>
                    <td>
                      <p className="lead contract p1">CONTRACT DATES</p>
                    </td>
                    <td>
                      <p className="lead bgcheck p1">BACKGROUND CHECK</p>
                    </td>
                    <td>
                      <p className="lead actions p1">ACTIONS</p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td>
                      <p className="lead name p1 h">Maria Kramer</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1 h">46780</p>
                    </td>
                    <td>
                      <p className="lead status p1 h">Paid Feb 1, 2023</p>
                    </td>
                    <td>
                      <p className="lead email p1 h email1">
                        marianie@gmail.com
                      </p>
                    </td>
                    <td>
                      <p className="lead phone p1 h">530-521-7450</p>
                    </td>
                    <td>
                      <p className="lead contract p1 h">
                        Mar 12, 2022 - Mar 12, 2023
                      </p>
                    </td>
                    <td></td>
                    <td>
                      <button
                        className="Edit mt-2 ms-4"
                        onClick={() => handleEdit(selectedRowData)}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <Link to="/delete" onClick={handleDelete}>
                        <img
                          className="delete ms-2"
                          src={Delete}
                          alt="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <p className="lead name p1 h">Hamish Mago</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1 h">57478</p>
                    </td>
                    <td>
                      <p className="lead status p1 h">Paid Feb 1, 2023</p>
                    </td>
                    <td>
                      <p className="lead email p1 h email1">
                        hamishmagogmail.com
                      </p>
                    </td>
                    <td>
                      <p className="lead phone p1 h">310-480-6714</p>
                    </td>
                    <td>
                      <p className="lead contract p1 h">
                        Dec 10, 2022 - Dec 10, 2024
                      </p>
                    </td>
                    <td>
                      <img
                        className="checkMark"
                        src={CheckMark}
                        alt="CheckMark"
                      />
                    </td>
                    <td>
                      <button
                        className="Edit mt-2 ms-4"
                        onClick={() => handleEdit(selectedRowData)}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <Link to="/delete" onClick={handleDelete}>
                        <img
                          className="delete ms-2"
                          src={Delete}
                          alt="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <p className="lead name p1 h">Alessia Beelzebub</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1 h">47474</p>
                    </td>
                    <td>
                      <p className="lead status p1 h">Paid Feb 1, 2023</p>
                    </td>
                    <td>
                      <p className="lead email p1 h email1">
                        alessiabeelzebub@gmail.com
                      </p>
                    </td>
                    <td>
                      <p className="lead phone p1 h">818-636-0698</p>
                    </td>
                    <td>
                      <p className="lead contract p1 h">
                        May 29, 2022 - May 29, 2023
                      </p>
                    </td>
                    <td></td>
                    <td>
                      <button
                        className="Edit mt-2 ms-4"
                        onClick={() => handleEdit(selectedRowData)}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <Link to="/delete" onClick={handleDelete}>
                        <img
                          className="delete ms-2"
                          src={Delete}
                          alt="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <p className="lead name p1 h">Monroe Ally</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1 h">67926</p>
                    </td>
                    <td>
                      <p className="lead status p1 h">Paid Feb 1, 2023</p>
                    </td>
                    <td>
                      <p className="lead email p1 h email1">
                        monroeally@gmail.com
                      </p>
                    </td>
                    <td>
                      <p className="lead phone p1 h">951-385-6842</p>
                    </td>
                    <td>
                      <p className="lead contract p1 h">
                        Mar 12, 2022 - Mar 12, 2023
                      </p>
                    </td>
                    <td>
                      <img
                        className="checkMark"
                        src={CheckMark}
                        alt="CheckMark"
                      />
                    </td>
                    <td>
                      <button
                        className="Edit mt-2 ms-4"
                        onClick={() => handleEdit(selectedRowData)}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <Link to="/delete" onClick={handleDelete}>
                        <img
                          className="delete ms-2"
                          src={Delete}
                          alt="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <p className="lead name p1 h">Nellie Velda</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1 h">13425</p>
                    </td>
                    <td>
                      <p className="lead status p1 h">Paid Feb 1, 2023</p>
                    </td>
                    <td>
                      <p className="lead email p1 h email1">
                        nellievelda@gmail.com
                      </p>
                    </td>
                    <td>
                      <p className="lead phone p1 h">818-730-8775</p>
                    </td>
                    <td>
                      <p className="lead contract p1 h">
                        Sep 1, 2022 - Sep 1, 2023
                      </p>
                    </td>
                    <td>
                      <img
                        className="checkMark"
                        src={CheckMark}
                        alt="CheckMark"
                      />
                    </td>
                    <td>
                      <button
                        className="Edit mt-2 ms-4"
                        onClick={() => handleEdit(selectedRowData)}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <Link to="/delete" onClick={handleDelete}>
                        <img
                          className="delete ms-2"
                          src={Delete}
                          alt="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <p className="lead name p1 h">Freda Katherine</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1 h">24235</p>
                    </td>
                    <td>
                      <p className="lead status p1 h missed">
                        Missed Payment Feb 1, 2023
                      </p>
                    </td>
                    <td>
                      <p className="lead email p1 h email1">
                        fredaka@gmail.com
                      </p>
                    </td>
                    <td>
                      <p className="lead phone p1 h">951-200-4891</p>
                    </td>
                    <td>
                      <p className="lead contract p1 h">
                        Aug 12, 2022 - Aug 12, 2024
                      </p>
                    </td>
                    <td>
                      <img
                        className="checkMark"
                        src={CheckMark}
                        alt="CheckMark"
                      />
                    </td>
                    <td>
                      <button
                        className="Edit mt-2 ms-4"
                        onClick={() => handleEdit(selectedRowData)}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <Link to="/delete" onClick={handleDelete}>
                        <img
                          className="delete ms-2"
                          src={Delete}
                          alt="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <p className="lead name p1 h">Maryan Deitra</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1 h">09432</p>
                    </td>
                    <td>
                      <p className="lead status p1 h">Paid Feb 1, 2023</p>
                    </td>
                    <td>
                      <p className="lead email p1 h email1">
                        marymary@gmail.com
                      </p>
                    </td>
                    <td>
                      <p className="lead phone p1 h">408-569-4897</p>
                    </td>
                    <td>
                      <p className="lead contract p1 h">
                        Aug 10, 2022 - Aug 10, 2023
                      </p>
                    </td>
                    <td>
                      <img
                        className="checkMark"
                        src={CheckMark}
                        alt="CheckMark"
                      />
                    </td>
                    <td>
                      <button
                        className="Edit mt-2 ms-4"
                        onClick={() => handleEdit(selectedRowData)}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <Link to="/delete" onClick={handleDelete}>
                        <img
                          className="delete ms-2"
                          src={Delete}
                          alt="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <p className="lead name p1 h">Blue Regena</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1 h">07466</p>
                    </td>
                    <td>
                      <p className="lead status p1 h">Paid Feb 1, 2023</p>
                    </td>
                    <td>
                      <p className="lead email p1 h email1">
                        blueregena@gmail.com
                      </p>
                    </td>
                    <td>
                      <p className="lead phone p1 h">408-569-4632</p>
                    </td>
                    <td>
                      <p className="lead contract p1 h">
                        Jul 30, 2022 - Jul 30, 2023
                      </p>
                    </td>
                    <td>
                      <img
                        className="checkMark"
                        src={CheckMark}
                        alt="CheckMark"
                      />
                    </td>
                    <td>
                      <button
                        className="Edit mt-2 ms-4"
                        onClick={() => handleEdit(selectedRowData)}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <Link to="/delete" onClick={handleDelete}>
                        <img
                          className="delete ms-2"
                          src={Delete}
                          alt="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <p className="lead name p1 h">Averie Elise</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1 h">32441</p>
                    </td>
                    <td>
                      <p className="lead status p1 h">Paid Feb 1, 2023</p>
                    </td>
                    <td>
                      <p className="lead email p1 h email1">
                      averieelise@gmail.com
                      </p>
                    </td>
                    <td>
                      <p className="lead phone p1 h">408-467-2526</p>
                    </td>
                    <td>
                      <p className="lead contract p1 h">
                      Jun 7, 2022 - Jun 7, 2023
                      </p>
                    </td>
                    <td>
                      <img
                        className="checkMark"
                        src={CheckMark}
                        alt="CheckMark"
                      />
                    </td>
                    <td>
                      <button
                        className="Edit mt-2 ms-4"
                        onClick={() => handleEdit(selectedRowData)}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <Link to="/delete" onClick={handleDelete}>
                        <img
                          className="delete ms-2"
                          src={Delete}
                          alt="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <p className="lead name p1 h">Evonne Jodene</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1 h">35347</p>
                    </td>
                    <td>
                      <p className="lead status p1 h">Paid Feb 1, 2023</p>
                    </td>
                    <td>
                      <p className="lead email p1 h email1">
                      averieelise@gmail.com
                      </p>
                    </td>
                    <td>
                      <p className="lead phone p1 h">408-569-4632</p>
                    </td>
                    <td>
                      <p className="lead contract p1 h">
                        Mar 12, 2022 - Mar 12, 2023
                      </p>
                    </td>
                    <td></td>
                    <td>
                      <button
                        className="Edit mt-2 ms-4"
                        onClick={() => handleEdit(selectedRowData)}
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <Link to="/delete" onClick={handleDelete}>
                        <img
                          className="delete ms-2"
                          src={Delete}
                          alt="Delete"
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Componente de edición */}
      {isEditOpen && (
        <div className="edit-component">
          {/* Contenido del componente de edición */}
          <h3>Edit Component</h3>
          {/* Resto del contenido del componente de edición */}
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Tenant;
