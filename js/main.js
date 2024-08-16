const MIN_PASSWORD_LENGTH = 7;
const MAX_PASSWORD_LENGTH = 16;

const PASSWORD_CHARSET =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-+=";

const resultContainer = document.querySelector(".main__result > span");
const generateButton = document.querySelector(".main__button");
const copyPassword = document.querySelector(".main__button--copy");


function getRandomNumber(min, max) {
  if (max < 0 || min < 0) {
    return 0;
  }
  return Math.round(Math.random() * (max - min) + min);
}

const getRandomChar = (string) => {
  const randomNumber = Math.random() * (string.length - 1);
  const randomIndex = Math.round(randomNumber);
  return string[randomIndex];
};

const makeRandomString = (charset, length) => {
  let result = "";

  while (result.length < Math.floor(length)) {
    const randomChar = getRandomChar(charset);
    result += randomChar;
  }

  return result;
};



generateButton.addEventListener("click", () => {
  const passLength = getRandomNumber(MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH);
  const password = makeRandomString(PASSWORD_CHARSET, passLength);

  resultContainer.textContent = password;
});

if (navigator.clipboard) {
  copyPassword.addEventListener("click", () => {
    navigator.clipboard
      .writeText(resultContainer.textContent)
      .then(() => console.log("Текст успешно скопирован в буфер обмена"))
      .catch((err) =>
        console.error("Произошла ошибка при копировании текста: ", err)
      );
  });
} else {
  copyPassword.style.display = "none";
}
