/*Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. 
Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

catering od Flavour Haven pro 100 lidí za 300000 Kč
Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. 
Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč*/

const justFood = (pocet) => {
    return `catering od Just Food pro ${pocet} lidi za ${Math.round(pocet * 100)} czk`
}

const yourMama = (pocet) => {
    return `catering od Your Mama pro ${pocet} lidi za ${Math.round(pocet * 500)} czk`
}

const flavourHaven = (pocet) => {
    return `catering od Flavour Haven pro ${pocet} lidi za ${Math.round(pocet * 10000)} czk`
}

const createEvent = (nameEvent, pocet, cateringFirma) => {
    return `${nameEvent} s cateringem od ${cateringFirma(pocet)}`
}







