import React from 'react';
import '../../index.css';

const Formulaire1 = (_inscrit) => {
  let form = _inscrit === true ? <div><h1>{'Inscription'}</h1><input type="text" placeholder='Nom'/><input type="text" placeholder="Prénom"/><input type="text" placeholder='Adresse'/> <input type="text" placeholder='Email'/><input type="text" placeholder='Mot de passe'/></div> : <div><h1>{'Connexion'}</h1><input type='text' placeholder='Email'/><input type="text" placeholder='Mot de passe'/></div> ;
  return (
    <div>
        {form}
    </div>
  
  )
}

export default Formulaire1


