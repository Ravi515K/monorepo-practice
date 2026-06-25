import { hello } from "@repo/ui";

export default function Home() {
  return (
    <div>
      <h1>{hello()}</h1>
      <p>{process.env.NEXT_PUBLIC_APP_NAME} APP</p>
    </div>
  );
}