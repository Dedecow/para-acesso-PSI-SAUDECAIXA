import { Button, MenuItem, TextField, TextareaAutosize } from "@mui/material";
import { useEffect, useState } from 'react';
import './styled.css';

function CadastroDeMedicamento (){

    const [medicamento, setMedicamento] = useState({
        laboratorio: '',
        dosagem: '',
        tipo: '',
        precoUnitario: '',
        nome: '',
        descricao: ''
    });

    const [lista, setLista] = useState([]);
       useEffect(() => {
        if(localStorage.getItem('lista_medicamentos') !== null) {
            setLista(JSON.parse(localStorage.getItem('lista_medicamentos')))
        }
    }, [])
  
    useEffect(() => {
        localStorage.setItem('lista_medicamentos', JSON.stringify(lista))
    }, [lista])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMedicamento({...medicamento, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();console.log(lista);setLista([...lista, medicamento])
    };

   
    const [selectedOption, setSelectedOption] = useState('');

    const handleChangeSelect = (event) => {
    setSelectedOption(event.target.value);
    };

    return (
        <form className = "container" onSubmit={handleSubmit}>
        
        <div className="text-field" >
            <TextField label="Medicamento" variant="outlined" required = {true} name="nome" value={medicamento.nome} onChange={handleChange} />
            <TextField label="Laboratório" variant="outlined" required = {true} name="laboratorio" value={medicamento.laboratorio} onChange={handleChange} />
            <TextField label="Dosagem" variant="outlined" required = {true} name="dosagem" value={medicamento.dosagem} onChange={handleChange} />
            {/* <TextField label="Preço Unitário" variant="outlined" required = {true} name="precoUntario" value={medicamento.precoUnitario} onChange={handleChange} />  */}
        </div>
        
        <div className="select-container">
        <TextField
        select
        label="Selecione o Tipo" value={medicamento.tipo} onChange={handleChange}
        variant="outlined"
        fullWidth
        >
        <MenuItem name="tipo">Medicamento Comum</MenuItem>
        <MenuItem name="tipo">Medicamento Controlado</MenuItem>
        </TextField>
        </div>

        <div className ="text-area">
        <TextareaAutosize label= "Descrição do medicamento " name="descricao" value={medicamento.descricao} onChange={handleChange} />
        </div>
        
        <div className="button-container">
        <Button variant="contained"> LIMPAR </Button>
        <Button type="submit" variant="contained"> SALVAR </Button>
        </div>
        
        </form>
        

    )
};

export { CadastroDeMedicamento};