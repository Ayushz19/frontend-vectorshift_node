import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import MainComponent from './nodes/MainComponent';

function App() {
  return (
    <div>
      <div>
        <MainComponent />
      </div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
