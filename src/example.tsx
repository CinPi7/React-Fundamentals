// Exemplo de uso com TypeScript e sua produtividade ao codar!!!

interface User {
  name: string;
  bio: string;
  age: number;
}

function sumAge(users: User[]) {
  let sum = 0;

  for (const user of users) {
    sum += user.age;
  }

  return sum;
}

const sumOfAllUsersAges: number = sumAge([
  { name: "John", bio: "officer", age: 53 },
]);

// number não é obrigatório, pois o TypeScript usa inferências, ja entende-se que espera-se o retorno de um número olhando a função.
