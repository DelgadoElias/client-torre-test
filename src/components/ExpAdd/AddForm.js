import React from 'react';
import './AddForm.css';
import axios from 'axios';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setToast} from '../../store/actions';
import testFunction from '../../functions/testFunction';

/**
 * Add user experience react Component.
 * @param {useDispatch} dispatch - Dispatch actions to the reducer.
 * @param {form} useState - Form to fill for send data to API.
 * @return {HTML} - Display HTML Elements in App.
 */
export default function AddForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    publicId: '',
    category: '',
    name: '',
    organization: '',
    fMonth: '',
    fYear: '',
    tMonth: '',
    tYear: '',
    addInfo: '',
    responsabilities: '',
  });

  /**
 * Add user experience react Component.
 * @param {Event} e - Event - Used for preventDefault() form's function.
 */
  async function handleSubmit(e) {
    e.preventDefault(e);
    await axios.post(`https://node-torre.herokuapp.com/user/userEx?id=${form.publicId}`, form);
    // const instance
    // TODO: Send instance to a function called 'postInAPI'
    dispatch(setToast('Experience added successfully'));
    testFunction();
  }
  /**
 * Add user experience react Component.
 * @param {Event} e - Event - Used for preventDefault() form's function.
 * @param {setForm} form - useState - Used change form's state.
 */
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (<>
    <section>
        Add some experience in your profile
    </section>
    <form className="Add__Form-container" onSubmit={(e) => handleSubmit(e)}>
      <input className="Add__Form-Item"
        onChange={(e) => handleChange(e)} type="text"
        value={form.publicId} name="publicId"
        placeholder="Person Id">
      </input>
      <input className="Add__Form-Item"
        onChange={(e) => handleChange(e)} type="text"
        value={form.category} name="category"
        placeholder="Category">
      </input>
      <input className="Add__Form-Item"
        onChange={(e) => handleChange(e)} type="text"
        value={form.name} name="name" placeholder="Name">
      </input>
      <input className="Add__Form-Item"
        onChange={(e) => handleChange(e)} type="text"
        value={form.organization} name="organization"
        placeholder="Organization">
      </input>
      <input className="Add__Form-Item"
        onChange={(e) => handleChange(e)} type="text"
        value={form.fMonth} name="fMonth" placeholder="fromMonth">
      </input>
      <input className="Add__Form-Item"
        onChange={(e) => handleChange(e)} type="text"
        value={form.fYear} name="fYear" placeholder="fromYear">
      </input>
      <input className="Add__Form-Item"
        onChange={(e) => handleChange(e)} type="text"
        value={form.tMonth} name="tMonth" placeholder="toMonth">
      </input>
      <input className="Add__Form-Item"
        onChange={(e) => handleChange(e)} type="text"
        value={form.tYear} name="tYear" placeholder="toYear">
      </input>
      <input className="Add__Form-Item"
        onChange={(e) => handleChange(e)} type="text"
        value={form.addInfo} name="addInfo" placeholder="additional Info">
      </input>
      <input className="Add__Form-Item"
        onChange={(e) => handleChange(e)} type="text"
        value={form.responsabilities} name="responsabilities"
        placeholder="Responsabilities"></input>
      <input className="Add__Form-btn" type="submit"></input>
    </form>
  </>
  );
}
