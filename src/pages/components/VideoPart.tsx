import React from 'react';

function VideoSection() {
  return (
    <section className="video-section">
      <div className="container">
        <h2>Description of what we provide</h2>
        <p>add 4 to 5 boxes with different services</p>
        <div className="video-wrapper">
          <iframe width="100%" height="315" src="https://www.youtube.com/watch?v=TT7x-7LoVkY&list=RDMM&start_radio=1&rv=iYxJOBYaYGg" title="WebSCByDinko Project Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
