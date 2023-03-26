import React from 'react';

const BAnner = () => {
    return (
        <div>
            <div className="carousel w-full h-1/5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej-1280x720.png" className="w-full" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn bg-yellow-400 btn-square">❮</a>
                        <a href="#slide2" className="btn bg-yellow-400 btn-square">❯</a>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <h1 className='text-6xl text-white p-3'>
                            This is <br></br>
                            Our Product

                        </h1>
                        
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://s.focus-empfehlung.de/public/2022-07/st-shoppingmall-cshutterstock-7.2164880375.jpg" className="w-full" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn bg-yellow-400 btn-square">❮</a>
                        <a href="#slide2" className="btn bg-yellow-400 btn-square">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://joburg.co.za/wp-content/uploads/2020/07/10.jpg" className="w-full" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn bg-yellow-400 btn-square">❮</a>
                        <a href="#slide2" className="btn bg-yellow-400 btn-square">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BAnner;