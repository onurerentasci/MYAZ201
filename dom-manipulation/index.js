console.log("Hello World");

// npm init --y ile package.json dosyası oluşturulur
// çalışması için package.json içerisinde script altına "start":"node dosya.js" ifadesi eklenmelidir
// projenin bütün konfigürasyonu bu dosya üzerinden yapılır
// init işleminden sonra terminale "npm start" veya "npm run start" yazarak çalıştırılır

// var, let, const anahtar sözcükleri

// const ifadesinin aldığı değerler sabittir dışardan müdahele ile değiştirilemez
const message = "Hello World 2";
console.log(message);

//let
// değişken değeri değişmek durumunda kalacaksa let anahtar sözcüğü kullanırız
let i = 1;
while (i < 5) {
  console.log(i);
  i++;
}

// var anahtar sözcüğünden mümkün oldukça uzak dur

// "npm install live-server" ile local server kurulur package.json dosyası içinde scripts altında "server":"live-server" şeklinde belirtmemiz gerekir
// live-server kurulduktan sonra package.json içinde dependencies isimli bir bölüm oluşur, bu bölümde live serverın mevcut versiyonu yazmaktadır
// "npm run server" ile live server çalışır

// array

const employees = [
  "Ahmet Güneş",
  "Onur Eren Taşcı",
  "Mustafa Karaca",
  "Fatma Irmak",
]; // 4 elemanlı array

//for loop

console.log("for loop");

for (let index = 0; index < employees.length; index++) {
  // employee arrayı uzunlu kadar çalışacak döngü, index ifadesi sürekli artacağı için let anahtar sözcüğü kullanılır
  const element = employees[index];
  console.log(element);
}

// for of loop

console.log("forof loop");

for (const emp of employees) {
  console.log(emp);
}

// D: document
// O: object
// M: model

const root = document.getElementById("root");
// belgenin tamamı(doküman) id adı ile yakalıyoruz
root.innerHTML = "Dom Manipulation";
// index.html içerisinde id'si root olan div etiketi altına herhangi bir şey yazıyor olmamasına rağmen dom manipülasyonu sayesinde içeriğe müdahele edilebilir

// html > body > root > p > p > p

// map
// map() metodu, dizi içerisindeki tüm elemanları bir işlemden geçirmek için kullanılır. Her bir eleman tek tek işlenir, değerleri değiştirilebilir, geriye ne döndürüleceği belirlenebilir. Ve sonunda ise, işlemden geçen öğelerden oluşan bir dizi geriye döner.
console.log("map");
employees.map((emp) => {
  console.log(emp);
  const element = document.createElement("p");
  // doküman içerisine p etiketli bir eleman oluşturuldu
  element.innerHTML = emp;
  // element adındaki eleman, array içinde bulunan kişi sayısı kadar map metoduyla ekrana yazdırıldı
  root.append(element);
});
