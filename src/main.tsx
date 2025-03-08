import ReactDOM from 'react-dom/client';
import { StoryBox } from 'storybox-react';
import 'storybox-react/dist/styles.css';
import './ui/styles.css';
import { stories } from './stories.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoryBox stories={stories} />,
);
