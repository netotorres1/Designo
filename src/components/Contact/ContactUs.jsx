import React from 'react'
import styles from './../../styles/Contact/ContactUs.module.css'
import { useState } from 'react'
import Image from 'next/image'

const ContactUs = () => {

  const [form, setForm] = useState({
    name:'',
    email:'',
    phone:'',
    message:''
  })

  const [emptyValue, setEmptyValue] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const handleChange = (e) => {
    e.target.name 
    e.target.value 

    setValidEmail(true)
    let newProp = form;
    newProp[e.target.name] = e.target.value;
    setForm({...newProp})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let emptyValues = Object.values(form).some(obj => obj == '');
    setEmptyValue(emptyValues);

    let validEmail = form['email'].toLocaleLowerCase().match(/[a-z]+@[a-z]+\.com(\.br)*/);
    setValidEmail(validEmail)

    if(!emptyValues && validEmail){
      e.currentTarget.submit();
    }
  }

  return (
    <div className={styles.container}>
        <article className={styles.containercontent}>
            <div className={styles.containerleft}>
            <h1 className={styles.title}>Contact Us</h1>
              <p className={styles.p}>
                Ready to take it to the next level? Let’s talk about your project or idea and find out how 
                we can help your business grow. If you are looking for unique digital experiences that’s 
                relatable to your users, drop us a line.
              </p> 
            </div>
            <div className={styles.containerright}>
              <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>
                <input className={styles.input} type='text' name='name' placeholder="Name" onBlur={(e) => handleChange(e)} />
                {emptyValue && form['name'] == '' ? <span className={styles.error}>Can't be empty <Image src='/assets/contact/desktop/icon-error.svg' alt='icon-error' height={15} width={15}/> </span> : ''}
                <input className={styles.input} type='text' name='email' placeholder="Email Address" onBlur={(e) => handleChange(e)} />
                {emptyValue && form['email'] == '' ? <span className={styles.error}>Can't be empty<Image src='/assets/contact/desktop/icon-error.svg' alt='icon-error' height={15} width={15}/></span> : ''}
                {!validEmail && form['email'] !== '' ? <span className={styles.error}>Please use a valid email address <Image src='/assets/contact/desktop/icon-error.svg' alt='icon-error' height={15} width={15}/></span> : ''}
                <input className={styles.input} type='text' name='phone' placeholder="Phone" onBlur={(e) => handleChange(e)} />
                {emptyValue && form['phone'] == '' ? <span className={styles.error}>Can't be empty <Image src='/assets/contact/desktop/icon-error.svg' alt='icon-error' height={15} width={15}/></span> : ''}
                <textarea className={styles.inputtextarea} name='message' placeholder='Your Message' onBlur={(e) => handleChange(e)}>
                </textarea>
                {emptyValue && form['message'] == '' ? <span className={styles.error}>Can't be empty <Image src='/assets/contact/desktop/icon-error.svg' alt='icon-error' height={15} width={15}/></span> : ''}
                <button type='submit' className={styles.button}>Submit</button>
              </form>
            </div>
        </article>
    </div>
  )
}

export default ContactUs