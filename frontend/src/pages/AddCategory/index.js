import React from "react"
import CategoryDataService from "../../client/category"
import styled from "styled-components"
import { toast } from "react-toastify"
import { Formik, Field, Form } from "formik"
import * as yup from "yup"

const initialCategoryState = {
  description: "",
  cod: "",
  isActive: true,
}
const schema = yup.object().shape({
  description: yup.string().required("A descrição da categoria é obrigatório."),
  cod: yup
    .string()
    .required("O código da categoria é obrigatório.")
    .max(3, "O código deve ter até 3 caracteres")
    .strict()
    .uppercase("O código da categoria deve ser maiúsculo"),
  isActive: yup.boolean().required(),
})

const createCategory = async (values, { resetForm }) => {
  return CategoryDataService.create(values)
    .then(() => {
      toast.success("Categoria criada com sucesso!!")
      resetForm()
    })
    .catch((err) => {
      toast.error("Erro ao cadastrar categoria")
    })
}
const AddCategory = () => {
  return (
    <Container>
      <Formik
        initialValues={initialCategoryState}
        validationSchema={schema}
        onSubmit={createCategory}
      >
        {({ errors, touched }) => (
          <FormContainer>
            <div>
              <h2>Cadastrar Categorias de Produtos</h2>
              <div className="line"></div>
              <div>
                <div>
                  <label>Descrição</label> <br />
                  <Field
                    type="text"
                    id="description"
                    required
                    name="description"
                    placeholder="Ex: Utensílios"
                    className={
                      errors.description && touched.description && "has-error"
                    }
                  />
                  {errors.description && touched.description && (
                    <span className="error">{errors.description}</span>
                  )}
                </div>
                <div>
                  <label>Código da Categoria</label> <br />
                  <Field
                    type="text"
                    id="cod"
                    required
                    name="cod"
                    placeholder="Ex: UTN"
                    className={errors.cod && touched.cod && "has-error"}
                  />
                  {errors.cod && touched.cod && (
                    <span className="error">{errors.cod}</span>
                  )}
                </div>
                <br />
                <button type="submit" className="btn btn-success">
                  Cadastrar Categoria
                </button>
                <br />
                <button type="reset" className="btn btn-cancel">
                  Recomeçar
                </button>
              </div>
            </div>
          </FormContainer>
        )}
      </Formik>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const FormContainer = styled(Form)`
  display: flex;
  justify-content: center;
  width: 30vw;
  font-family: "Rubik", sans-serif;
  margin-top: 0px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 10px;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  input {
    height: 40px;
    width: 400px;
    margin-bottom: 15px;
    margin-top: 5px;
    border: 1px solid black;
    border-radius: 5px;
    padding-left: 10px;
    &.has-error {
      border: 1px solid red;
      margin-bottom: 2px;
    }
  }

  .error {
    display: block;
    font-size: 12px;
    color: red;
    margin: 0 0 5px 5px;
  }

  h2 {
    margin-top: 0px;
    margin-bottom: 5px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: gray;
    margin-bottom: 30px;
  }

  button {
    color: white;
    width: 100%;
    height: 40px;
    background-color: #32cd32;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border: 0;
    cursor: pointer;
    transition: background-color 0.5s;
  }

  button:hover {
    background-color: #228b22;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  .btn-cancel {
    background-color: #f9af39;
  }

  .btn-cancel:hover {
    background-color: #fe7839;
  }
`

export default AddCategory
