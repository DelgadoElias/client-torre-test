import React, { useState } from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { fetchUserExperiences, fetchUsers, fetchUserSkills, setToast } from "../../store/actions";

export default function Navbar(){
    
    const dispatch = useDispatch()
    const [bool, setBool] = useState(true)
    const [search, setSearch] = useState('')
    const [display, setDisplay] = useState('Nav-display')

    dispatch(setToast('User 404 - not found'))

    function searchHandler(){
        setBool(!bool)
        if(bool){
            setDisplay('')
        }else{
            setDisplay('Nav-display')
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(fetchUsers(search))
        dispatch(fetchUserSkills(search))
        dispatch(fetchUserExperiences(search))

        console.log(search);
        setSearch('')
    }

    function onInputChange(e){
        e.preventDefault();
        // useState del search?
        setSearch(e.target.value);
    }
    // *****
    return (
    <nav className="Navbar__main">
        <article className="NavBar">
            <section className="NavBar__One">
                <div className="Navbar__Toggle">
                    <button className="Navbar__Icon-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#5E8F4B" d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/></svg>
                    </button>
                </div>
                <div>
                    <Link className="Navbar__Redirect" to="/home">
                    <span href="#home" className="NavBar__Item-home">torre</span><span>.co</span>
                    </Link>
                </div>
            </section>
            <section className="NavBar__Item-Two">
                <div className="Navbar__Search">
                    <button onClick={searchHandler}  className="Navbar__Icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#5E8F4B" d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
                    </button>
                </div>
                <div className="Navbar__Redirect">
                    <Link className="Navbar__Redirect" to="/home">
                    <span href="https://accounts.torre.co/email/?next=/openid/authorize%3Fscope%3Dopenid%2Bprofile%2Bemail%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Ftorre.co%252Fcallback%253Fclient_name%253Dstarrgate%26state%3Dg-lTpXsoOBN3Y_vTRpjy3PiFszHLmPl9mxX3EQgeVTI%26intent%3Dhome%253Asign-in%26client_id%3D541493" className="">SIGN IN</span>
                    </Link>
                </div>
            </section>
     </article>
            <article className={`${display} Navbar__Input`}>
                <form onSubmit={e => handleSubmit(e)}>
                    <input className="Navbar__Input-text" type="text" placeholder="Search" onChange={e => onInputChange(e)} value={search} />
                    <input className="Navbar__Input-btn" type="submit" value="Search" />
                </form>
            </article>
    </nav>
  )
}