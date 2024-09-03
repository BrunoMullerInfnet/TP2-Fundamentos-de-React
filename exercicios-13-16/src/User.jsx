function User({ user }) {
  return (
    <li>
      <h2>{user.name.firstname}:</h2>
      <p>Nickname: {user.username}</p>
      <p>Cidade: {user.address.city}</p>
      <p>Telefone: {user.phone}</p>
      <p>E-mail: {user.email}</p>
      <p>Senha: {user.password}</p>
    </li>
  );
}

export default User;
