function UserDetails({ user }) {
  return (
    <div>
      <h2>{user.name.firstname}:</h2>
      <p>Nickname: {user.username}</p>
      <p>Cidade: {user.address.city}</p>
      <p>Telefone: {user.phone}</p>
      <p>E-mail: {user.email}</p>
    </div>
  );
}

export default UserDetails;
