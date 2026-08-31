export const profile = [
  { k: 'CURRENTLY', v: 'Looking for my next product design role', tone: 'green' },
  { k: 'BASED', v: 'Seattle, WA', tone: 'blue' },
  { k: 'FOCUS', v: 'Complex systems & enterprise tools', tone: 'gold' },
  { k: 'WORKS IN', v: 'Figma, prototyping, front-end', tone: 'red' },
] as const;

export const interests = [
  { label: 'Trail running', tone: 'green', icon: 'person-simple-run' },
  { label: 'Mandarin', tone: 'blue', icon: 'translate' },
  { label: 'Cat dad', tone: 'gold', icon: 'cat' },
  { label: 'Book club', tone: 'red', icon: 'book-open' },
] as const;

export const shelf = [
  { title: 'User Friendly', author: 'Cliff Kuang', note: 'A Fresh Perspectives selection', tone: 'red', h: 92 },
  { title: 'The Starless Sea', author: 'Erin Morgenstern', note: 'A favorite. A story within a story within a story.', tone: 'green', h: 84 },
  { title: 'Monkey King: Journey to the West', author: "Wu Cheng'en", note: 'A classic Chinese adventure', tone: 'gold', h: 96 },
  { title: 'Designing with the Mind in Mind', author: 'Jeff Johnson', note: 'Cognitive psychology for interface design', tone: 'blue', h: 88 },
] as const;

export const defaultBook = 0;

export const albums = [
  { title: 'Lady', side: 'SIX FOOT BLONDE · SONG', color: '#F5C84B', audioSrc: '/audio/lady-six-foot-blonde.mp3' },
  { title: 'Pelican Town', side: 'CONCERNEDAPE · GAME OST', color: '#5FA8E8', audioSrc: '/audio/pelican-town.mp3' },
  { title: 'Come and Get Your Love', side: 'REDBONE · SONG', color: '#42B46E', audioSrc: '/audio/come-and-get-your-love.mp3' },
] as const;
