// @flow
import C from '../config/constants';

export const chapterSelect = (index: number) => ({
  type: C.TOME.CHAPTER.SELECT,
  chapter: index,
  topic: 0
});

export const topicSelect = (index: number, chapter: number) => ({
  type: C.TOME.SECTION.SELECT,
  chapter,
  topic: index
});
