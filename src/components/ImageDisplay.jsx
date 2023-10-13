import React, { useState, useEffect } from 'react';
import UrlHelper from "./../UrlHelper";

export default function ImageDisplay() {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageId = "7569363276";
        const response = await UrlHelper.get(`/images/${imageId}`, { responseType: 'arraybuffer' });
        const imageData = response.data;
        console.log(imageData)
        const blob = new Blob([imageData], { type: 'image/png' });
        const imageURL = URL.createObjectURL(blob);
        setImageURL(imageURL);
        // console.log("check", imageURL)
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <h2>Image:</h2>
      <img className='retIng' src={imageURL} alt="Img not retrieved!" />
    </div>
  );
}
