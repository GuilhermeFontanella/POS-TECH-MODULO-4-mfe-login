# mfe-host-app

[![Angular](https://img.shields.io/badge/Angular-16+-dd0031?logo=angular)](https://angular.io/)
[![Micro Frontend](https://img.shields.io/badge/Micro--Frontend-Architecture-blue)]()
[![Clean Architecture](https://img.shields.io/badge/Clean--Architecture-Front--End-success)]()
[![SOLID](https://img.shields.io/badge/SOLID-Principles-important)]()
[![Azure](https://img.shields.io/badge/Hosted%20on-Azure-blue?logo=microsoft-azure)]()

---

## 📌 Overview

`mfe-host-app` é uma **host application Angular** construída seguindo **Clean Architecture**, **SOLID** e **Micro Frontends com Module Federation**.

Ela atua como **container e orquestradora** de micro frontends independentes, sendo responsável apenas por:

* layout
* composição de telas
* carregamento dinâmico de MFEs

> ⚠️ **Regra central**:
> A host **não conhece implementações concretas** dos micro frontends — apenas **contratos (ports)**.

---

## 🧩 Micro Frontend Architecture

A aplicação segue uma arquitetura **Micro Frontend distribuída**, onde cada domínio é um MFE independente, com:

* ciclo de vida próprio
* deploy independente
* isolamento de dependências

### Estrutura Geral

```
mfe-host-app
│
├── ui/                    # Componentes de UI (layout e composição)
│   ├── navbar/
│   ├── home-page/
│   ├── component-wrapper/
│   ├── side-menu/
│   ├── top-navbar/
|   └── settings
│
├── ports/                 # Contratos (interfaces + injection tokens)
│   ├── mfePortLoader.interface.ts
│   └── mfePort/
│       ├── navbar/
│       ├── home/
|       └── sideMenu/
│
├── infra/                 # Adapters e integrações externas
│   ├── navbarAdapter/
│   ├── sideMenuAdapter/
│   ├── themeAdapter/
│   ├── topNavbarAdapter/
│   ├── userData/
│   └── homeAdapter/
│
└── app.module.ts / routes
```

---

## 🧱 Clean Architecture no Front-End

Este projeto aplica Clean Architecture de forma **pragmática**, adaptada ao contexto Angular.

### Camadas

```
UI (Components)
 ↓
Ports (Interfaces / Tokens)
 ↓
Infra (Adapters / Module Federation)
```

### Responsabilidades

#### 🖼 UI (Components)

* Apenas **renderização e orquestração**
* Sem lógica de carregamento de MFE
* Dependem **somente de abstrações**

Exemplo:

```ts
constructor(@Inject(NAVBAR_LOADER) private mfeLoader: MfePortLoader) {}
```

---

#### 🔌 Ports (Contratos)

* Definem **o que pode ser feito**, não como
* São estáveis e testáveis
* Isolam a UI de detalhes técnicos

Exemplo:

```ts
export interface MfePortLoader {
  load(container: ViewContainerRef): Promise<void>;
  rebuild(container: ViewContainerRef): void;
}
```

---

#### 🏗 Infra (Adapters)

* Implementações concretas
* Conhecem Module Federation
* Podem mudar sem impactar UI

Exemplo:

```
NavbarLoaderAdapter
HomeLoaderAdapter
```

---

## 🧠 SOLID Aplicado

### Single Responsibility (SRP)

* Componentes só orquestram UI
* Loaders só carregam MFEs

### Open / Closed (OCP)

* Novos MFEs são adicionados criando novos adapters
* Nenhum componente precisa ser modificado

### Liskov Substitution (LSP)

* Qualquer adapter que implemente `MfePortLoader` funciona

### Interface Segregation (ISP)

* Interface mínima (`load` / `rebuild`)
* Sem dependências desnecessárias

### Dependency Inversion (DIP)

* UI depende de **interfaces**
* Infra depende da implementação

---

## 🧪 Test Strategy

A arquitetura foi repensada para **testabilidade**.

### Tipos de Testes

#### Componentes de UI

* Testes unitários simples
* Verificam:

  * ciclo de vida
  * chamadas aos ports
* Sem mocks de Module Federation

Exemplo:

```ts
expect(mfeLoader.load).toHaveBeenCalledWith(viewContainerRef);
```

---

#### Adapters (Infra)

* Testados isoladamente
* Podem mockar:

  * dynamic imports
  * Module Federation APIs

---

#### Layout / Wrapper Components

* Testes estruturais
* Verificam renderização (`router-outlet`, `nz-content`)
* Sem lógica de negócio

---

## 📦 Micro Frontends Integrados

Este host consome os seguintes MFEs:

* **Navbar MFE**

  * Responsável pela navegação
  * 🔗 [https://github.com/GuilhermeFontanella/POS-TECH-MODULO-2-mfe-navbar](https://github.com/GuilhermeFontanella/POS-TECH-MODULO-2-mfe-navbar)

* **Home MFE**

  * Página inicial
  * 🔗 [https://github.com/GuilhermeFontanella/POS-TECH-MODULO-2-mfe-home](https://github.com/GuilhermeFontanella/POS-TECH-MODULO-2-mfe-home)

⚠️ Para visualizar o sistema completo, **todos os MFEs devem estar rodando simultaneamente**.

---

## 🚀 Getting Started

### Pré-requisitos

* Node.js 16+
* Angular CLI 16+
* MFEs (`mfe-navbar` e `mfe-home`) rodando localmente

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
http://localhost:4200
```
  
Para ver a aplicação completa rodando o ideal é clonar os 3 mfes (`mfe-host`, `mfe-home` e `mfe-navbar`)  
As aplicações ficarão disponíveis em:
```
http://localhost:4200  
http://localhost:4201  
http://localhost:4202
```
---

## 🌍 Deploy

* Hospedado no **Azure** (Desconsiderar)
* Cada MFE possui pipeline independente
* Host não precisa ser redeployado para alterações internas dos MFEs

---

## ✅ Objetivos do Projeto

✔ Escalabilidade
✔ Isolamento de domínios
✔ Testabilidade
✔ Manutenibilidade
✔ Independência de deploy
✔ Arquitetura clara e explícita

---