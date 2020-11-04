let typeone = prompt('Добавить имя' ,' Иван');
let typrtwo = prompt('Удалить имя?', typeone);
let prt= [typeone];
for (const key in prt) {
   
       typeone[key] == typeone ? prt.pop(key):'Не опознано'
        
    }
    console.log(prt);

