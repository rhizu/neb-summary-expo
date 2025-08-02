export interface Chapter {
  id: string;
  name: string;
  note: string;
}

export interface NotesData {
  class11EnglishChapters: Chapter[];
  class11NepaliChapters: Chapter[];
  class12EnglishChapters: Chapter[];
  class12NepaliChapters: Chapter[];
}
