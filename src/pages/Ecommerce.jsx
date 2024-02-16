import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import {earningData, SparklineAreaData, ecomPieChartDat, recentTransactions, weeklyStats, productsPerformance } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import ProgressBar from '../components/ProgressBar';


const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-xl font-bold'>$70,454.65</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button 
            color="white"
            bgColor={currentColor}
            text="Download"
            borderRadius="10px"
            size="md" />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-5 items-center'>
          {earningData.map((item) => (
            <div
            key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            > 
            <button type='button'
            style={{ color: item.iconColor,
            backgroundColor: item.iconBg }}
            className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
              {item.icon}
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>
                {item.amount}
              </span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className='text-sm text-gray-500 mt-1'>{item.title}</p>
            </div>
          ))}

        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
      <div className='bg-white 
        dark:text-gray-200
        dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
      <p className='font-semibold text-xl'>Recent Transactions</p>
      <div className='mt-10'>
        {recentTransactions.map((item, index) => (
          <div
          key={index}
          className='flex ml-4 mr-4 mt-5 transition duration-150 ease-in-out'>
          
          <button type='button'
            style={{ color: item.iconColor,
            backgroundColor: item.iconBg }}
            className="text-2xl opacity-0.9 rounded-2xl p-4 hover:drop-shadow-xl h-15">
              {item.icon}
            </button>
            <div className='flex ml-5'>
            <div className='flex flex-col'>
              <p className='text-md font-semibold'>{item.title}</p>
              <p className='text-md font-light text-gray-400'>{item.desc}</p>
              
            </div>
            </div>
            <div className='ml-auto mr-4'>
            <p className={`text-${item.pcColor}`}>{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex-col border-t-1 border-black-200 mt-5' />
      <div className='ml-5 mt-5'>
      <Button 
            color="white"
            bgColor={currentColor}
            text="Add"
            borderRadius="10px"
            size="md" />
            <div className='float-right mt-3'>
          <p className='text-gray-400'>20 Recent Transactions</p>
      </div>
      </div>
  
      </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
      <div className='bg-white 
        dark:text-gray-200
        dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
      <p className='font-semibold text-xl'>Products Performance</p>
      <div className='mt-10'>
        {productsPerformance.map((item, index) => (
          <div
          key={index}
          className='flex ml-4 mr-4 mt-5 transition duration-150 ease-in-out '>
            <img src={item.image} className='h-15 w-28 rounded-2xl' />
            <div className='flex ml-5'>
            <div className='flex flex-col'>
              <p className='text-md font-semibold'>{item.title}</p>
              <p className='text-md font-light text-gray-400'>{item.desc}</p>
              
            </div>
            </div>
            <div className='ml-auto mr-4'>
            <p className='mb-2 ml-2'>{item.rating}</p>
              <ProgressBar percentageValue={item.itemSold} />
              <p className='text-xs text-gray-400 mt-2 ml-2'>{`${item.itemSold} sold`}</p>
            </div>
            <div className='ml-4 mt-2'>
              <p className='text-sm text-gray-400'>Earnings</p>
              <p className='font-semibold mt-1'>{item.earningAmount}</p>
            </div>
          </div>
        ))}
      </div>
                  
      </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
      <div className='bg-white 
        dark:text-gray-200
        dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
      <p className='font-semibold text-xl'>Weekly Stats</p>
      <div className='mt-10'>
        {weeklyStats.map((item, index) => (
          <div
          key={index}
          className='flex ml-4 mr-4 mt-5 transition duration-150 ease-in-out'>
          
          <button type='button'
            style={{ color: item.iconColor,
            backgroundColor: item.iconBg }}
            className="text-2xl opacity-0.9 rounded-2xl p-4 hover:drop-shadow-xl h-15">
              {item.icon}
            </button>
            <div className='flex ml-5'>
            <div className='flex flex-col'>
              <p className='text-md font-semibold'>{item.title}</p>
              <p className='text-md font-light text-gray-400'>{item.desc}</p>
              
            </div>
            </div>
            <div className='ml-auto mr-4'>
            <p className={`text-${item.pcColor}`}>{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
                  
      </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white 
        dark:text-gray-200
        dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-grey-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expenses</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
              <div className='border-r-1 border-color- m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>25%</span>
                </p>
                <p className='text-gray-400 mt-2'>Budget</p>
                <p>
                  <span className='text-3xl font-semibold'>$36,543</span>
                </p>
                <p className='text-gray-400 mt-2'>Expense</p>
              </div>

              <div className='mt-5'>
              <SparkLine 
                currentColor={currentColor}
                id="line-sparkline"
                type="Line"
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color={currentColor} />
              </div>
              <div className='mt-10'>
              <Button
              color="white"
              bgColor={currentColor}
              size="10"
              text="Download Report"
              borderRadius="10px" />
              </div>
              </div>
              <div>
                <Stacked
                width="320px"
                height="360px" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce