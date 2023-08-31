"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [err,setErr] = useState(false)
  const router = useRouter()

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log(name,email,password)

    try {
      const res = await fetch("/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({name,email,password})

      })
      res.status===201 & router.push("/dashboard/login?success=Account has been created")
    } catch (error) {
      console.log(error)
      setErr(true)
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder='username' type='text' className={styles.input} required/>
        <input placeholder='email' type='email' className={styles.input} required/>
        <input placeholder='pasword' type='password' className={styles.input} required/>
        <button className={styles.button}>Register</button>
      </form>
      {
        err && "Something went wrong."
      }
    <Link href="/dashboard/login" className={styles.link}>Log in with an existing account.</Link>
    </div>
  )
}

export default Register