export default function SideNav() {
  return (
    <nav className="h-screen w-72 bg-navColor p-8">
      <div className="flex justify-between text-4xl font-nats">
        <h1>Notifications </h1>
        <h1>&#9662;</h1>
      </div>
      <ul className="font-nats text-xl p-6">
        <li>View Banks</li>
        <li>Add Banks</li>
        <li>Remove Banks</li>
      </ul>
      <div className="flex justify-between text-4xl font-nats">
        <h1>Email Address</h1>
        <h1> &#x25BE;</h1>
      </div>
      <ul className="font-nats text-xl p-6">
        <li>Edit Email</li>
        <li>Delete Email</li>
      </ul>
    </nav>
  );
}
