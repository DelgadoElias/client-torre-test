import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

export default function Landing(){
    
    
    return(<article className="Land__Main animated fadeIn fast">

        <section className="Land__Title">
            <h1 className="Land__Title-main">torre</h1>
            <span className="Land__Title-sub">.co</span>
        </section>
        <section>
        <Link to="/home">
            <button className="Land__Button">
                Search users
            </button>
        </Link>
        </section>

    </article>)
}