import React, { useState } from "react";
import "./ResultRegisEdu.css"; 
import CheckRegisCoruse from "./CheckRegisCoruse";
import searchIconName from "../assets/searchbar.svg";
import searchIconCourse from "../assets/searchbar.svg";
import TimePickerRe from "./TimepickerResultSearch";
import newSearchIcon from "../assets/newsearch.png";
import Axios from "axios";

function ResultRegisEdu() {
  const tableData = [2569, 2568, 2567, 2566, 2565, 2564, 2563, 2562, 2561, 2560, 2559, 2558, 2557, 2556, 2555, 'วิชาบังคับ', 'วิชาเลือก', 'วิชาแกน',];
  const [selectedValue5, setSelectedValue5] = useState("");
  const [selectedValue6, setSelectedValue6] = useState("");
  const [selectedValue7, setSelectedValue7] = useState("");
  const handleDropdownChange5 = (event) => {
    setSelectedValue5(event.target.value);
  };

  const handleDropdownChange6 = (event) => {
    setSelectedValue6(event.target.value);
  };

  const handleDropdownChange7 = (event) => {
    setSelectedValue7(event.target.value);
  };

  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [selectedValue10, setSelectedValue10] = useState("");
  const [selectedValue11, setSelectedValue11] = useState("");
  const [selectedValue12, setSelectedValue12] = useState("");
  const [selectedValue13, setSelectedValue13] = useState("");
  // แถบขาว
  const [searchText1, setSearchText1] = useState("");
  const [searchResults1, setSearchResults1] = useState([]);
  
  
  const handleAdvancedSearch = async () => {
    // Validate ว่าทุก dropdown และช่องค้นหาถูกกรอกหรือเลือกค่าหรือไม่
    if (
      selectedValue10 ||
      selectedValue11 ||
      selectedValue12 ||
      selectedValue13 ||
      searchText1.trim() !== "" ||
      searchText2.trim() !== ""
    ) {
      setSearching(true);
      console.log("Advanced Searching...");
    }
  
    try {
      const response1 = await Axios.get(
        `http://localhost:3001/search-courses?query=${searchText1}`
      );
      const response2 = await Axios.get(
        `http://localhost:3001/search-nameajarn?query=${searchText2}`
      );
      
      if (response1.data.length === 0 && response2.data.length === 0) {
        alert("ไม่พบข้อมูลชื่อผู้ใช้และรายวิชานี้ กรุณากรอกข้อมูลให้ถูกต้อง");
      } else if (response1.data.length !== 0 ) {
        alert("ไม่พบข้อมูลรายวิชานี้ กรุณากรอกข้อมูลให้ถูกต้อง");
      } else if (response2.data.length === 0) {
        alert("ไม่พบข้อมูลชื่อผู้ใช้นี้ กรุณากรอกข้อมูลให้ถูกต้อง");
      } else {
        setSearchResults([response1.data, response2.data]);
      }
    } catch (error) {
      console.error("Error searching nameajarn:", error);
      console.error("Error searching course:", error);
    } finally {
      // เมื่อค้นหาเสร็จสิ้น ปิดการค้นหา
      setSearching(false);
    }
  };    
  

  


  // ----------------searchbarCourse------------------------

  document.addEventListener("DOMContentLoaded", function () {
    // เพิ่มโค้ดที่ต้องการให้ทำงานหลังจากการโหลดหน้าเว็บเสร็จสมบูรณ์ที่นี่
    var searchButton = document.getElementById("searchButton");
    var saveButton = document.getElementById("saveButton");

    if (searchButton) {
      searchButton.addEventListener("click", function () {
        var searchText = document.getElementById("searchInput").value.trim();
        console.log("คำค้นหา:", searchText);
        // ทำสิ่งที่ต้องการกับ searchText ที่ได้รับจากผู้ใช้
      });
    }

    if (saveButton) {
      saveButton.addEventListener("click", function () {
        console.log("คุณกำลังคลิกปุ่มบันทึก");
        // สามารถเพิ่มโค้ดอื่น ๆ ต่อจากนี้เพื่อทำงานตามที่ต้องการ
      });
    }
  });

  // แถบขาว
  const searchCourses = async () => {
    try {
      const response = await Axios.get(
        `http://localhost:3001/search-courses?query=${searchText1}`
      );
      setSearchResults1(response.data); // อัปเดต state ด้วยข้อมูลผลการค้นหา
      console.log(response.data.length)
      console.log(response.data)
    } catch (error) {
      console.error("Error searching courses:", error);
    }
  };

  const handleSearchChangeCourse = (e) => {
    setSearchText1(e.target.value);
    if (e.target.value.length > 0) {
      // แก้ไขตรงนี้เพื่อค้นหาทันทีที่ผู้ใช้พิมพ์
      searchCourses();
    } else {
      setSearchResults1([]); // หากช่องค้นหาว่าง, ล้างผลลัพธ์การค้นหา
    }
  };

  const [selectedCourse, setSelectedCourse] = useState({
    subject_id: "",
    subject_name: "",
  });
  const handleSelectCourse = (course) => {
    setSearchText1(`${course.subject_id} - ${course.subject_name}`);
    setSelectedCourse({
      subject_id: course.subject_id,
      subject_name: course.subject_name,
    });
    setSearchResults1([]); // ล้างผลลัพธ์การค้นหาหลังจากเลือกวิชา
  };

  // ฟังก์ชันสำหรับบันทึกข้อมูล
  const saveCourseRegistration = async () => {
    // แปลง array ของปีการศึกษาเป็นสตริง
    const yearString = selectedYear.join(", ");
    const branchString = selectedBranch.join(", ");
    try {
      const response = await Axios.post("http://localhost:3001/register", {
        // ข้อมูลอื่นๆ ที่ต้องการบันทึก
        subject_id: selectedCourse.subject_id,
        subject_name: selectedCourse.subject_name,
        year: yearString,
        section: selectedValues.section,
        lectureOrLab: selectedValues.lectureOrLab,
        branch: branchString,
        // ...
      });

      // แสดงข้อความแจ้งเตือนหรือดำเนินการต่อ ตามความเหมาะสม
      alert("Registration successful!");
      window.location.reload();
      // ตัวอย่าง: รีเซ็ตฟอร์มหรือ redirect ผู้ใช้
    } catch (error) {
      console.error("Error saving course registration:", error);
      // Log the entire error object to see more details
      console.log(error.response.data); // Log the response data from the server, if ava
    }
  };

  const [selectedYear, setSelectedYear] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked, name } = e.target;
    if (name === "year") {
      if (checked) {
        setSelectedYear([...selectedYear, value]);
      } else {
        setSelectedYear(selectedYear.filter((year) => year !== value));
      }
    } else if (name === "branch") {
      if (checked) {
        setSelectedBranch([...selectedBranch, value]);
      } else {
        setSelectedBranch(selectedBranch.filter((branch) => branch !== value));
      }
    }
  };
  // สร้างข้อมูลตาราง
  const [selectedValues, setSelectedValues] = useState({
    year: "",
    section: "",
    lectureOrLab: "",
    branch: "",
    subject_name: "",
    subject_id: "",
  });

  const handleDropdownChange = (event, field) => {
    setSelectedValues({
      ...selectedValues,
      [field]: event.target.value,
    });
  };

 // --------------------searchbarName--------------------
  
  document.addEventListener("DOMContentLoaded", function () {
    // เพิ่มโค้ดที่ต้องการให้ทำงานหลังจากการโหลดหน้าเว็บเสร็จสมบูรณ์ที่นี่
    var searchButton = document.getElementById("searchButton");
    var saveButton = document.getElementById("saveButton");

    if (searchButton) {
      searchButton.addEventListener("click", function () {
        var searchText = document.getElementById("searchInput").value.trim();
        console.log("คำค้นหา:", searchText);
        // ทำสิ่งที่ต้องการกับ searchText ที่ได้รับจากผู้ใช้
      });
    }

    if (saveButton) {
      saveButton.addEventListener("click", function () {
        console.log("คุณกำลังคลิกปุ่มบันทึก");
        // สามารถเพิ่มโค้ดอื่น ๆ ต่อจากนี้เพื่อทำงานตามที่ต้องการ
      });
    }
  });
  const [searchText2, setSearchText2] = useState("");
  const [searchResults2, setSearchResults2] = useState([]);

  const searchNameAjarn = async () => {
    try {
      const response = await Axios.get(
        `http://localhost:3001/search-nameajarn?query=${searchText2}`
      );
      setSearchResults2(response.data); // อัปเดต state ด้วยข้อมูลผลการค้นหา
    } catch (error) {
      console.error("Error searching nameajarn:", error);
    }
  };

  const handleSearchChangeName = (e) => {
    setSearchText2(e.target.value);
    if (e.target.value.length > 0) {
      // แก้ไขตรงนี้เพื่อค้นหาทันทีที่ผู้ใช้พิมพ์
      searchNameAjarn();
    } else {
      setSearchResults2([]); // หากช่องค้นหาว่าง, ล้างผลลัพธ์การค้นหา
    }
  };

  const [selectedName, setSelectedName] = useState({
    name: "",
  });
  const handleSelectName = (usersaj) => {
    setSearchText2(`${usersaj.name}`);
    setSelectedName({
      name: usersaj.name,
    });
      setSearchResults2([]); // ล้างผลลัพธ์การค้นหาหลังจากเลือก
  };
  


  return (
    <div>
      <div className="turnleft-allEdu">
        <div className="text1">
          <a>ปีการศึกษา</a>
          {/* <a>ภาคการศึกษา</a> */}
          <a>ห้อง</a>
          <a>เวลาเริ่มต้น</a>
          <a>เวลาสิ้นสุด</a>
        </div>
        <div class="flex-container">
          <div className="dropdown5">
            <select value={selectedValue5} onChange={handleDropdownChange5}>
              <option value=""></option>
              <option value="2569">2569</option>
              <option value="2568">2568</option>
              <option value="2567">2567</option>
              <option value="2566">2566</option>
              <option value="2565">2565</option>
              <option value="2564">2564</option>
              <option value="2563">2563</option>
              <option value="2562">2562</option>
              <option value="2561">2561</option>
              <option value="2560">2560</option>
              <option value="2559">2559</option>
              <option value="2558">2558</option>
              <option value="2557">2557</option>
              <option value="2556">2556</option>
              <option value="2555">2555</option>
            </select>
          </div>
          {/* <div className="dropdown6">
            <select value={selectedValue6} onChange={handleDropdownChange6}>
              <option value=""></option>
              <option value="ภาคต้น">ภาคต้น</option>
              <option value="ภาคปลาย">ภาคปลาย</option>
              <option value="ภาคฤดูร้อน">ภาคฤดูร้อน</option>
            </select>
          </div> */}

          <div className="dropdown7">
            <select value={selectedValue7} onChange={handleDropdownChange7}>
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
          <div>
            <div class="timepickers-container1">
              <TimePickerRe></TimePickerRe>
            </div>
            <div class="timepickers-container2">
              <TimePickerRe></TimePickerRe>
              
      
            </div>
          </div>
        </div>

        <div className="ChangePosition3">
          <div style={{ width: "230px" }}>
            <div class="ResultTech-Text">ชื่อผู้สอน</div>
            <div
              class="ResultTechsearchBar-searchBox"
              style={{ display: "flex", alignItems: "center" }}
              
            >
              <input
                value={searchText2}
                onChange={handleSearchChangeName}
                type="text"
                placeholder="ชื่อผู้สอน"
              />
              <button onClick={searchNameAjarn}>
                <img src={searchIconName} alt="Search Icon" />
              </button>
              {searchResults2.length > 0 && (
                <div className="autocomplete-dropdown">
                  {searchResults2.map((usersaj, index) => (
                    <div
                      className="autocomplete-item"
                      key={index}
                      onClick={() => handleSelectName(usersaj)}
                    >
                      {usersaj.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
          </div>

          <div style={{ width: "450px" }}>
            <div class="ResultTech-Text">รหัสวิชา/ชื่อวิชา</div>
            <div
              class="ResultTechsearchBar-searchBoxSub"
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                      value={searchText1}
                      onChange={handleSearchChangeCourse}
                      type="text"
                      placeholder="รหัสวิชา, ชื่อวิชา"
                    />
                    <button onClick={searchCourses}>
                      <img src={searchIconCourse} alt="Search Icon" />
                    </button>
                    {searchResults1.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {searchResults1.map((course, index) => (
                          <div
                            className="autocomplete-item"
                            key={index}
                            onClick={() => handleSelectCourse(course)}
                          >
                            {course.subject_id} - {course.subject_name}
                          </div>
                        ))}
                      </div>
                    )}
            </div>
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
                style={{
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "Kanit",}}
              > {"search"}
              </span>
              <img
                src={newSearchIcon}
                alt="New Search Icon"
                style={{ width: "16px", height: "16px" }}
              />
            </button>
          </div>
        </div>

        <div>
          <div class="DateAdmin-textEdu">
            <p1>ผลการลงทะเบียนของอาจารย์ทั้งหมด</p1>{" "}
          </div>
          <CheckRegisCoruse></CheckRegisCoruse>
        </div>
      </div>
    </div>
  );
}

export default ResultRegisEdu;
