import React,{ useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import '../../styles/contact.scss';

const Contact = () => {
    const [checked, setChecked] = useState(false);
    const [submit, setSubmit] = useState(true);

    const handleChange = (e) => {
        setChecked(e.target.checked);
        setSubmit(!submit);
    }

    return (
        <section id="Contact">
            <div className="container">
            <form className="contact-form" method="POST" netlify>
            <h2 className="heading">Contact</h2>
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
                name="mail"
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
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                    />
                }
                label="チェックを入れて送信ボタンを押してください。"
            />
            <Button 
                variant="contained" 
                color="primary"
                disabled={submit}
                type="submit"
            >
                送信
            </Button>
            </form>
            </div>
        </section>
    );
}

export default Contact;
