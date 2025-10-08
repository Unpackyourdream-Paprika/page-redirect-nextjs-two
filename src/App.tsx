import { useEffect } from "react";

function App() {
  useEffect(() => {
    const targetUrl = "https://xbanana.store/";
    window.location.replace(targetUrl); // 무조건 리다이렉트
  }, []);

  return null; // 화면은 비워둬도 됨
}

export default App;
