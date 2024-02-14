import React, { useContext } from 'react'
import Button from './Button'
import { useStateContext } from '../context/ContextProvider';
import { userProfileData
 } from '../data/dummy';
import avatar from '../data/avatar.jpg'

const UserProfile = () => {
    const {currentColor} = useStateContext();
  return (
    <div className='w-72 height-full fixed p-3 rounded-md top-14 right-5 dark:text-gray-200 bg-white dark:bg-[#484B52]'>
    <div className='flex flex-wrap h-full overflow-y-auto'>
    <p className='p-2 font-semibold text-lg'>User Profile</p>
    </div>
    <div>
    <div className='flex mt-2'>
      <img src={avatar} className='mt-1 w-20 h-20 rounded-full' />
      <div className='flex-col ml-2 mt-3'>
        <p className='font-semibold text-md'>Michael Jones</p>
        <p className='text-xs font-bold text-gray-400'>Admin</p>
        <p className='text-xs font-bold text-gray-400'>info@example.com</p>
      </div>
      </div>
      <div className='mt-8'>
        {userProfileData.map((item, index) => (
          <div 
          key={index}
          className='flex ml-4 mr-4 mt-5 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-150 ease-in-out cursor-pointer'>
          
          <button type='button'
            style={{ color: item.iconColor,
            backgroundColor: item.iconBg }}
            className="text-2xl opacity-0.9 rounded-2xl p-4 hover:drop-shadow-xl h-15">
              {item.icon}
            </button>
          <div className='flex ml-2'>
            <div className='flex flex-col'>
              <p className='text-md font-semibold'>{item.title}</p>
              <p className='text-md font-light text-gray-400'>{item.desc}</p>
              
            </div>
            <div className='flex-col border-t-1 border-black-200' />
            </div>
            
          </div>
        ))}
      </div>
      <div className='mt-6 ml-12 w-full flex items-center'>
      <Button 
            color="white"
            bgColor={currentColor}
            text="Log Out"
            borderRadius="10px"
            size="md" 
            width="50"
            height="50"
            />
            </div>
    </div>
    </div>

  )
};
 
export default UserProfile