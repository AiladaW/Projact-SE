import React, { useState, useEffect } from 'react';
import './InputEdu.css';
import { IoIosAddCircleOutline, IoIosClose } from 'react-icons/io';
import { CgFileDocument } from "react-icons/cg";
import { FaRegSave } from "react-icons/fa";
import * as XLSX from 'xlsx';
import Axios from "axios";


const InputEdu = ({ selectedValue2, selectedValue3, selectedValue4 }) => {
    const [idSubject, setIdSubject] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [subjectList, setsubjectList] = useState([]);
    // // const match = selectedValue4.match(/\(([^)]+)\)/);
    // const regex = /(\d+)\((\d+)-(\d+)-(\d+)\)/;

    // const match =selectedValue4.match(regex);
    
    // if (match) {
    //   const dataList = match.slice(1).map(Number);
    
    //   console.log("Data List:", dataList);
    // } else {
    //   console.log("ไม่พบข้อมูลที่ต้องการ");
    // }
    // const [selectedValue2, setSelectedValue2] = useState(null);
    // const [selectedValue3, setSelectedValue3] = useState(null);
    // const [selectedValue4, setSelectedValue4] = useState(null);

    const handleButtonAdd = () => {
        window.alert('เพิ่มข้อมูลวิชาเข้าสู่ระบบสำเร็จ');
        Axios.post("http://127.0.0.1:3001/addsub", {
            selectedValue2: selectedValue2,
            idSubject: idSubject,
            subjectName: subjectName,
            selectedValue4: selectedValue4,
            selectedValue3: selectedValue3,
        }).then(() => {
            setsubjectList([
                ...subjectList,
                {
                    selectedValue2: selectedValue2,
                    idSubject: idSubject,
                    subjectName: subjectName,
                    selectedValue4: selectedValue4,
                    selectedValue3: selectedValue3,
                },
            ]);
            setIdSubject('');
            setSubjectName('');
        }).catch(error => {
            console.error('Error adding subject:', error);
            window.alert('เกิดข้อผิดพลาดในการเพิ่มวิชา');
        });
        console.log(selectedValue2);
        console.log(selectedValue3);
        console.log(selectedValue4);
        console.log(subjectList);
    };
    
    useEffect(() => {
        // ทำสั่งการที่คุณต้องการที่นี่ เช่น อัพเดต UI
        console.log("User list updated:", subjectList);
    }, [subjectList]);


    return (
        <div className="Pop ">

            <div className='in '>

                <div className='box-Input-position'>

                    <div>
                        <label style={{ fontFamily: 'Kanit', fontSize: '15px', display: 'block', fontweight: 'bold', marginBottom: '5px' }}>รหัสวิชา:</label>
                        <input
                            type="text"
                            value={idSubject}
                            onChange={(e) => setIdSubject(e.target.value)}
                            style={{ marginBottom: '10px', width: '300px', fontFamily: 'Kanit' }}
                        />
                    </div>
                    <div>
                        <label style={{ fontFamily: 'Kanit', fontSize: '15px', display: 'block', fontweight: 'bold', marginBottom: '5px' }}>ชื่อวิชา:</label>
                        <input
                            type="text"
                            value={subjectName}
                            onChange={(e) => setSubjectName(e.target.value)}
                            style={{ width: '300px', fontFamily: 'Kanit' }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', marginTop: 'auto' }}>
                        <button onClick={handleButtonAdd} className='btn'>
                            <IoIosAddCircleOutline style={{ fontFamily: 'Kanit', fontSize: '15px', marginRight: '3px', paddingTop: '5px' }} />
                            ADD
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InputEdu;