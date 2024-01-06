'use client'
import Image from 'next/image'
import { useState,useEffect } from "react";
import { FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import { FaLocationDot,FaEarthAmericas } from "react-icons/fa6";
import BannerPage from '../Components/Base/BannerPage'
import { IoHomeOutline } from "react-icons/io5";
import { FiArrowUpRight } from 'react-icons/fi';
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
  const bredcrum=[
    {
        name:'Home',
        link:"/",
        icon:<IoHomeOutline />
    },
    {
        name:'Contact Us',
        link:"/contact"
    }
]
const[sendMeassege,setSendMessage]=useState(true)
const handleEmailClick = () => {

  let email="lalitkumar6458@gmail.com"
  const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
  window.open(url);
};
const handlePhoneClick = (phone) => {
let  phoneNumber="+919326875077"
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
  const url = `tel:${formattedPhoneNumber}`;
  window.location.href = url;
};

   const [formValues, setFormValues] = useState({
     name: "",
     email: "",
     phoneNo: "",
     message: "",
   });

   const [errors, setErrors] = useState({});

   const handleChange = (event) => {
     const { name, value } = event.target;
     setFormValues((prevValues) => ({
       ...prevValues,
       [name]: value,
     }));
   };

   const validateForm = () => {
     const newErrors = {};
     if (!formValues.name.trim()) {
       newErrors.name = "Name is required";
     }
     if (!formValues.email.trim()) {
       newErrors.email = "Email is required";
     }
     if (!formValues.phoneNo.trim()) {
       newErrors.phoneNo = "Phone number is required";
     }
     if (!formValues.message.trim()) {
       newErrors.message = "Message is required";
     }

     setErrors(newErrors);
     return Object.keys(newErrors).length === 0; // Return true if there are no errors
   };

   const handleSubmit = (event) => {
   
     event.preventDefault();
     const isValid = validateForm();

     if (isValid) {
      setSendMessage(false)
       // Perform form submission logic here, e.g., sending data to the server
      //  emailjs.send('service_bmugh1b', 'template_ca0u8mn', formValues, 'VTgQXID7Y0jR4k33a')
      //  .then(response => {
   
      //    alert('Sent Message Successfully to rajesh alloys!', response)
       
      //    setSendMessage(true)
      //    setFormValues({
      //     name: "",
      //     email: "",
      //     phoneNo: "",
      //     message: "",
      //   })
      //  }, error => {
        
      //    alert('FAILED...',error)
      //  });
     }
   };

   const contactData = [
     {
       id: 1,
       heading: "Phone Number",
       value: ["+91 93266875077"],
       icon: <FaPhoneAlt />,
       event:handlePhoneClick
     },
     {
       id: 2,
       heading: "EMAIL",
       value: ["semiconinfotech@gmail.com"],
       icon: <FaEnvelope/>,
       event:handleEmailClick
     },
     {
       id: 3,
       heading: "Contact Person",
       value: ["Lalit Solanki"],
       icon: <FaEarthAmericas />,

     },
     {
       id: 4,
       heading: "Address",
       value: [
         "D-88, GOPAL CHARAN INDUSTRIAL GLOBE , NEAR ROAD NO.5, GIDC-KATHWADA, AHMEDABAD, Ahmedabad, Gujarat, 382430",
       ],
       icon: <FaLocationDot />,
     },
   ];

  return (
    <div>
<BannerPage heading={"Contact Us"} bredcrum={bredcrum}/>

<div className="grid grid-cols-1 md:grid-cols-2 lx:grid-cols-2 px-[5%] mt-[50px]  h-auto py-4 place-items-center gap-5 overflow-hidden mb-[50px]">
<div className="">
  <div
   
    className=""
  >
    <h5 className="text-[1rem] text-lighBlue">
      CONTACT US
    </h5>
    <h3 className="text-[2rem] md:text-[3rem] font-Oswald font-semibold lg:text-[3.5rem] dark:text-white text-headingClg ">
      Get In Touch
    </h3>
    <p className="text-[0.8rem] md:text-[1rem] dark:text-gray-500 text-headingClg ">
  {`We've got answers! If you have any questions, feedback, or
      inquiries, feel free to get in touch with us using the Contact Info.
      Our team will get back to you as soon as possible.`}
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-7 gap-y-4 dark:text-white text-headingClg ">
    {contactData.map((item) => {
      return (
        <div
          key={item.id}
          className=" w-full  flex gap-2 flex-col items-center justify-center border-[1px] border-solid border-lighBlue p-[20px] rounded "
         
        >
          <div className="text-lighBlue ">{item.icon}</div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[1.2rem] font-medium font-Roboto">
              {item.heading}
            </h4>
            {item.value.map((each) => {
              return (
                <p
                  className="text-[0.9rem] font-Oswald dark:text-gray-300 text-headingClg  ml-2 text-center mt-2"
                  key={each}
               onClick={item.event?item.event:null} >
                  {each}
                </p>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
</div>
<div className="">
  <div
    className="border-[1px] border-solid border-lighBlue p-[7%]  rounded-md "
    initial={{ opacity: 1, x: 0 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      ease: "linear",
      duration: 1,
    }}
  >
    <h2 className="text-lighBlue font-Roboto font-semibold text-[1.7rem] md:text-[2rem]">
      You Have Question?
    </h2>
    <p className="text-[0.9rem] md:text-[1rem] dark:text-slate-400 text-headingClg">
      Contact us using the form below,and we'll be happy to assist you.
    </p>

    <div className="mt-5">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="">
          <input
            type="text"
            className="h-[40px] border-[1px] border-solid border-lighBlue w-full focus:outline-0 rounded pl-3 bg-transparent  text-lighBlue"
            placeholder="Your Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name}</span>
          )}
        </div>
        <div className="">
          <input
            type="email"
            className="h-[40px] border-[1px] border-solid border-lighBlue w-full focus:outline-0 rounded pl-3 bg-transparent text-lighBlue"
            placeholder="Your Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email}</span>
          )}
        </div>
        <div className="">
          <input
            type="number"
            className="h-[40px] border-[1px] border-solid border-lighBlue w-full focus:outline-0 rounded pl-3 bg-transparent text-lighBlue"
            placeholder="Your Phone"
            name="phoneNo"
            value={formValues.phoneNo}
            onChange={handleChange}
          />
          {errors.phoneNo && (
            <span className="text-red-500">{errors.phoneNo}</span>
          )}
        </div>
        <div className="">
          <textarea
            className="h-[100px] border-[1px] border-solid border-lighBlue w-full focus:outline-0 rounded pl-3 bg-transparent text-lighBlue"
            placeholder="Your Message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className="text-red-500">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="h-[40px] w-full bg-bgClr text-white rounded"
        >
         {sendMeassege?'SEND MESSAGE':'Sending...'} 
        </button>
      </form>
    </div>
  </div>
</div>
</div>
<div className='flex items-center justify-center flex-col my-[30px]'>
<h2 className=' text-headingClg text-[30px] font-semibold'>Find Us On Google Maps</h2>

<div className=''>


</div>
</div>
    </div>
  )
}

export default Contact