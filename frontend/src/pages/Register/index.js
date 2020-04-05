import React from 'react'
import './styles.css'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from "../../assets/logo.svg"
import {Link} from  'react-router-dom'

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="bethehero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                   Voltar para nome
                </Link>
                </section>

                <form>
                   
                </form>
            </div>
        </div>
    )
}