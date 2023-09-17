export default function SideNav() {
  return (
    <nav className="h-screen w-72 bg-navColor p-8">
      <h1 className="text-4xl font-nats">Notifications</h1>
      <ul className="font-nats text-xl p-6">
        <li>View Banks</li>
        <li>Add Banks</li>
        <li>Remove Banks</li>
      </ul>
      <h1 className="text-4xl font-nats">Email Address</h1>
      <ul className="font-nats text-xl p-6">
        <li>Edit Email</li>
        <li>Delete Email</li>
      </ul>
    </nav>
  );
}
