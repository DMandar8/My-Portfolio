import React from 'react';

const Alert = ({ type = 'success', text = '' }) => {
  const bgColor = type === 'danger' ? 'bg-red-800' : 'bg-blue-800';
  const bgColorSub = type === 'danger' ? 'bg-red-500' : 'bg-blue-500';
  const label = type === 'danger' ? 'Failed' : 'Success';

  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
      <div className={`${bgColor} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`} role='alert'>
        <p className={` ${bgColorSub} flex rounded-full px-2 py-1 mr-3 text-xs font-semibold uppercase`}>{label}</p>
        <p className='mr-2 text-left'>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
