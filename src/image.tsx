import React from 'react';
import './image.css';

// حدد نوع البيانات للمصفوفة كمصفوفة نصوص (string[])
const images: string[] = [
  'https://picsum.photos/id/1015/300/200',
  'https://picsum.photos/id/1018/300/200',
  'https://picsum.photos/id/1025/300/200',
  'https://picsum.photos/id/1035/300/200',
  'https://picsum.photos/id/1043/300/200',
];

export const ImageSlider: React.FC = () => {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {/* نكرر الصور مرتين لضمان استمرار الدوران دون تقطيع */}
        {[...images, ...images].map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;