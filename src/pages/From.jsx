import React from 'react';

const Form = () => {
  return (
    <div className="bg-gray-200 h-10 w-10">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form action="">
          <div className="flex items-center mb-5">
            <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold text-gray-600">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
          </div>
          <div className="flex items-center mb-5">
            <label htmlFor="url" className="inline-block w-20 mr-6 text-right font-bold text-gray-600">URL</label>
            <input type="text" id="url" name="url" placeholder="URL" className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
          </div>
          <div className="flex items-center mb-5">
            <label htmlFor="image" className="inline-block w-20 mr-6 text-right font-bold text-gray-600">Upload</label>
            <input type="file" id="image" name="image" className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
          </div>
          <div className="text-right">
            <button className="py-3 px-8 bg-green-400 text-white font-bold">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
