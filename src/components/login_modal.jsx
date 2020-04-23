import React, { useState, useEffect } from 'react'
import './styles/login_modal.css'

// libraries 
import { Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Col, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText 
} from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'

export default () => {

    let location = useLocation()

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    return (
        <div>
            <Link to='login'>
                <div className='user' onClick={toggle}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189"/></svg>
                </div>
            </Link>
            

            <Modal isOpen={modal} toggle={toggle}>

                <ModalBody>

                    {
                        location.pathname==='/login'?
                        <section id='box'>

                            <span style={{margin:'auto', paddingTop:'5vh', fontSize:'30px'}}>Welcome back</span>

                            <div className='mymodal'>

                                <div className='mybox'>
                                    <Button color='light' className='signin'>
                                        <img 
                                            src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' 
                                            style={{height:'20px'}}
                                            alt='' /> &nbsp;
                                        Sign in with Google
                                    </Button>
                                    <Button color='light' className='signin'>
                                        <img 
                                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg==' 
                                            style={{height:'20px'}}
                                            alt='' /> &nbsp;
                                        Sign in with Facebook
                                    </Button>
                                    <Button color='light' className='signin'>
                                        <img 
                                            src='https://pngimg.com/uploads/twitter/twitter_PNG9.png' 
                                            style={{height:'20px'}}
                                            alt='' /> &nbsp;
                                        Sign in with Twitter
                                    </Button>
                                    <Button color='light' className='signin'>
                                        <img 
                                            src='https://www.freepnglogos.com/uploads/email-logo-png-27.png' 
                                            style={{height:'20px'}}
                                            alt='' /> &nbsp;
                                        Sign in with Email
                                    </Button>
                                </div>
                            </div>

                            <span style={{display:'inline-block', margin:'auto', paddingBottom:'6vh', fontSize:'17px'}}>
                                No account? <Link to='/signup' className='signup'>Create one</Link>
                            </span>

                        </section>
                        :
                        <section id='box'>

                            <span style={{margin:'auto', paddingTop:'5vh', fontSize:'30px'}}>Join Youdium</span>

                            <p style={{textAlign:'center', fontSize:'14'}}>
                                Create an account to receive great stories in your inbox, 
                                personalize your homepage, and follow authors and topics that you love.
                            </p>

                            <div className='mymodal'>

                                <div className='mybox'>
                                    <Button color='light' className='signin'>
                                        <img 
                                            src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' 
                                            style={{height:'20px'}}
                                            alt='' /> &nbsp;
                                        Sign up with Google
                                    </Button>
                                    <Button color='light' className='signin'>
                                        <img 
                                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg==' 
                                            style={{height:'20px'}}
                                            alt='' /> &nbsp;
                                        Sign up with Facebook
                                    </Button>
                                    <Button color='light' className='signin'>
                                        <img 
                                            src='https://pngimg.com/uploads/twitter/twitter_PNG9.png' 
                                            style={{height:'20px'}}
                                            alt='' /> &nbsp;
                                        Sign up with Twitter
                                    </Button>
                                    <Button color='light' className='signin'>
                                        <img 
                                            src='https://www.freepnglogos.com/uploads/email-logo-png-27.png' 
                                            style={{height:'20px'}}
                                            alt='' /> &nbsp;
                                        Sign up with Email
                                    </Button>
                                </div>
                            </div>

                            <span style={{display:'inline-block', margin:'auto', paddingBottom:'6vh', fontSize:'17px'}}>
                                Already have an account? <Link to='/login' className='signup'>Sign in</Link>
                            </span>

                        </section>

                    }

                    

                </ModalBody>

            </Modal>
        </div>
        
    )
}