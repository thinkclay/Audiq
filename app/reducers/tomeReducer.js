// @flow
import C from '../config/constants';
import toc from '../content/toc';
import * as tomeModel from '../models/tomeModel';

const defaultState = {
  chapter: toc[0],
  topic: toc[0].topics[0],
  all: toc
};

const scrubTopics = (topics) => topics.map(topic => ({
  ...topic,
  selected: false
}));

const scrubChapters = (chapters) => chapters.map(chapter => ({
  ...chapter,
  selected: false,
  topics: scrubTopics(chapter.topics)
}));

const select = (oldState, chapterIndex: number, topicIndex: number) => {
  const all = scrubChapters(oldState.all);

  const chapter = all[chapterIndex];
  chapter.selected = true;

  const topic = all[chapterIndex].topics[topicIndex];
  topic.selected = true;

  all[chapterIndex] = chapter;
  all[chapterIndex].topics[topicIndex] = topic;

  return {
    all,
    chapter,
    topic,
  };
};

const tome = (state: tomeModel.schema = defaultState, action: tomeModel.action) => {
  switch (action.type) {
    case C.TOME.SECTION.SELECT :
      return select(state, action.chapter, action.topic);

    default :
      return state;
  }
};


export default tome;
