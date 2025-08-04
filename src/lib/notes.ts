import notesDataJSON from "./notes.json";

export const subjectToHeadingMap = {
  class11EnglishChapters: {
    name: "Class 11 - English",
    grade: "11",
    subject: "english",
  },
  class11NepaliChapters: {
    name: "कक्षा ११ - नेपाली",
    grade: "11",
    subject: "nepali",
  },
  class12EnglishChapters: {
    name: "Class 12 - English",
    grade: "12",
    subject: "english",
  },
  class12NepaliChapters: {
    name: "कक्षा १२ - नेपाली",
    grade: "12",
    subject: "nepali",
  },
} as const;

export type Subject = keyof typeof subjectToHeadingMap;

export const chapters = (
  Object.entries(notesDataJSON) as [
    Subject,
    { id: string; name: string; note: string }[],
  ][]
).reduce(
  (acc, [subject, chapters]) => {
    acc.push(
      ...chapters.map((chapter) => ({
        id: chapter.id,
        name: chapter.name,
        note: chapter.note,
        subject: subjectToHeadingMap[subject].subject,
        grade: subjectToHeadingMap[subject].grade,
      }))
    );
    return acc;
  },
  [] as {
    id: string;
    name: string;
    note: string;
    grade: "11" | "12";
    subject: "english" | "nepali";
  }[]
);
