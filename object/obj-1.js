const obj = { name: "Abby", git: "h-b-cho" };
obj["email"] = "hbtopkr@gmail.com";
obj.phone = "010-1234-5432";

console.log(obj);
// {
//   name: 'Abby',
//   git: 'h-b-cho',
//   email: 'hbtopkr@gmail.com',
//   phone: '010-1234-5432'
// }

delete obj.phone;
console.log(obj);
// {
//   name: 'Abby',
//   git: 'h-b-cho',
//   email: 'hbtopkr@gmail.com'
// }

bool1 = "email" in obj;
bool2 = "phone" in obj;
console.log(bool1, bool2); // true false

console.log(Object.keys(obj)); // 배열의 형태로 키값만 출력
console.log(Object.values(obj)); // 배열의 형태로 밸류값만 출력

for (const key in obj) {
  console.log(key, obj[key]);
}
// name Abby
// git h-b-cho
// email hbtopkr@gmail.com
