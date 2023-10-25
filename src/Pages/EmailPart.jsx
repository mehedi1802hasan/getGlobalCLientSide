import React, { useState } from 'react';
import { FcLock } from 'react-icons/fc';
import Swal from 'sweetalert2';

const EmailPart = () => {
    const [email, setEmail] = useState('');

    const handleEmail = (e) => {
        e.preventDefault();
        const enteredEmail = email; // Use the email state
        setEmail(''); // Clear the email input

        const addEmail = {
            email: enteredEmail,
        };

        fetch('https://get-global-server-dbi6jy4ux-mehedi1802hasan.vercel.app/email', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addEmail),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
                let timerInterval;
                Swal.fire({
                    title: 'Hello! Welcome to Get Global',
                    html: 'Email Saved in the database successfully ',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const b = Swal.getHtmlContainer().querySelector('b');
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft();
                            }, 100);
                        }
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer');
                    }
                });
            }
        });
    };

    return (
        <div className='bg-[#F4EFF7] p-12'>
            <div className='md:w-[1000px] lg::w-[1200px] mx-auto'>
                <h3 className='text-2xl font-bold text-center'>Stay Ahead of the Curve</h3>
                <p className='text-center mt-3 mb-5'>Get exclusive early access to the finest global job listings, sign <br /> up below and be the first to know when we launch</p>

                <div className='text-center'>
                    <form onSubmit={handleEmail}>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update the email state
                            placeholder="enter your email here"
                            className="input input-bordered input-md md:w-[500px] p-6 rounded-3xl h-[58px]"
                            required
                        />
                        <button type='submit' className='btn btn-md text-white hover-bg-blue-500 rounded-3xl hover:bg-blue-500 bg-[#645BC8] md:w-[110px] lg::w-[110px] lg:md:-ml-[120px] md:-ml-[120px]'>Notify me</button>
                    </form>
                </div>
                <div className='mt-4'>
                    <div className='justify-center items-center flex font-bold text-lg gap-1'><span><FcLock/></span> We value your privacy.</div>
                    <h3 className='text-center mt-2'>Rest assured, your email is safe with us. No spam, just updates about our exclusive <br /> launch</h3>
                </div>
            </div>
        </div>
    );
};

export default EmailPart;
