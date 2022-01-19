import React from 'react';
import {useSelector} from 'react-redux';

/**
 * Experiences React Component.
 * @param {string} value - Prop - Contains a string to show in App.
 * @param {useState} drop - Dropdown management.
 * @param {useState} dropIcon - Dropdown Icon
 * @return {html} - Show the component.
*/
export default function Experiences() {
  const usersz = useSelector((state) => {
    return state.person;
  });
  const ExpPersonal = useSelector((state) => {
    return state.experiences.personal;
  });
  const ExpAPI = useSelector((state) => {
    return state.experiences.api;
  });

  return (
    <article className="Exp__Main">
      {
              usersz.publicId === '' ?
              '' :
              (<h5>Related Experiences</h5>)
      }
      {
              ExpAPI.length === 0 ? '' :
              ExpAPI.map((x) => {
                return (
                  <section key={x.name} className="Exp__Container">
                    <hr />
                    <div className="">
                      <p className="Exp__Title">
                        {x.name !== undefined ? x.name : ''}
                      </p>
                    </div>
                    <div>
                      <span>
                        {x.organizations.length === 0 ?
                        'Not Found' : x.organizations[0].name }
                      </span>
                    </div>
                    <div>
                      {x.fromMonth ? x.fromMonth : 'Month' } {' '}
                      {x.fromYear ? x.fromYear : 'Year'} - {' '}
                      {x.toMonth ? x.toMonth : '' } {' '}
                      {x.toYear !== undefined ? x.toYear : ''}
                    </div>
                  </section>
                );
              })
      }
      {
              ExpPersonal.length === 0 ? '' :
              ExpPersonal.map((x) => {
                return (
                  <section key={x.name} className="Exp__Container">
                    <hr/>
                    <div className="">
                      <p className="Exp__Title">
                        {x.name !== undefined ? x.name : ''}
                      </p>
                    </div>
                    <div>
                      <span>
                        {x.organization ? x.organization : 'Not Found'}
                      </span>
                    </div>
                    <div>
                      {x.fMonth ? x.fMonth : 'Month' } {' '}
                      {x.fYear ? x.fYear : 'Year'} - {' '}
                      {x.tMonth ? x.tMonth : '' } {' '}
                      {x.tYear !== undefined ? x.tYear : ''}
                    </div>
                  </section>
                );
              })
      }
      <div className="Block">

      </div>

    </article>
  );
}
