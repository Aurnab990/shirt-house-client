import React from 'react';

const BAnner = () => {
    return (
        <div>
            <div className="carousel w-full h">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img2.10bestmedia.com/static/img/placeholder-shopping.jpg" className="w-full" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn bg-yellow-400 btn-square">❮</a>
                        <a href="#slide2" className="btn bg-yellow-400 btn-square">❯</a>
                    </div>
                    <div className="bg-red-950 absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <h1 className='text-8xl text-white p-3'>
                            This is <br></br>
                            Our Product

                            <br></br>
                            <button className="btn btn-primary">Get Started</button>

                        </h1>
                        
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BAnner;