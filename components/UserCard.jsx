import Link from "next/link";

export default function UserCard({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <Link key={index} href={`/users/${user.id}`}>
          <li className="bg-slate-600 mb-2 p-4 rounded-md text-gray-950 flex justify-between">
            <div>
              <h5 className="font-bold">
                {user.id}. {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-200">Email: {user.email}</p>
            </div>
            <img
              src={user.avatar}
              alt="userImage"
              className="rounded-full w-20"
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}
