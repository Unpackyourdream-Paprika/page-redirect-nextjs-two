# Page Redirect App

이 앱은 xbanana.store로 자동 리다이렉트하는 React 애플리케이션입니다.

## 기능

- 현재 도메인이 xbanana.store가 아닌 경우 자동으로 리다이렉트
- `window.location.replace()` 사용으로 뒤로가기 방지
- 깔끔한 페이지 전환

## 코드 구조

```tsx
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
```
