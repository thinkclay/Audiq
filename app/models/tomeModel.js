
export type topic = {
  title: string,
  description: string,
  content: string
};

export type chapter = {
  title: string,
  topics: Array<topic>
};

export type action = {
  type: string
};

export type schema = {
  chapter: chapter,
  topic: topic,
  all: Array<chapter>
};
