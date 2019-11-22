import Immutable from 'seamless-immutable';
import configureEffect from './Authentication.effects';

export default {
  state: Immutable({
    logged: false,
    loginInitialValuesForm: {
      email: '',
      password: '',
    }
  }),
  reducers: {
    setLogged: (state, logged) => state.set('logged', logged),
    changeInitialValuesForm: (state, form) => state
      .set('loginInitialValuesForm', state.loginInitialValuesForm.merge(form))
  },
  effects: configureEffect,
};