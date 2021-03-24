const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

function formReducer(state = INITIAL_STATE, action) {
  if (action.type === 'FORM') {
    return {
      state: action.state,
    }
  }
  return state;
}

export default formReducer;
