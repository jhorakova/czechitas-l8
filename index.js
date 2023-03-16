console.log('funguju!');
/*Naklonujte si repozitář se stránkou, která zobrazuje hrací kostku. Doplňte do stránky JavaScriptový program, 
který zařídí, že když uživatel zmáčkne na stránce libovolnou klávesu, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.

Nápověda: Rozumným postupem je vytvořit si proměnnou side, která bude obsahovat číslo strany kostky. 
Tuto proměnnou můžete vždy při stisknutí klávesy navýšit o jedna a z této hodnoty zkonstruovat řetězec pro atribut src.*/


let startKostka = 1
const kostka = document.querySelector('.dice')

const otocKostkou = () => {
startKostka = startKostka + 1
if (startKostka === 7) {
    startKostka = 1
}
kostka.src = `img/side${startKostka}.svg`
}

document.addEventListener('keydown', otocKostkou)
