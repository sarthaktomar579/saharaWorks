"use client"
import React from 'react'
import Script from 'next/script'
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions'
import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"

const PaymentaPage = ({ username }) => {

  // const { data: session } = useSession();
  const [paymentform, setPaymentform] = useState({})
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])

  useEffect(() => {
        getData()
  }, [])
  

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async(params) => {
       let u = await fetchuser(username)
       setcurrentUser(u)
       let dbpayments = await fetchpayments(username)
       setPayments(dbpayments)
       console.log(u, dbpayments);
       
  }

  const pay = async (amount) => {
    //Get the order id
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id
    var options = {
      "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Get Me A Chai", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      },
      // "method": { // Specify the payment methods explicitly
      //   "upi": true,  // Enable UPI
      //   "card": true, // Enable Card (optional)
      //   "netbanking": true // Enable Netbanking (optional)
      // }
    }

    var rzp1 = new Razorpay(options);
    rzp1.open();

  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>



      <div className='cover w-full relative'>

        <img className='w-full object-cover' src={currentUser.coverpic} alt="" />

        <div className='absolute -bottom-16 right-[46%] border-white border-2 rounded-full overflow-hidden size-32'>
          <img className='rounded-full object-cover size-32' width={128} height={128} src={currentUser.profilepic} alt="" />
        </div>
      </div>



      <div className='info flex flex-col justify-center gap-1 items-center my-20'>

        <div className='font-bold text-lg'>
          @{username}
        </div>

        <div className='text-slate-400'>
          Creating premium audio content
        </div>

        <div className='text-slate-400'>
          59,764 members1,061 posts
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 rounded-lg bg-slate-900 text-white py-5 px-8">
            {/* show the list of all the supporters as a leaderboard*/}

            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='text-lg'>
              {payments.length == 0 && <li>No payments yet </li>}
              { payments.map((p, i) =>{
                return <li key={i} className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.png" alt="user avatar" />
                <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"</span>
              </li>
              })}

            </ul>

          </div>

          <div className="supporters w-1/2 rounded-lg bg-slate-900 text-white py-5 px-10">
            <h2 className='text-2xl font-bold my-5'>Make a payment</h2>
            <div className="flex flex-col gap-2">

              <div>
                <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Name' />
              </div>

              <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Message' />
              <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Amount' />

              <button onClick={() => pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled: bg-slate-600" disabled={paymentform.name?.length<3 || paymentform.message?.length<4}>Pay</button>
            </div>

            <div className="mt-5 flex gap-2">
              <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(1000)}>Pay ₹10</button>
              <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(2000)}>Pay ₹20</button>
              <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(3000)}>Pay ₹30</button>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default PaymentaPage
