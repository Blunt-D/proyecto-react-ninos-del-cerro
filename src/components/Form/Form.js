import { useState} from 'react'


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

if(name && phone && mail != ''){
    alert('tus datos han sido ingresados exitósamente!')
} else {
    alert('Rellena todos los campos')
}

console.log(localStorage);



}

const vaciarDatos = () => {
    localStorage.clear()
    window.location.reload();
}


    const handleKeyDown = (e) => {
        if(e.code === 'Space') {
            e.preventDefault()
        }
    }

    return (

    <div className='container'>
    <div className="row align-items-start">

    <div className='col-6'>
    <form onSubmit={handleSubmit}>
    <label  class="form-label">Nombre Completo</label>
    <input type="text" id='name' onChange={(e) => setName(e.target.value)} onKeyDown={handleKeyDown} class="form-control"/>
    <label class="form-label">Teléfono</label>
    <input type="text" id='phone' onChange={(e) => setPhone(e.target.value)} onKeyDown={handleKeyDown} class="form-control" />
    <label class="form-label">E-mail</label>
    <input type="text" id='mail' onChange={(e) => setMail(e.target.value)} onKeyDown={handleKeyDown} class="form-control" />
    <button type='submit'>submit</button>
    </form>
    </div>

    <div className='col-6'>
    <h3>Información del usuario</h3>
    <p>Nombre: {localStorage.name}</p>
    <p>Correo Electrónico: {localStorage.mail}</p>
    <p>Teléfono: {localStorage.phone}</p>
    <button onClick={() => vaciarDatos()}>Vaciar Datos</button>
    </div>
        
        </div>
        </div>
    )
}

export default Form 