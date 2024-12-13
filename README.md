# 실시간 채팅 서비스 운영

MSA(Microservice Architecture) 전환을 고려하여 설계된 실시간 채팅 및 컨텐츠 관리 기능을 제공하는 NestJS 기반 애플리케이션입니다. 본 시스템은 채팅과 핵심 데이터 관리를 위한 다중 데이터베이스 구조를 활용합니다.

<h1>주요 기능</h1>
<h2>실시간 채팅</h2>

- WebSocket 기반 통신
- 확장성을 위한 Redis adapter
- 챗룸 기반 채팅 시스템
- 메시지 좋아요 및 공지 기능
- 메시지 이력 관리

<h2>컨텐츠 관리</h2>

- 컨텐츠 CRUD 작업
- 좋아요 시스템
- 사용자-컨텐츠 관계 관리

<h2>사용자 관리</h2>

- 사용자 CRUD 작업
- 고유 사용자명 제약조건
- 채팅방 참여 추적
</br>
<h2>아키텍처 개요</h2>
<h3>시스템 구성요소</h3>
- 사용자 관리
- 실시간 채팅 시스템
- 컨텐츠 관리
- WebSocket 통신
- 분산 캐싱
</br>
<h3>기술 스택</h3>

- 프레임워크: NestJS

- 데이터베이스: PostgreSQL (이중 DB 구조)
</br></tr>Core DB: 사용자, 채팅방, 컨텐츠 관리
</br></tr>Chat DB: 메시지 이력, 상호작용

</br>

- 실시간 통신:

</tr>Socket.IO
</tr>수평 확장을 위한 Redis Adapter


ORM: TypeORM (Repository 패턴 적용)
뷰 엔진: Handlebars (HBS)

데이터베이스 구조
Core 데이터베이스

```
엔티티 구조:
- UserEntity
  - name 필드 유니크 제약조건
  - 기본 사용자 정보 관리
- ChatRoomEntity
  - 채팅방 관리
  - 공지사항 기능
- ChatJoinEntity
  - 다대다 관계 처리
- ContentEntity
  - 컨텐츠 관리
- ContentLikeEntity
  - 컨텐츠 상호작용 추적
```

Chat 데이터베이스

```
엔티티 구조:
- ChatEntity
  - 메시지 관리
  - 실시간 통신
- ChatLikeEntity
  - 메시지 상호작용 추적
```

테스트는 Jest를 사용했습니다!

