document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

document.getElementById('poke-button').onclick = function(){
  const theID = document.getElementById('poke-input').value;

  axios.get('https://pokeapi.co/api/v2/pokemon/' + theID)
  .then((responseFromAPI)=>{
    console.log(responseFromAPI);
    document.getElementById('poke-info')
    .innerHTML = `
      <h3>${responseFromAPI.data.name}</h3>
      <img src=${responseFromAPI.data.sprites.front_default}>`;
  })
  .catch((err)=>{
    console.log(err);
  });
};
