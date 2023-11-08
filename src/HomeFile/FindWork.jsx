import { Button, TextInput } from 'flowbite-react';


const FindWork = () => {
    return (
        <div>
            <div className='mt-10 grid md:grid-cols-2 gap-6 md:flex justify-evenly bg-gradient-to-r from-indigo-500 items-center'>
                <div className="max-w-md mx-auto md:ml-0">
                    <h4 className='text-center text-white text-xl mb-3'>Search Here</h4>
                    <div className="mb-2 block flex">
                        <TextInput id="username3" placeholder="" required />
                        <Button color="blue" className='ml-[-50px]'>Search</Button>
                    </div>
                </div>
                <img src="https://i.ibb.co/XWMZjpp/logo-maker-banner-wide-desktop-1352-2x.webp" alt="" />
            </div>
        </div>
    );
};

export default FindWork;