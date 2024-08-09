import { getUsers } from "@/lib/actions/user.actions";
import CustomTable from "@/components/CustomTable";

const UserTable = async () => {
  const users = await getUsers();

  return (
    <CustomTable
      columns={[
        {
          key: "name",
          label: "Name",
          customCell: (row) => row.name.split(" ")[1],
        },
        { key: "email", label: "Email" },
        {
          key: "phone",
          label: "Phone",
          customCell: (row) => row.phone.slice(0, 5),
        },
        { key: "website", label: "Website" },
      ]}
      data={users.sort((a, b) => Math.random() - 0.5).slice(5)}
      title="Users"
    />
  );
};

export default UserTable;
