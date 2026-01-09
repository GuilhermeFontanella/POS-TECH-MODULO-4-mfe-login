# mfe-login (Login page)

[![Angular](https://img.shields.io/badge/Angular-16+-dd0031?logo=angular)](https://angular.io/)
[![Micro Frontend](https://img.shields.io/badge/Micro--Frontend-Architecture-blue)]()
[![RxJS](https://img.shields.io/badge/RxJS-Reactive-purple?logo=reactivex)](https://rxjs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Realtime-FFCA28?logo=firebase)](https://firebase.google.com/)

---

## 📌 Overview

O `mfe-login` atua como o **Orquestrador da página de login e seus componentes** do ecossistema de Micro Frontends. Ele serve para realizar o processo de login e/ou cadastro de usuários que acessam o ecossistema.

Ele é responsável por:
* **Orquestração de Layout**: Composição da página principal utilizando Module Federation.
* **Gestão de Estado Reativo**: Aquisição de token para autenticação e cadastro de novos usuários.
* **Segurança e Infraestrutura**: Gerenciamento de tokens de autenticação via interceptors HTTP e integração com Firebase.

---

## 🧩 Micro Frontend Architecture & Data Flow

Diferente de uma abordagem estática, este Host utiliza **Dependency Inversion** para compartilhar dados entre MFEs. O Host provê as "portas" (Tokens) e os MFEs consomem os streams de dados.

## 🧱 Clean Architecture & Reatividade

O projeto aplica **Clean Architecture** para isolar o Firebase (detalhe de infraestrutura) da UI (componentes).

---

## Responsabilidades Reativas

### 🖼 UI (ViewModels)
- Utilizam o padrão **MVVM** para expor dados à View através de **Observables**.
- Não manipulam o Firebase diretamente.
- Utilizam o **async pipe** para garantir performance e evitar *memory leaks*.

### 🔌 Infra (Firebase Adapters)
Implementam a lógica de persistência usando operadores avançados do **RxJS**:

- **switchMap**: Para encadear a criação de transações com o recarregamento do saldo.
- **tap**: Para disparar efeitos colaterais de atualização de estado interno (*BehaviorSubjects*).
- **catchError**: Para tratamento resiliente de permissões do Firestore.

---

## 🧠 SOLID Aplicado à Gestão de Estado
- **Single Responsibility (SRP)**:  
  O `FirebaseAuthService` gerencia o processo de login, logout junto ao firebase; o `FirebaseRegisterService` gerencia o registro de novos perfis e o cadastro de informações se usuários.
- **Dependency Inversion (DIP)**:  
  A UI depende de um **InjectionToken (TRANSACTION)**, permitindo trocar a implementação do Firebase por um *Mock* em testes sem alterar um componente sequer.
- **Interface Segregation (ISP)**:  
  O componente de Saldo só “enxerga” o que é necessário para exibir o montante, ignorando complexidades do CRUD de transações.

---

## 🚀 Getting Started

### Pré-requisitos

* Node.js 16+
* Angular CLI 16+
* MFEs (`mfe-host`, `mfe-home` e `mfe-navbar`) rodando localmente

---

### Instalação

```bash
npm install
```

---

### Executar a aplicação

```bash
npm start
```

A aplicação ficará disponível em:

```
http://localhost:4203
```
  
Para ver a aplicação completa rodando o ideal é clonar os 4 mfes ([mfe-host](https://github.com/GuilhermeFontanella/POS-TECH-MODULO-2-host-app), [mfe-home](https://github.com/GuilhermeFontanella/POS-TECH-MODULO-2-mfe-home), [mfe-navbar](https://github.com/GuilhermeFontanella/POS-TECH-MODULO-2-mfe-navbar) e [mfe-login](https://github.com/GuilhermeFontanella/POS-TECH-MODULO-4-mfe-login) )  
As aplicações ficarão disponíveis em:
```
http://localhost:4200  
http://localhost:4201  
http://localhost:4202
http://localhost:4203
```
---

## 🌍 Deploy

* Hospedado no **Azure** (Desconsiderar)
* Cada MFE possui pipeline independente
* Host não precisa ser redeployado para alterações internas dos MFEs

---
