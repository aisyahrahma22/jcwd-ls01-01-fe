import React from 'react';
import './UploadSuccess.css';
import uploadsuccess from '../../../Assets/uploadSuccess.svg';

const UploadSuccess = () => {
  return (
    <div id="container-upload-success">
      <img src={uploadsuccess} alt="" className="mb-4" />
      <div className="mb-2">Upload Recipe Successful!</div>
      <div className="mb-5">You will get a notification if your doctor's prescription is confirmed by the admin</div>
      <button class="btn btn-danger">View Order Progress</button>
    </div>
  );
};

export default UploadSuccess;
