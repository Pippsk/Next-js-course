import Link from "next/link";

export const metadata = {
  title: "Pippo's Helpdesk",
};

export default function Home() {
  return (
    <main>
      {" "}
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eos
        voluptatibus aut neque excepturi cupiditate molestias. Quo nobis
        quibusdam tenetur necessitatibus delectus quis fuga, laborum impedit
        sequi natus atque quasi.
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
      <h2>Company Updates</h2>
      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          amet voluptatem. Mollitia, praesentium? Fugit aperiam tenetur quae
          distinctio eveniet magnam.
        </p>
      </div>
      <div className="card">
        <h3>New website live</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          amet voluptatem. Mollitia, praesentium? Fugit aperiam tenetur quae
          distinctio eveniet magnam.
        </p>
      </div>
    </main>
  );
}
