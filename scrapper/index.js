const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  let wordsArray = [];

  for (let i = 2; i < 25; i++) {
    await page.goto(
      `https://www.dicionarioinformal.com.br/caca-palavras/5-letras/-----/${i}`
    );

    const arr = await page.evaluate(() => {
      let wordsArray = [];
      const nodeList = document.querySelectorAll(
        "ul.ul_simple.link_cinza.text-center > li"
      );

      for (let i = 0; i < nodeList.length; i++) {
        wordsArray.push(nodeList[i].innerText);
      }

      return wordsArray;
    });

    wordsArray.push([...arr].flat());
  }
  await browser.close();
  const file = fs.createWriteStream("import.sql");
  file.on("error", function (err) {
    console.log(err);
  });
  wordsArray = wordsArray
    .flat()
    .map((word) =>
      word
        .normalize("NFD")
        .replace(/[^a-zA-Zs]/gi, "")
        .toLowerCase()
    )
    .filter((x) => !(x.includes(".") || x.includes(" ")));

  wordsArray.forEach((word) =>
    file.write(
      `INSERT INTO tb_words (name, status) VALUES ('${word}', true);\n`
    )
  );
  file.end();
})();
