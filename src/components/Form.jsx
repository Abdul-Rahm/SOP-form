import React, { useMemo, useState } from 'react'
import { motion } from "framer-motion";
import countryList from "react-select-country-list"
import Select from "react-select";
import { useFormik } from "formik" 
import * as Yup from "yup"
import { Link } from 'react-router-dom';;


const Form = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  }
  
  //formik logics
  const formik = useFormik({
    initialValues: {
        name:"",
        email:"",
        age:"",
        education:"Grade 12",
        institute:"",
        study:"",
        experience:"",
        canada_study:"",
        canada_area:"",
        country:"",
        goals:"",
        listening_scores:"1",
        speaking_scores:"1",
        reading_scores:"1",
        writing_scores:"1",
        payment:"",
        GIC:"",
        fee:"",
        amount:"",
    },

    //Validate Form
    validationSchema: Yup.object({
        name: Yup.string()
          .max(20, "Name must be 20 characters or less.")
          .required("Name is required"),
        email: Yup.string()
          .required("Email is required"),
        institute: Yup.string()
          .required("University name is required"),
        study: Yup.string()
          .required("Required field"),
        experience: Yup.string()
          .max(30, "Elaborate in not more than 30 characters.")
          .required("Experience is required"),
        canada_study: Yup.string()
          .required("Required field"),
        canada_area: Yup.string()
          .required("Required field"),
        goals: Yup.string()
          .required("Required field"),
        payment: Yup.array()
          .required("Either one must be checked"),
        fee: Yup.string()
          .required("Required field"),
        GIC: Yup.array()
          .required("Either one must be checked"),
        amount: Yup.string()
          .required("Required field"),

    }),

    //Submit Form
    onSubmit: (values) => {
        console.log(values);
    },
  });
  
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity:0 }}>
    <main className='flex items-center justify-center'>
        <form onSubmit={formik.handleSubmit} className='flex bg-gray-100 rounded-lg w-1/2'>
            <div className='flex-1 text-zinc-900 p-20 sticky'>
                <h1 className='text-3xl pb-2 font-bold'>Let's get Started 👋</h1>
                <p className='text-lg text-zinc-500'>
                    Fill the form, and let the transformation begin...<br/>
                    After submitting, you will receive an email at the email address that you have provided.
                </p>
                <div className='mt-6'>
                    {/* Name input field */}
                    <div className='pb-4'>
                        <label className={`block font-bold text-sm pb-2 
                            ${formik.touched.name && formik.errors.name ? "text-red-400" : ""}`} 
                            htmlFor="name"
                        >
                           {formik.touched.name && formik.errors.name ? formik.errors.name :"Name" }
                        </label>
                        <input
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='text'
                           name='name'
                           placeholder='Enter your name'
                           value={formik.values.name}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}      
                        />        
                    </div>
                    {/* Email input field */}
                    <div className='pb-4'>
                        <label className={`block font-bold text-sm pb-2 
                            ${formik.touched.email && formik.errors.email ? "text-red-400" : ""}`} 
                            htmlFor="email"
                        >
                          {formik.touched.email && formik.errors.email ? formik.errors.email :"Email" }
                        </label>
                        <input
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='email'
                           name='email'
                           placeholder='Enter your email'
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}             
                        />        
                    </div>
                    {/* Age input field */}
                    <div className='pb-4'>
                        <label className='block font-bold text-sm pb-2' htmlFor="age">
                          Date Of Birth
                        </label>
                        <input
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='date'
                           name='age'
                           placeholder='How old are you?'
                           value={formik.values.age}
                           onChange={formik.handleChange}
                        />        
                    </div>
                    {/* Level of education */}
                    <div className='pb-4'>
                        <label className='block font-bold text-sm pb-2' htmlFor="text">
                          Academic Qualifications
                        </label>
                        <select 
                          name="education"
                          placeholder='Educational background'
                          value={formik.values.education}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur} 
                          className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                        >
                            <option>Grade 12</option>
                            <option>Diploma</option>
                            <option>Bachelor's Degree</option>
                            <option>Master's Degree</option>
                            <option>PhD</option>
                        </select>       
                    </div>
                    {/* Institute input field */}
                    <div className='pb-4'>
                       <label className={`block font-bold text-sm pb-2 
                            ${formik.touched.institute && formik.errors.institute ? "text-red-400" : ""}`} 
                            htmlFor="institute"
                        >
                            {formik.touched.institute && formik.errors.institute ? formik.errors.institute :"Institution of Your Highest Degree" }
                        </label>
                        <input
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='text'
                           name='institute'
                           placeholder='University attended'
                           value={formik.values.institute}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur} 
                        />        
                    </div>
                    {/* Knowledge input field */}
                    <div className='pb-4'>
                        <label className={`block font-bold text-sm pb-2 
                            ${formik.touched.study && formik.errors.study ? "text-red-400" : ""}`} 
                            htmlFor="study"
                        >
                            {formik.touched.study && formik.errors.study ? formik.errors.study :"What Was Your Major/Area of Study?"}
                        </label>
                        <input
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='text'
                           name='study'
                           placeholder='Area of interest..'
                           value={formik.values.study}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />        
                    </div>
                    {/* Work experience input field */}
                    <div className='pb-4'>
                        <label className='block font-bold text-sm pb-2' htmlFor="text">
                            Work Experience<br/>
                            (If yes, provide the following details)<br/>
                            ⁕Job Title<br/>
                            ⁕Company Name<br/>
                            ⁕Job Duties<br/>
                        </label>
                        <textarea
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='text'
                           name='experience'
                           placeholder='about your experience'
                           value={formik.values.experience}
                           onChange={formik.handleChange}
                        />        
                    </div>
                    {/* Knowledge input field */}
                    <div className='pb-4'>
                        <label className={`block font-bold text-sm pb-2 
                            ${formik.touched.canada_study && formik.errors.canada_study ? "text-red-400" : ""}`} 
                            htmlFor="canada_study"
                        >
                           {formik.touched.canada_study && formik.errors.canada_study ? formik.errors.canada_study :"Which educational institution in Canada offered you admission?"}
                        </label>
                        <input
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='text'
                           name='canada_study'
                           placeholder='Your answer'
                           value={formik.values.canada_study}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />        
                    </div>
                    {/* Program of study input field */}
                    <div className='pb-4'>
                        <label className={`block font-bold text-sm pb-2 
                            ${formik.touched.canada_area && formik.errors.canada_area ? "text-red-400" : ""}`} 
                            htmlFor="canada_area"
                        >
                           {formik.touched.canada_area && formik.errors.canada_area ? formik.errors.canada_area :"In which area are you pursuing your studies in Canada"}
                        </label>
                        <input
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='text'
                           name='canada_area'
                           placeholder='Your answer'
                           value={formik.values.canada_area}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />        
                    </div>
                     {/* Country input field */}
                     <div className='pb-4'>
                        <label className='block font-bold text-sm pb-2' htmlFor="text">
                            Which Country do you belong to?
                        </label>
                        <Select 
                            name="country"
                            placeholder='Country name'
                            className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                            options={options}
                            values={value}
                            onChange={changeHandler}      
                        />    
                    </div>
                    {/* Future goals input field */}
                    <div className='pb-4'>
                        <label className={`block font-bold text-sm pb-2 
                            ${formik.touched.goals && formik.errors.goals ? "text-red-400" : ""}`} 
                            htmlFor="goals"
                        >
                           {formik.touched.goals && formik.errors.goals ? formik.errors.goals :"What are your career aspirations?"}
                        </label>
                        <textarea
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='text'
                           name='goals'
                           placeholder='Share your objectives'
                           value={formik.values.goals}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />        
                    </div>
                     {/* Scores input field */}
                     <div className='pb-4'>
                        <label className='block font-bold text-sm pb-2' htmlFor="text">
                            Your English Listening Score<br/>
                            ⁕(Rate out of 10)
                        </label>
                        <select 
                          name="listening_scores"
                          placeholder='Your Scores..'
                          value={formik.values.listening_scores}
                          onChange={formik.handleChange}
                          className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>                     
                    </div>
                    {/* Scores input field */}
                    <div className='pb-4'>
                        <label className='block font-bold text-sm pb-2' htmlFor="text">
                            Your English Reading Score<br/>
                            ⁕(Rate out of 10)
                        </label>
                        <select 
                          name="reading_scores"
                          placeholder='Educational background'
                          value={formik.values.reading_scores}
                          onChange={formik.handleChange}
                          className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                               
                    </div>
                    {/* Scores input field */}
                    <div className='pb-4'>
                        <label className='block font-bold text-sm pb-2' htmlFor="text">
                            Your English Speaking Score<br/>
                            ⁕(Rate out of 10)
                        </label>
                        <select 
                          name="speaking_scores"
                          placeholder='Your Scores..'
                          value={formik.values.speaking_scores}
                          onChange={formik.handleChange}
                          className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>              
                    </div>
                    {/* Scores input field */}
                    <div className='pb-4'>
                        <label className='block font-bold text-sm pb-2' htmlFor="text">
                            Your English Writing Score<br/>
                            ⁕(Rate out of 10)
                        </label>
                        <select 
                          name="writing_scores"
                          placeholder='Your Scores..'
                          value={formik.values.writing_scores}
                          onChange={formik.handleChange}
                          className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>                     
                    </div>
                    {/* tution input field */}
                    <div className='pb-4'>
                        <label className='block font-bold text-sm pb-2' htmlFor="text">
                            Did you make the first-year tuition payment?
                        </label>
                        <label>
                          <input
                            name='payment'
                            className='h-4 w-7 border-2 focus:border-teal-500 focus:ring-teal-500'
                            type='checkbox'
                            onChange={formik.handleChange}
                            value="yes"
                         />  
                           Yes
                        </label> 
                        <label><br/>
                          <input
                            name='payment'
                            className='h-4 w-7 border-2 focus:border-teal-500 focus:ring-teal-500'
                            type='checkbox'
                            onChange={formik.handleChange}
                            value="no"
                         />  
                           No
                        </label>      
                    </div>
                    {/* tution input field */}
                    <div className='pb-4'>
                        <label className={`block font-bold text-sm pb-2 
                            ${formik.touched.fee && formik.errors.fee ? "text-red-400" : ""}`} 
                            htmlFor="text"
                        >
                           {formik.touched.fee && formik.errors.fee ? formik.errors.fee :"What was the tuition fee payment amount?"}
                        </label>
                        <input
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='text'
                           name='fee'
                           placeholder='Enter amount in words'
                           value={formik.values.fee}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />        
                    </div>
                    {/* GIC input field */}
                    <div className='pb-4'>
                        <label className='block font-bold text-sm pb-2' htmlFor="text">
                            Have you invested in a GIC?<br/>
                            ⁕Guaranteed Investment Certificate
                        </label>
                        <label>
                          <input
                            className='h-4 w-7 border-2 focus:border-teal-500 focus:ring-teal-500'
                            type='checkbox'
                            name='GIC'
                            onChange={formik.handleChange}
                            value="yes"
                         />  
                           Yes
                        </label> 
                        <label><br/>
                          <input
                            className='h-4 w-7 border-2 focus:border-teal-500 focus:ring-teal-500'
                            type='checkbox'
                            name='GIC'
                            onChange={formik.handleChange}
                            value="no"
                         />  
                           No
                        </label>      
                    </div>
                    {/* GIC amount input field */}
                    <div className='pb-4'>
                        <label className={`block font-bold text-sm pb-2 
                            ${formik.touched.amount && formik.errors.amount ? "text-red-400" : ""}`} 
                            htmlFor="amount"
                        >
                           {formik.touched.amount && formik.errors.amount ? formik.errors.amount :"What was your investment amount in the GIC?"}
                        </label>
                        <input
                           className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500'
                           type='text'
                           name='amount'
                           placeholder='Enter amount in words'
                           value={formik.values.amount}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />        
                    </div>
                </div>
                <button
                  type='submit'
                  className='bg-teal-500 font-bold text-sm text-white py-3 mt-6 rounded-lg w-full'
                >
                    <Link to={"/success"}>
                        Proceed to Submit    
                    </Link>
                </button>
            </div>
        </form>
    </main>
    </motion.div>
  )
}

export default Form;
