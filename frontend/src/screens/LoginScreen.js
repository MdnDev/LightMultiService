import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'



const LoginScreen = ({ location }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    

    useEffect(() => {
      if(userInfo) {
          navigate('/')
      }
  }, [userInfo, navigate])
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

  return (
    <FormContainer>
    <h1>Se connecter</h1>
    {error && <Message variant='danger'>L'adresse e-mail et/ou le mot de passe sont incorrectes.</Message>}
    {loading && <Loader></Loader>}
    <Form onSubmit={submitHandler}>
      <Form.Group controlId='email'>
        <Form.Label>Addresse Email</Form.Label>
        <Form.Control
        type='email'
        placeholder="Entrer l'email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        >
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
        type='password'
        placeholder="Entrer le mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        >
        </Form.Control>
      </Form.Group>

      <Button type='submit' variant='success'>
        Se connecter
      </Button>

    </Form>
  </FormContainer>
  )
  
}
  
  export default LoginScreen