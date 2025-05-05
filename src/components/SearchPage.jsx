import React from 'react';

const SearchPage = () => {
  return (
    <>
      <section className='bg-[url("/banner-img.jpg")] w-full h-[80vh] bg-center bg-cover bg-no-repeat mt-5 flex justify-center items-center'>
        <div className='bg-black w-full h-full bg-opacity-50 flex justify-center items-center'>
          <div className='container max-w-screen-lg w-full px-4'>
            <form className='w-full flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0'>
              <input 
                className='pl-4 w-full sm:w-[70%] h-12 rounded-md focus:outline-none' 
                type="text" 
                placeholder='Search Books' 
              />  
              <button 
                type='submit' 
                className='w-full sm:w-auto bg-blue-500 hover:bg-blue-600 transition text-white font-medium h-12 px-6 rounded-md'
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
