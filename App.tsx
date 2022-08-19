import Router from "@src/routes/components/router";
import { store } from "@src/store";
import { ApplicationProvider } from "@ui-kitten/components";
import { Provider } from "react-redux";
import * as eva from '@eva-design/eva'

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ApplicationProvider>
  );
}

