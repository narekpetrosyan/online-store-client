import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { AppRouter } from "./components/AppRouter/AppRouter";
import { NavBar } from "./components/Navbar/Navbar";
import { useStore } from "./hooks/useStore";
import { useEffect, useState } from "react";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";

export const App = observer(() => {
  const { user } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, []);

  if (loading) {
    return <Spinner animation="grow" />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});
