import {React, useState} from 'react'
import { send } from 'emailjs-com'

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
        <div className="App">
            <form onSubmit={onSubmit}>
                <input
                type="text"
                name="from_name"
                placeholder="from name"
                value={toSend.from_name}
                onChange={handleChange}
                />

                <input
                type="text"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
                />
                <input
                type="text"
                name="reply_to"
                placeholder="Your email"
                value={toSend.reply_to}
                onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Email
