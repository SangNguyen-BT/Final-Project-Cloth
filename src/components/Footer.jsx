import React from 'react'
import "./css/footer.css"

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src="./images/3.jpg" className='w-28' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
          Light and airy tulle fabric lines decorate the Lace illuminating Dresses. They come in various hues and have classic details that are perfect for adding a timeless twist to this summer’s hottest looks. The length of the skirt is appropriate for modesty while showing off your long, lean legs. Given its height, it works well with your go-to ballet flats. You could also wear one of our short dresses and show off your sexy legs.
          </p>
        </div>
        <div className='pt-10'>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>

        <div className='pt-10'>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+2-241-097-9076</li>
                <li>contact@scorpiohome.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
Copyright 2024@ scorpiohome.com - All right Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer