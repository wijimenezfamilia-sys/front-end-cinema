# Nexus Librería - Backend Simulado

## Descripción
Para esta actividad, se incluye un backend simulado que puede ser usado con MockServer o ApiDog. Aunque la aplicación web usa datos locales, estos endpoints están disponibles para futuras expansiones y para la versión final de la app.

## Endpoints Disponibles

### 1. Obtener lista de libros
```
GET /api/books?location=madrid&category=ficcion
```

**Response:**
```json
{
  "books": [
    {
      "id": 1,
      "title": "Cien años de soledad",
      "author": "Gabriel García Márquez",
      "category": "Ficción",
      "format": "Física",
      "price": "$24.99",
      "isbn": "978-0060976675",
      "rating": "9.2/10",
      "stock": 15,
      "availability": true
    }
  ],
  "total": 1
}
```

### 2. Obtener detalles de un libro
```
GET /api/books/:id
```

### 3. Listar sucursales
```
GET /api/locations
```

**Response:**
```json
{
  "locations": [
    {
      "id": "madrid",
      "name": "Madrid",
      "address": "Calle Principal 123, Madrid 28001",
      "phone": "+34 91 123 4567",
      "services": ["Venta de libros", "Co-working", "Cafetería"]
    }
  ]
}
```

### 4. Detalles de una sucursal
```
GET /api/locations/:id
```

## Cómo Usar con MockServer

1. Descargar [MockServer Standalone](http://www.mock-server.com/mock_server/getting_started.html)
2. Crear archivo `initializerJson.json` con las respuestas mocked
3. Ejecutar MockServer con los endpoints arriba

## Cómo Usar con ApiDog

1. Abrir [ApiDog](https://www.apidogapp.com/)
2. Crear nuevo proyecto "Nexus Library"
3. Importar endpoints
4. Activar Mock para cada endpoint

## Notas para Mobile App

- La app móvil WebView cargará la URL web desplegada en Vercel
- No consume directamente estos endpoints (usa datos locales en web)
- En futuras iteraciones (Activity 2+), se integrarán APIs reales con Firebase
