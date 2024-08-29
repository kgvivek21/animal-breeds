import DogsBreedList from "@/components/DogsBreedList/DogsBreedList";

const getDogsBreed = async () => {
  const res = await fetch("http://localhost:3001/api/dogs");

  const response = await res.json();
  const dataResponse = response.message;

  const dataArray =
    Object.keys(dataResponse).length > 0 &&
    Object.keys(dataResponse).map((dogs: string) => {
      const dogsBreedCountry = dataResponse[dogs];
      return Array.isArray(dogsBreedCountry) && +dogsBreedCountry.length > 0
        ? dogsBreedCountry.map((dog) => `${dog} ${dogs}`)
        : dogs;
    });
  return dataArray.toString().split(",");
};

export default async function Home() {
  const dogsResponse = await getDogsBreed();

  return (
    <main className="flex flex-col items-center m-4 ">
      <DogsBreedList dogsBreed={dogsResponse}></DogsBreedList>
    </main>
  );
}
