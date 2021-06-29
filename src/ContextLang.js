import React from 'react'

export const LanguagesList = {
    "az": {
        "title":"Siyahı Tədbiqi",
        "header": "Siyahı tədbiq et",
        "nameInput": "Ad",
        "bottom": "Siyahıdakı nömrələrin sayı: ",
        "clear": "Boşalt",
        "add": "Əlavə et",
        "delete": "Sil",
        "alertsucces": " Məlumatlar müvəffəqiyyətlə əlavə olundu!",
        "alertdanger": "Xanaların boş olmadığından əmin olun!",
        "dontusenumber":"Daxil etdiyiniz nömrə siyahıda mövcuddur!",
        "dontusename":"Daxil etdiyiniz ad siyahıda mövcuddur!"
    },
    "en": {
        "title":"To Do List",
        "header": "To Do List",
        "nameInput": "Name",
        "bottom": "Number of Numbers in the list: ",
        "clear": "Clear",
        "add": "Add",
        "delete": "Delete",
        "alertsucces": "Data added successfully!",
        "alertdanger": "Make sure the cells are not empty!",
        "dontusenumber":"There is number in the list!",
        "dontusename":"There is name in the list!"


    },
    "ru": {
        "title":"Cписок дел",
        "header": "Список дел",
        "nameInput": "Имя",
        "bottom": "Количество номеров в списке:  ",
        "clear": "Чисто",
        "add": "Добавить",
        "delete": "Удалить",
        "alertsucces": "Данные успешно добавлены!",
        "alertdanger": "Убедитесь, что ячейки не пустые!",
        "dontusenumber": "В списке есть номер!",
        "dontusename":"В списке есть Имя!"


    }

}






const MyContext = React.createContext();
export default MyContext;
