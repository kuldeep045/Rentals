import React, { useState, useContext } from 'react'
import { icons } from '../assets/app.js'
import { LoginContext } from '../context/LoginContext.jsx'
import { MdVerified } from 'react-icons/md'
import axios from 'axios'
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from 'react-router'


function MyProfile() {
  
  

  const [isEditable, setisEditable] = useState(true)
  const [imageFile, setImageFile] = useState(null)

  const navigate = useNavigate()


  const {profileImg, setProfileImg,
    userName,
    name, setName,
    email, setEmail,
    phone, setPhone,
    address1, setAddress1,
    address2, setAddress2,
  } = useContext(LoginContext)


  function onImageChange (e){
    var imgFile = e.target.files[0]

    if(imgFile){
      const imgUrl = URL.createObjectURL(imgFile)
      setProfileImg(imgUrl)
      setImageFile(imgFile)
    }
  }

  function onEmailChange (e){
    setEmail(e.target.value)
  }
  function onPhoneChange (e){
    setPhone(e.target.value)
    

  }

  function onNameChange(e){
    setName(e.target.value)
  }
  function onAddress1Change(e){
    setAddress1(e.target.value)
  }
  function onAddress2Change(e){
    setAddress2(e.target.value)
  }


  
  async function EditBtnClick (e){
    e.preventDefault();
    setisEditable((prev) => !prev)   

    
  }

  async function onSubmitHandler (e) {
    e.preventDefault()
    try {
      const formdata = new FormData()

      formdata.append("profileImg", imageFile)
      formdata.append("phone", phone)




    await axios.post('http://localhost:3000/api/v1/users/updateUser', formdata, {withCredentials: true})
    .then(response =>{
      setProfileImg(response.data.data.profileImg)
      setisEditable((prev) => !prev) 
    })
    .catch((err) => console.error("err", err))
      
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <form className="min-h-screen bg-[#0B051C] pt-20 px-[10%] text-white">
      <FiArrowLeft onClick={() => navigate('/')} className='text-2xl cursor-pointer' />
      
  <div className="max-w-md mx-auto">
    <label htmlFor="image" className="flex justify-center mb-6">
      <img
        className="bg-white rounded-full h-24 w-24 object-cover"
        src={profileImg ? profileImg : icons.user_icon}
        alt="Profile"
      />
    </label>
    {!isEditable && <input
      onChange={onImageChange}
      type="file"
      name="image"
      id="image"
      className="hidden"
    />}
    <div className="flex justify-center items-center gap-2 my-4">
      <p>@{userName}</p>
      <MdVerified />
    </div>

    {/* Profile Fields */}
    <div className="space-y-6">
      {[
        { label: "Name", value: name, onChange: onNameChange, type: "text" },
        { label: "Email", value: email, onChange: onEmailChange, type: "email" },
        { label: "Phone", value: phone, onChange: onPhoneChange, type: "number" },
        { label: "Address1", value: address1, onChange: onAddress1Change, type: "text" },
        { label: "Address2", value: address2, onChange: onAddress2Change, type: "text" },
      ].map((field, index) => (
        <div key={index} className="flex items-center">
          <label className="w-32 text-left pr-4">{field.label}:</label>
          {!isEditable ? (
            <input
              value={field.value}
              onChange={field.onChange}
              className="flex-grow p-2 bg-[#1c1c1c] border border-gray-600 rounded text-white outline-none"
              type={field.type}
            />
          ) : (
            <p className="flex-grow text-gray-300">{field.value}</p>
          )}
        </div>
      ))}
    </div>

    {
      isEditable ? <button       className="mt-6 bg-green-600 px-6 py-2 text-lg rounded-3xl hover:bg-green-700 block mx-auto"
      onClick={EditBtnClick}>Edit</button> :
      <button className="mt-6 bg-green-600 px-6 py-2 text-lg rounded-3xl hover:bg-green-700 block mx-auto"
      type='submit'
      onClick={onSubmitHandler}
      >Save</button>
    }
  </div>
</form>

  )
}

export default MyProfile