import { Button, TextField } from "@mui/material";
import { useState } from 'react';
import logo from '../../assets/image/logotipo.jpeg';
import './styled.css';
import { useNavigate } from 'react-router-dom';


function Login (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
        if (email.trim() === "" || password.trim() === "") {
          setShowError(true);
        } else if (!isValidEmail(email) || !isValidSenha(password)) {
          setShowError(true);
        } else {
          setShowError(false);
          return navigate("/map")

        }
    }
    const isValidEmail = (email) => {
        const atIndex = email.indexOf("@");
        const dotIndex = email.lastIndexOf(".");
        
        return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
    };
 
    const isValidSenha = (password) => {
        return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
    }
    return(
        <form>  
        <p> Medication Management - Mais que farmácia, um centro de saúde. </p>
        <img className="logo" src={logo} alt="Logo da Farmácia" />      
        <p> Seja Bem Vindo, faça seu login  para continuar</p>
        <p>(email@email.com, senha: Psi123456)</p>
        
        <TextField 
            type="email" 
            required = {true}
            label="E-Mail" 
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
            required = {true}
            label="Senha" 
            variant="outlined"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
        /> 
        {showError ? <p> Digite um email válido e senha alfanumérica com pelo menos 8 caracteres.</p>:''}

        
        <Button variant="contained" onClick={ handleLogin } > ENTRAR </Button>
        </form>
      
    )
}
export { Login };