import {React, useState} from 'react'
import { send } from 'emailjs-com'
import { ContactContainer, ContactTitle, Form, FormWrapper, Inputs, Submit, Message } from './EmailElements';

const Email = () => {

    // set initial state for emails
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name:"walter.pham1@gmail.com",
        message: '',
        reply_to: '',
    });

    // send through to mailer onsubmit
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

    // handle input values
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }


    return (
        <ContactContainer id="contact">
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
                        name="reply_to"
                        placeholder="Your email"
                        value={toSend.reply_to}
                        onChange={handleChange}
                        />
                        <Message
                        type="text"
                        name="message"
                        placeholder="Your message"
                        value={toSend.message}
                        onChange={handleChange}
                        id="message"
                        />
                        <Submit type='submit'>Submit</Submit>
                </Form>  
            </FormWrapper>
        </ContactContainer>
    )
}

export default Email
