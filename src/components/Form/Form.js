import { useState, useContext } from 'react'


const Form = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
            const buyer = [{
                "name": name,
                "phone": phone,
                "email": mail
            }]
            console.log(buyer);

localStorage.name = name
localStorage.phone = phone
localStorage.mail = mail
}

const vaciarDatos = () => {
    localStorage.clear()
}


    const handleKeyDown = (e) => {
        if(e.code === 'Space') {
            e.preventDefault()
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <label  class="form-label">Nombre Completo</label>
    <input type="text" id='name' onChange={(e) => setName(e.target.value)} onKeyDown={handleKeyDown} class="form-control"/>
    <label class="form-label">Teléfono</label>
    <input type="text" id='phone' onChange={(e) => setPhone(e.target.value)} onKeyDown={handleKeyDown} class="form-control" />
    <label class="form-label">E-mail</label>
    <input type="text" id='mail' onChange={(e) => setMail(e.target.value)} onKeyDown={handleKeyDown} class="form-control" />
    <button type='submit'>submit</button>

    <h3>Información del usuario</h3>
    <p>Nombre: {localStorage.name}</p>
    <p>Correo Electrónico: {localStorage.mail}</p>
    <p>Teléfono: {localStorage.phone}</p>

    <button onClick={() => vaciarDatos()}>Vaciar Datos</button>

        </form>
    )
}

export default Form 