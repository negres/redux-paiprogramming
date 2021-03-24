import React, { Component } from "react";
import { connect } from 'react-redux';
import { formAction } from '../actions/formAction';

class ProfessionalForm extends Component {

  render() {
    const { changeHandler } = this.props;
    return (
      <fieldset>
        <legend>Dados profissionais:</legend>
        <div className="container">
          Resumo do currículo:
          <textarea
            name="resume"
            maxLength="1000"
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Cargo:
          <input
            type="text"
            name="role"
            maxLength="40"
            onChange={changeHandler}
            onMouseDown={() => {
              alert("Preencha com cuidado esta informação.");
            }}
          />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name="roleDescription"
            maxLength="500"
            onChange={changeHandler}
          />
        </div>
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  chaveQQ: state.formReducer.state
})

// const mapDispatchToProps = (dispatch) => ({
//   mySecondDispatch: (state) => (
//     dispatch(formAction(state))
//   )
// })

export default connect(mapStateToProps)(ProfessionalForm);
