export const capitaliseFirstLetter = (name: string | null) => {
  const captialiseEarchWord = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  if (!name) return "";
  if (name.includes(" "))
    return name
      .split(" ")
      .map((word) => captialiseEarchWord(word))
      .join(" ");
  return captialiseEarchWord(name);
};
