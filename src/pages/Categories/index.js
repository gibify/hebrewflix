import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';

function Category() {
  const inicialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(inicialValues);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://hebrewflix.herokuapp.com/categories';
    fetch(URL_TOP)
      .then(async (responseFromServer) => {
        const response = await responseFromServer.json();
        setCategories([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={`${category.title}`}>
            {category.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default Category;
