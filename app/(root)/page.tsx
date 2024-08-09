import BuiltBy from "@/components/BuiltBy";
import UserTable from "@/components/users/UserTable";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Welcome to Our Landing Page
      </h1>
      <BuiltBy />
      <div className="mt-8">
        <UserTable />
      </div>
    </div>
  );
}
