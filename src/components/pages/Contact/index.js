import {React, useState} from 'react'
import { send } from 'emailjs-com'
import { ContactContainer, ContactTitle, Form, FormWrapper, Inputs, Submit } from './EmailElements';

const Email = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name:"walter.pham1@gmail.com",
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_gtiezgr',
            'template_psjhq74',
            toSend,
            'user_MhGQY32cPzkgJ5OxwyEMO'
        )
            .then((response) => {
                console.log('Success!', response.status, response.text)
            })
            .catch((err) => {
                console.log('Failed...', err)
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }


    return (
        <ContactContainer>
            <FormWrapper>
            <ContactTitle>Contact Me!</ContactTitle>
              <Form onSubmit={onSubmit}>

                        <Inputs 
                        type="text"
                        name="from_name"
                        placeholder="Your name"
                        value={toSend.from_name}
                        onChange={handleChange}/>
                        <Inputs
                        type="text"
                        name="message"
                        placeholder="Your message"
                        value={toSend.message}
                        onChange={handleChange}
                        />
                        <Inputs
                        type="text"
                        name="reply_to"
                        placeholder="Your email"
                        value={toSend.reply_to}
                        onChange={handleChange}
                        />
                        <Submit type='submit'>Submit</Submit>
                </Form>  
            </FormWrapper>
        </ContactContainer>
    )
}

export default Email
