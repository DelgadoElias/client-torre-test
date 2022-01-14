import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css";

export default function Home() {
  const usersz = useSelector((state) => {
    return state.person;
  });
  const skills = useSelector((state) => {
    return state.skills;
  });

  const [drop, setDrop] = useState(false)
  const [dropIcon, setDropIcon] = useState('https://img.icons8.com/ios/50/ffffff/plus--v1.png')
  const [show, setShow] = useState('Skills__Main-container Dropdown')


  function dropSkills(){
    setDrop(!drop);
    if(drop === true){
      setShow('Skills__Main-container Complete')
      setDropIcon('https://img.icons8.com/ios/50/ffffff/minus.png')
    }else{
      setShow('Skills__Main-container Dropdown')
      setDropIcon('https://img.icons8.com/ios/50/ffffff/plus--v1.png')
    }
  }




  return (
    <article className="Home__sizing">

    <article className="Home__main-article">
      {usersz.publicId === "" ? (
        <section className="animted fadeIn fast">
          <div className="Loading__Main">
          <h1>Search a user to start</h1>
          </div>
          <section className="Land__Title">
            <h1 className="Land__Title-main">torre</h1>
            <span className="Land__Title-sub">.co</span>
        </section>
          
        </section>
      ) : (
          <article className="animated fadeIn fast">
        <section className="Home__main-profile">
          <div>
            <div className="Home__thumbnail">
              <svg
              className="Home__thumbnail"
                viewBox="0 0 100 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="img"
                    patternUnits="userSpaceOnUse"
                    width="100"
                    height="100"
                  >
                    <image
                      xlinkHref={usersz.pictureThumbnail}
                      x="-25"
                      width="150"
                      height="100"
                    />
                  </pattern>
                </defs>
                <polygon
                  points="50 1 95 25 95 75 50 99 5 75 5 25"
                  fill="url(#img)"
                />
              </svg>
            </div>
          </div>
            <h1 className="Home__Profile-name">{usersz.name}</h1>
            <h5 className="Home__Profile-role">{usersz.professionalHeadline}</h5>
        </section>
        <section className={show}>
            <div onClick={dropSkills} className="Skills__Show-btn">
            <button className="Skills__Show-btn">Skills</button>
            <img className="Skills__Drop-Icon" src={dropIcon}></img>
            </div>

            <div className="Skills__Title">
            <img className="Skills__Svg" src="https://img.icons8.com/ios/50/ffffff/cycling-bmx.png"/>            
            <p className="Skills__Text">Master/Influencer</p>
            </div>
            <div className="Skill__Container">
            {
              skills.master.map((x) => { return <span className="Skills__Master">{x.name}</span> })
            }
            </div>
            <div className="Skills__Title">
              <img className="Skills__Svg" src="https://img.icons8.com/ios-filled/50/ffffff/running.png"/>
             <p className="Skills__Text">Expert</p>

            </div>

            <div className="Skill__Container">
            {
              skills.expert.map((x) => { return <span className="Skills__Expert">{x.name}</span> })
            }
            </div>
            <div className="Skills__Title">
            <img className="Skills__Svg" src="https://img.icons8.com/material-outlined/24/ffffff/walking--v1.png"/>
             <p className="Skills__Text">Competitive</p>

            </div>
             <div className="Skill__Container">
            {
              skills.proficient.map((x) => { return <span className="Skills__Expert">{x.name}</span> })

            }
             </div>
             <div className="Skills__Title">
             <img className="Skills__Svg" src="https://img.icons8.com/ios-filled/50/ffffff/baby-feet.png"/>
            <p className="Skills__Text">Novice</p>

             </div>

            <div className="Skill__Container">
            {
              skills.novice.map((x) => { return <span className="Skills__Expert">{x.name}</span> })

            }
            </div>
        </section>
        </article>
      )}
    </article>
    </article>

  );
}
