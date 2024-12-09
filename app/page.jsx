import UserCard from "@/components/UserCard";

const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const users = await res.json();
  return users.data;
};

export default async function HomePage() {
  const users = await fetchUsers();

  return <UserCard users={users} />;
}
