import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

function Video() {
  return (
    <PageDefault>
      <h1>Cadastro de Videos</h1>

      <Link to="/categories">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default Video;
