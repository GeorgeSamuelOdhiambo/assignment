"use client"
import CharacterList from "../components/CharacterList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CharacterList />
    </main>
  );
}
