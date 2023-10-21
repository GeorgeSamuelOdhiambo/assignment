// src/services/CharacterService.ts
export type Character = {
  id: string;
  name: string;
  dateOfBirth: string;
  house: string;
};

export async function fetchCharacters(): Promise<Character[]> {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}
