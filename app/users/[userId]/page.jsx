const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const user = await res.json();

  return user.data;
};

export default async function UserPage({ params }) {
  const { userId } = await params;
  const user = await getUser(userId);
  return (
    <div className="bg-slate-400 p-4 rounded-md">
      <img src={user.avatar} alt="userImage" className="m-auto my-4" />
      <h5 className="text-3xl font-bold">
        {user.id}. {user.first_name} {user.last_name}
      </h5>
      <p className="text-slate-200">Email: {user.email}</p>
    </div>
  );
}
