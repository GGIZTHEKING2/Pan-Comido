# Pan Comido

Proyecto backend construido con [NestJS](https://nestjs.com/) y TypeScript.

## Estructura del proyecto

- `src/`: Código fuente principal de la aplicación.
- `test/`: Pruebas unitarias y de integración.
- `dist/`: Archivos compilados (generados automáticamente).
- `package.json`: Dependencias y scripts del proyecto.
- `tsconfig.json`: Configuración de TypeScript.
- `.prettierrc`, `eslint.config.mjs`: Configuración de formato y linting.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Comandos principales

```bash
# Compilar el proyecto
npm run build

# Iniciar en modo desarrollo (con recarga automática)
npm run start:dev

# Iniciar en modo producción
npm run start:prod

# Ejecutar pruebas unitarias
npm run test

# Ejecutar pruebas e2e
npm run test:e2e

# Revisar la cobertura de pruebas
npm run test:cov

# Formatear el código
npm run format

# Linting y corrección automática
npm run lint
```

## Despliegue

Consulta la [documentación oficial de NestJS](https://docs.nestjs.com/deployment) para recomendaciones de despliegue.

## Recursos útiles

- [Documentación de NestJS](https://docs.nestjs.com/)
- [Discord de NestJS](https://discord.gg/G7Qnnhy)
- [Guía de TypeScript](https://www.typescriptlang.org/docs/)

## Licencia

MIT
