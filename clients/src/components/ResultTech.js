import React, { useState } from "react";
import "./ResultTech.css";
import CheckRegisCoruse from "./CheckRegisCoruse";
import searchIcon from "../assets/searchbar.svg";
import TimePickerRe from "./TimepickerResultSearch";
import newSearchIcon from "../assets/newsearch.png";

function ResultTeach() {
  const [searching, setSearching] = useState(false);
  const [selectedValue10, setSelectedValue10] = useState("");
  const [selectedValue11, setSelectedValue11] = useState("");
  const [selectedValue12, setSelectedValue12] = useState("");
  const [selectedValue13, setSelectedValue13] = useState("");

  const handleDropdownChange10 = (event) => {
    setSelectedValue10(event.target.value);
  };

  const handleDropdownChange11 = (event) => {
    setSelectedValue11(event.target.value);
  };

  const handleDropdownChange12 = (event) => {
    setSelectedValue12(event.target.value);
  };

  const handleDropdownChange13 = (event) => {
    setSelectedValue13(event.target.value);
  };

  const handleAdvancedSearch = () => {
    setSearching(true);
    console.log("Advanced Searching...");
    // รหัสอื่นๆที่คุณต้องการทำ
  };

  return (
    <div className="top">
      <h className="DateAdmin-text">ผลการลงทะเบียน</h>
      <div style={{ marginTop: '25px' }}>
        <div>

          <a>วัน</a>
          <a>ชั้นปี</a>
          <a>ห้อง</a>
          <a>สาขา</a>

          <div className="dropdown">
            <div className="dropdown10">
              <select value={selectedValue10} onChange={handleDropdownChange10}>
                <option value=""></option>
                <option value="MON">MON</option>
                <option value="TUE">TUE</option>
                <option value="WED">WED</option>
                <option value="THU">THU</option>
                <option value="FRI">FRI</option>
                <option value="SAT">SAT</option>
                <option value="SUN">SUN</option>
              </select>
            </div>
            <div className="dropdown11">
              <select value={selectedValue11} onChange={handleDropdownChange11}>
                <option value=""></option>
                <option value="year1">ปี 1</option>
                <option value="year2">ปี 2</option>
                <option value="year3">ปี 3</option>
                <option value="year4">ปี 4</option>
                <option value="year5">ปี 5-8</option>
              </select>
            </div>
            <div className="dropdown12">
              <select value={selectedValue12} onChange={handleDropdownChange12}>
                <option value=""></option>
                <option value="LABCOM1">Lab Com1</option>
                <option value="LABCOM2">Lab Com 2</option>
                <option value="LABCOM23">Lab Com 23</option>
                <option value="LABCOMDAT">Lab Com Dat</option>
                <option value="LABLOGIC15309">Lab Logic 15309</option>
                <option value="LABLOGIC">Lab Logic</option>
                <option value="1969/1">1969/1</option>
                <option value="25202">25202</option>
              </select>
            </div>
            <div className="dropdown13">
              <select value={selectedValue13} onChange={handleDropdownChange13}>
                <option value=""></option>
                <option value="T05">T05</option>
                <option value="T12">T12</option>
                <option value="T13">T13</option>
                <option value="T14">T14</option>
                <option value="T17">T17</option>
                <option value="T18">T18</option>
                <option value="T19">T19</option>
                <option value="T20">T20</option>
                <option value="T21">T21</option>
                <option value="T22">T22</option>
                <option value="T23">T23</option>
              </select>
            </div>
          </div>
        </div>

        <div className="ChangePosition2">
          <div style={{ width: "230px" }}>
            <div class="ResultTech-Text">ชื่อผู้สอน</div>
            <div
              class="ResultTechsearchBar-searchBox"
              style={{ display: "flex", alignItems: "center" }}
            >
              <input id="searchInput" type="text" placeholder="ชื่อผู้สอน" />
              <button
                id="searchButton"
                onClick={handleAdvancedSearch}
                disabled={searching}
              >
                <img src={searchIcon} alt="Search Icon" />
              </button>
            </div>
          </div>

          <div>
            <div class="ResultTech-Text">เวลาเริ่มต้น</div>
            <TimePickerRe></TimePickerRe>
          </div>

          <div>
            <div class="ResultTech-Text">เวลาสิ้นสุด</div>
            <TimePickerRe></TimePickerRe>
          </div>

          <div className="ButtonChange">
            <button
              style={{
                backgroundColor: "#127151",
                border: "5px",
                cursor: "pointer",
                width: "110px",
                height: "37px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 10px",
              }}
              onClick={handleAdvancedSearch}
              disabled={searching}
            >
              <span
                style={{ color: "white", fontSize: "16px", fontFamily: "Kanit" }}
              >
                {searching ? "Searching..." : "search"}
              </span>
              <img
                src={newSearchIcon}
                alt="New Search Icon"
                style={{ width: "16px", height: "16px" }}
              />
            </button>
          </div>
        </div>

      </div>

      <div style={{ marginTop: '25px' }}>
        <div className="ChangePosition">
          <CheckRegisCoruse></CheckRegisCoruse>
        </div>

      </div>
    </div>
  );
}

export default ResultTeach;
