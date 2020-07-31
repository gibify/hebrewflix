import config from '../../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(videoSubject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoSubject),
  })
    .then(async (responseFromServer) => {
      if (responseFromServer.ok) {
        const response = await responseFromServer.json();
        return response;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
  create,
};
