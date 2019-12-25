import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../../styles/contact.scss';

const Contact = () => {
    return (
        <section id="Contact">
            <form className="contact-form">
            <h2>Contact</h2>
            <TextField
                className="input-field"
                label="お名前"
                type="text"
                margin="normal"
                required
            />
            <TextField
                className="input-field"
                label="メールアドレス"
                type="mail"
                margin="normal"
                required
            />
            <TextField 
                className="input-field"
                label="お問い合わせ内容"
                name="content"
                margin="normal"
                rows="6"
                variant="outlined"
                multiline
            />
            <Button variant="contained" color="primary" type="submit">送信</Button>
            </form>
        </section>
    );
}

export default Contact;
