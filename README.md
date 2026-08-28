# Srinivas Ecommerce Platform

A full-featured, high-performance, 3D interactive e-commerce web application featuring **Fashion**, **Mobiles**, **Furniture**, and **Groceries** departments.

## Features
- **3D WebGL Engine**: Three.js interactive 3D hero background, 3D card tilt perspective, and 3D product model viewer modal.
- **4 Major Departments**: Extensive product catalogs across Fashion, Smartphones, Furniture, and Groceries.
- **Cart & Checkout**: Multi-step checkout form, payment mode switcher (UPI, Card, COD), and working promo codes (`SRINIVAS20`, `SAVE10`).
- **Admin Dashboard**: Revenue statistics, order tracking, dynamic product publisher, and stock editor.
- **Dark / Light Theme**: Dynamic CSS custom property theme switcher with state persistence.

## Installation
Clone the repository and install Node.js dependencies:
```bash
git clone https://github.com/Srinivas5773/P5.git
cd P5
npm install
```

## Build & Run
To run the web application server locally:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

## Docker Build & Container Execution
```bash
docker build -t srinivas-ecommerce .
docker run -p 3000:3000 srinivas-ecommerce
```

## Running Unit Tests
```bash
npm test
```

## Dependencies
- **Runtime**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Three.js, Bootstrap Icons
- **Testing**: Jest
