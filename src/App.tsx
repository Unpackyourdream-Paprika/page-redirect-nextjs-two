import { useEffect } from "react";

function App() {
  useEffect(() => {
    const targetUrl = "https://xbanana.store/";

    // 현재 도메인이 아닌 경우에만 리다이렉트
    if (window.location.hostname !== "xbanana.store") {
      window.location.replace(targetUrl); // replace 사용 (뒤로가기 방지)
    }
  }, []);

  return null; // 화면은 비워둬도 됨
}

export default App;
