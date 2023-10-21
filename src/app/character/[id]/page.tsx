"use client";
import React, { useEffect, useState } from "react";

type CharacterDetails = {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
};

export default function Home({ params }: { params: { id: string } }) {
  let id = params.id;
  const [characters, setCharacter] = useState<CharacterDetails[]>([]);

  useEffect(() => {
    async function fetchCharacterDetails() {
      if (id) {
        try {
          const response = await fetch(
            `https://hp-api.onrender.com/api/character/${id}`
          ); // Replace with the actual API URL
          const data = await response.json();
          setCharacter(data);
        } catch (error) {
          console.error("Error fetching character details:", error);
        }
      }
    }
    fetchCharacterDetails();
  }, [id]);

  if (!characters) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">
          Character Details
        </h1>
        {characters.map((character) => (
          <div
            className="bg-white rounded-lg shadow-md p-4 flex"
            key={character.id}
          >
            <div className="w-1/4 pr-4">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-3/4">
              <p className="text-lg font-semibold">Name: {character.name}</p>
              <p>Gender: {character.gender}</p>
              <p>House: {character.house}</p>
              <p>
                Wand: {character.wand.wood} with {character.wand.core} core,{" "}
                {character.wand.length} inches
              </p>
              {character.alive ? <p>Status: Alive</p> : <p>Status: Deceased</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
