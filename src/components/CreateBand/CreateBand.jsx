/* 6️⃣ **COMPONENTE CREATEBAND** 6️⃣

Implementar el componente CreateBand. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.

🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".

🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.

🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import React from "react";
import * as actions from "../../redux/actions/index"
import { useDispatch } from "react-redux";

const CreateBand = () => {
  const [state, setState] = React.useState({
    name: "",
    origin: "",
    description: "",
    tickets: 0,
  });
  const [errors, setErrors] = React.useState({
      name: "",
      origin: "",
      tickets: 0,
    });

  const dispatch = useDispatch();

    function validate(input) {
      var errors = {}
      if(input.name.length > 30) {errors.name="Nombre u Origen demasiado largo"};
      if(input.origin.length > 30) {errors.name="Nombre u Origen demasiado largo"};
      if(input.tickets < 0){errors.tickets="Los tickets deben ser un numero positivo"};
      return errors;
    }

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setState({ ...state, [property]: value });
    setErrors(validate({...state,[property]: value}))
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(!(errors.name || errors.tickets || errors.origin)){dispatch(actions.createBands(state));}
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={state.name} onChange={handleInputChange} />
        {errors.name &&(<p>{errors.name}</p>)}
        <label htmlFor="origin">Origin: </label>
        <input type="text" name="origin" value={state.origin} onChange={handleInputChange} />
        {errors.origin &&(<p>{errors.origin}</p>)}
        <label htmlFor="Description">Description: </label>
        <textarea type="text" name="description" value={state.description} onChange={handleInputChange} />
        <label htmlFor="Description">Tickets: </label>
        <input type="number" name="tickets" value={state.tickets} onChange={handleInputChange} />
        {errors.tickets && (<p>{errors.tickets}</p>)}
        <button type="submit">Create Band</button>
      </form>
    </div>
  );
};

export default CreateBand;