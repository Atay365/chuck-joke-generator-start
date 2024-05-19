const jokeOutput = document.querySelector("#joke");
const btnEl = document.querySelector("#joke-btn");

const getJoke = async () => {
  try {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await axios.get(url);
    const joke = response.data.value;
    jokeOutput.textContent = joke;
  } catch (error) {
    jokeOutput.textContent = error;
  }
};

btnEl.addEventListener("click", getJoke);
