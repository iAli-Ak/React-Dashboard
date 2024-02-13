import React, { useContext } from 'react'
import Button from './Button'
import { useStateContext } from '../context/ContextProvider';
import { notificationData } from '../data/dummy';

const Chat = () => {
    const {currentColor} = useStateContext();
  return (
    <div className='w-72 height-full fixed p-3 rounded-md top-14 right-60 dark:text-gray-200 bg-white dark:bg-[#484B52]'>
    <div className='flex flex-wrap h-full overflow-y-auto'>
    <p className='p-2 font-semibold'>Messages</p>
    <p
    className="ml-3 p-2 mt-1 text-white text-xs rounded-lg"
    style={{ backgroundColor: currentColor }}
  >
    4 new
  </p>
</div>
<div className='ml-3'>
  {notificationData.map((item, index) => (
    <div key={index}
         className='flex mt-4 cursor-pointer hover:bg-gray-100 rounded-md'>
      <img src={item.image}  className='w-12 h-12 rounded-full'/>
      <div className='flex flex-col ml-3'>
      <p className='font-semibold text-sm'>{item.message}</p>
      <p className='text-xs font-bold text-gray-400 dark:'>{item.desc}</p>
      <p className='text-xs font-bold text-gray-400'>{item.time}</p>
      <div className='flex-col border-t-1 border-color mt-1' />
      </div>
    </div>
  ))}
</div>
<div className='m-6 ml-12 w-full flex items-center'>
<Button 
            color="white"
            bgColor={currentColor}
            text="See All Messages"
            borderRadius="10px"
            size="md" />
</div>
    </div>

  )
};
 
export default Chat