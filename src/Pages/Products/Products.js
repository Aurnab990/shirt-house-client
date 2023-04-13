import React from 'react';

const Products = (props) => {
    const { name, img, description, price,stocks } = props.product;

    return (
        <div className=''>
            <div className="transition ease-in-out delay-550 hover:-translate-y-1 hover:scale-110 duration-1000 card card-compact w-96 bg-base-100 shadow-xl mt-8">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 40)}</p>
                    <div className="card-actions justify-between">
                        <div>
                            <button className="text-2xl text-red-500 uppercase font-semibold">

                                ${price}

                            </button>

                        </div>
                        {/* <div>
                            <span>{stocks>0?"Available":"Not Avaiable"}</span>
                        </div> */}

                        

                        {stocks>0?<button htmlFor="my-modal-3" onClick={() => props.handleClicked(props.product.name)} className="btn btn-primary uppercase">Details</button>:<p className='uppercase animate-pulse text-2xl font-bold text-white-500  ml-44'>Stack Out</p>}

                        


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;