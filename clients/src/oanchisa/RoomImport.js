import React, { useState } from 'react';
import './RoomImport.css';
import axios from 'axios';
import { FaFileLines } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // เพิ่มการนำเข้า Link ที่นี่

function handleClick(event) {
  const button = event.currentTarget;

  // เพิ่ม animation class เมื่อคลิก
  button.classList.add('flash-animation');

  // ลบ animation class เมื่อ animation เสร็จสิ้น
  button.addEventListener('animationend', () => {
    button.classList.remove('flash-animation');
  });
}

function RoomImport() {
    const tableData = [2566, 2565, 2564, 2563,2562,2561,2560,2559,2558,2557,'ภาคต้น','ภาคปลาย','ภาคฤดูร้อน'];
    const [selectedValue8, setSelectedValue8] = useState('');
    const [selectedValue9, setSelectedValue9] = useState('');
  
    const handleDropdownChange8 = (event) => {
        setSelectedValue8(event.target.value);
    };

    const handleDropdownChange9 = (event) => {
        setSelectedValue9(event.target.value);
    };
  return (
    <div className='turnleft-all'>
      <h className='DateAdmin-text'>นำข้อมูลห้องเรียนเข้าสู่ระบบ</h>
      <div className="text2">
            <a>ปีการศึกษา</a>
            <a>ภาคการศึกษา</a>
        </div>
        <div className="dropdown">
            <div className='dropdown8'>
            <select value={selectedValue8} onChange={handleDropdownChange8}>
                <option value=""></option>
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
            </select>
            </div>
            <div className='dropdown9'>
            <select value={selectedValue9} onChange={handleDropdownChange9}>
                <option value=""></option>
                <option value="ภาคต้น">ภาคต้น</option>
                <option value="ภาคปลาย">ภาคปลาย</option>
                <option value="ภาคฤดูร้อน">ภาคฤดูร้อน</option>
            </select>
            </div>
        </div>
      <div className="course-table">
        <div className="column">
          <p>ปีการศึกษา/ภาคเรียน</p>
        </div>
        <div className="column">
          <div>
            <p>ห้องเรียน</p>
          </div>
        </div>
      </div>

      <div className="course-table1">
        <div className="column1">
          <p>2566/ต้น</p>
        </div>
        <div className="column2">
          {/* ใช้ Link เพื่อเปลี่ยนหน้า */}
          <Link to="/2566/ต้น" className="file-button" onClick={handleClick}>
            <FaFileLines style={{ fontSize: '35px',color:'black' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomImport;
