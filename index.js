import renderApi from '@api/render-api';

renderApi.auth('rnd_wra223DHBda9dyyheGWZCJV28Tb3');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));