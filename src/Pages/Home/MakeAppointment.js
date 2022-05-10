import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti maiores modi assumenda enim, recusandae esse fugiat veniam nostrum illo iste tempore sunt, quod, minima quibusdam similique eaque quisquam nobis?</p>
            </div>
        </section>
    );
};

export default MakeAppointment;