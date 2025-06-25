import React from 'react';
import Marquee from 'react-fast-marquee';

const videos = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
];

const VideoCarousel = () => {
  return (
    <div className="w-full  flex items-center justify-center h-[500px] py-6">
      <Marquee direction='right' gradient={false} speed={30} pauseOnHover={true}>
        {videos.map((src, index) => (
          <div key={index} className="mx-4 min-w-[200px]">
            <video
              src={src}
              autoPlay
              loop
              muted
              className="cursor-pointer rounded-xl w-[300px] h-[400px] object-cover shadow-lg"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default VideoCarousel;
