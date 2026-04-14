# 🤖 Godot 학습 도우미

Godot Engine 4.x를 공부하면서 쓸 수 있는 개인 학습 도우미입니다.  
용어 정리, 코드 스니펫, 단계별 가이드, 트러블슈팅, 학습 로드맵까지 한 페이지에서 해결!

> **👉 [바로 사용하기](https://유저이름.github.io/godot-learning-helper/)**  
> ↑ 배포 후 본인의 GitHub Pages 주소로 바꿔주세요.

---

## ✨ 기능

### 📖 용어/개념 (51개 수록)
- Godot 핵심: 노드, GDScript, 물리, UI, 시그널
- 2D 횡스크롤: Camera2D, TileMap, ParallaxBackground, RayCast2D, 상태머신
- 대화/UI: RichTextLabel, visible_characters, NinePatchRect
- 아이템: input_event, mouse_entered/exited, @export Array
- 셰이더: Shader, ShaderMaterial, uniform, fragment(), WorldEnvironment, BackBufferCopy, CanvasGroup
- 학습 상태: **모름 → 헷갈림 → 이해함** (클릭 전환)

### 💻 코드 스니펫 (43개 수록)
- **캐릭터**: 기본 이동, 점프, 벽 슬라이드/벽 점프, 코요테 타임+점프 버퍼, 대시
- **전투**: 상태머신, HitBox/HurtBox, HP 시스템, 무적 시간, 카메라 쉐이크
- **적 AI**: 순찰→추적→공격, 보스전 (페이즈 전환)
- **아이템**: 자동 줍기, 클릭 줍기, 키보드(F키) 줍기, 서랍/상자 조사, 숨겨진 아이템, 아이템 사용, 인벤토리
- **대화**: 대화창 시스템, 타이핑 효과, 선택지 분기, JSON 데이터 로드
- **셰이더**: 피격 플래시, 디졸브, 외곽선, 비네트, 블러, 글로우, 색수차, 물결/왜곡
- **시스템**: 세이브/로드, 씬 전환, 퍼즐, 열쇠/잠긴 문, 컷씬, 상호작용(E키)
- **관련 링크**: 스니펫 카드 하단에 연관 스니펫 바로가기 표시
- GDScript 신택스 하이라이팅 + 원클릭 코드 복사

### 🖱️ How-to 가이드 (27개 수록)
- **기본**: 프로젝트 생성, 노드 추가, 스크립트, Input Map, 씬 실행
- **레벨**: TileMap, Camera2D 횡스크롤, 패럴랙스 배경
- **전투**: HitBox/HurtBox 충돌 레이어, 적 씬 구성, 보스 HP바
- **아이템**: 클릭 아이템, 서랍/상자 조사, ItemDB
- **셰이더**: 스프라이트에 셰이더 적용, 화면 후처리, 글로우 설정, 피격 플래시
- **시스템**: Autoload, 세이브 포인트, 인벤토리 UI, 플래그 관리

### 🔧 트러블슈팅 (12개 수록)
- 자주 겪는 문제와 해결법: 충돌 안 됨, 벽 끼임, 데이터 소멸, 바닥 관통, 애니메이션 안 바뀜, @onready null, 시그널 안 됨, UI 카메라 문제, pause 멈춤, 셰이더 안 보임, set_deferred, FileAccess 경로
- 증상(빨간) / 원인(주황) / 해결법(초록) 구분 표시
- 카테고리 필터: 충돌, 이동, 씬/데이터, UI, 셰이더

### 🗺️ 로드맵 (8주 과정)
- 2D 횡스크롤 아케이드/액션/미스터리탈출 게임 개발 학습 순서
- 주차별 체크리스트 + 진행률 바
- 각 할 일에서 관련 스니펫/가이드로 바로 이동
- 진행률 자동 저장

### 기타
- 📌 즐겨찾기 (핀 고정)
- 🌙☀️ 다크/라이트 테마
- 💾 JSON 내보내기/불러오기
- 🔍 검색 & 카테고리 필터
- 📱 PWA (오프라인, 홈 화면 설치)
- 모든 탭에서 추가/수정/삭제 가능

---

## 🚀 사용 방법

### 그냥 쓰기
`index.html`을 브라우저에서 열면 바로 사용 가능합니다.

### GitHub Pages 배포

1. 리포지토리 생성 → 파일 전체 업로드
2. **Settings** → **Pages** → Branch: **main** / Folder: **/ (root)** → Save
3. 1~2분 후 `https://유저이름.github.io/리포지토리이름/` 접속 가능

### 파일 구성

| 파일 | 역할 |
|---|---|
| `index.html` | 메인 앱 |
| `manifest.json` | PWA 설정 |
| `sw.js` | 서비스워커 (오프라인 캐싱) |
| `icon-192.png` | PWA 아이콘 192x192 |
| `icon-512.png` | PWA 아이콘 512x512 |
| `README.md` | 이 문서 |

---

## 💾 데이터

- 브라우저 localStorage에 자동 저장
- **↓ 내보내기** / **↑ 불러오기**로 백업 & 기기 이동
- **↺ 초기화**로 기본 데이터 복원 (새 버전 데이터 반영)

---

## 🎮 타겟 장르

**2D 횡스크롤 아케이드/액션/미스터리탈출** 게임 개발에 초점

---

## 🛠️ 기술 스택

- HTML/CSS/JS 단일 파일 (프레임워크 없음)
- Moneygraphy-Rounded 폰트 (base64 임베딩)
- Godot 브랜드 컬러 (#478cbf) 기반 다크/라이트 UI
- PWA (Service Worker + Web App Manifest)

---

## 📄 라이선스

자유롭게 사용, 수정, 배포하세요.
