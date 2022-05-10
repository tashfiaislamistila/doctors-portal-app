import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores assumenda saepe illum fugit, quam molestias voluptatum commodi magni repellat explicabo tempore? Quis deleniti repudiandae animi, rerum consequuntur eaque nostrum facilis!
                </p>
                <div class="flex item-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5 ">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>{review.name}</h4>
                    <p>{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;