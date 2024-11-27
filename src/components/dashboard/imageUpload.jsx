'use client'
import React, { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import app from '@/lib/firebase';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!image) return;

    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      }, 
      (error) => {
        console.error('Upload error:', error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          console.log('File available at', downloadURL);
        });
      }
    );
  };

  return (
    <div className="space-y-4">
      <Input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        className="mb-2"
      />
      <Button onClick={handleUpload} disabled={!image}>
        Upload Image
      </Button>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div>Upload Progress: {uploadProgress.toFixed(2)}%</div>
      )}
      {imageUrl && (
        <div>
          <p>Uploaded Image URL:</p>
          <img src={imageUrl} alt="Uploaded" className="max-w-xs mt-2" />
        </div>
      )}
    </div>
  )
}

export default ImageUpload