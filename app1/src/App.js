// styles
import { Container } from "./styles";

// components
import List from "./components/List";

function App({messages}) {
  return (
    <Container>
      <List messages={messages} />
    </Container>
  );
}

export default App;
