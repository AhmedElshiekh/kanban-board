import React, { ChangeEvent, FormEvent, useState } from "react";
import {API_URL} from '../main';
import axios from 'axios';

interface FormData {
  name: string;
  title: string;
  age: string;
  email: string;
  phone: string;
}

interface Errors {
  name?: string;
  title?: string;
  age?: string;
  email?: string;
  phone?: string;
}

interface FormProps {
  onSubmit: (newMember: FormData) => void;
}

const Form:React.FC<FormProps> = ({ onSubmit }) => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    title: '',
    age: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = 'name is required';
    if (!formData.title) newErrors.title = 'title is required';
    if (!formData.age || isNaN(Number(formData.age)) || Number(formData.age) <= 0) newErrors.age = 'age must be a positive number';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'email is invalid';
    if (!formData.phone || !/^\d{11}$/.test(formData.phone)) newErrors.phone = 'phone number is invalid';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (validate()) {
      try {
      
        const response = await axios.post(API_URL + '/members', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response.data);

      } catch (error) {
        setErrors(error.response.data.errors);
      }
    }
  };

  // دالة التعامل مع تغييرات المدخلات
  const handleInputChange = (e: ChangeEvent <HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-2">
        <label htmlFor="title">Title:</label><br />
        <input
          className={`p-1 border rounded-md ${errors.title ?'border-2 border-red-500':''}`}
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <br />
        <span>{errors.title && <span className="text-red-500">{errors.title}</span>}</span>
      </div>
      <div className="mt-2">
        <label htmlFor="name">Name:</label><br />
        <input
          className={`p-1 border rounded-md ${errors.name ?'border-2 border-red-500':''}`}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <span>{errors.name && <span className="text-red-500">{errors.name}</span>}</span>
      </div>
      <div className="mt-2">
        <label htmlFor="age">Age:</label><br />
        <input
          className={`p-1 border rounded-md ${errors.age ?'border-2 border-red-500':''}`}
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <br />
        <span>{errors.age && <span className="text-red-500">{errors.age}</span>}</span>
      </div>
      <div className="mt-2">
        <label htmlFor="email">Email:</label><br />
        <input
          className={`p-1 border rounded-md ${errors.email ?'border-2 border-red-500':''}`}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <span>{errors.email && <span className="text-red-500">{errors.email}</span>}</span>
      </div>
      <div className="mt-2">
        <label htmlFor="phone">Phone:</label><br />
        <input
          className={`p-1 border rounded-md ${errors.phone ?'border-2 border-red-500':''}`}
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <br />
        <span>{errors.phone && <span className="text-red-500">{errors.phone}</span>}</span>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-md mt-4 w-full" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
