-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-09-2023 a las 22:58:20
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `primevideo2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `IDCategoria` int(11) NOT NULL,
  `NombreCategoria` varchar(255) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listareproduccion`
--

CREATE TABLE `listareproduccion` (
  `IDListaReproduccion` int(11) NOT NULL,
  `NombreLista` varchar(255) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `IDUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listareproduccionpelicula`
--

CREATE TABLE `listareproduccionpelicula` (
  `IDListaReproduccion` int(11) NOT NULL,
  `IDPelicula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listareproduccionserietv`
--

CREATE TABLE `listareproduccionserietv` (
  `IDListaReproduccion` int(11) NOT NULL,
  `IDSerieTV` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pelicula`
--

CREATE TABLE `pelicula` (
  `IDPelicula` int(11) NOT NULL,
  `Titulo` varchar(255) DEFAULT NULL,
  `Genero` varchar(255) DEFAULT NULL,
  `AnioLanzamiento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculacategoria`
--

CREATE TABLE `peliculacategoria` (
  `IDPelicula` int(11) NOT NULL,
  `IDCategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `serietv`
--

CREATE TABLE `serietv` (
  `IDSerieTV` int(11) NOT NULL,
  `Titulo` varchar(255) DEFAULT NULL,
  `Genero` varchar(255) DEFAULT NULL,
  `AnioLanzamiento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `serietvcategoria`
--

CREATE TABLE `serietvcategoria` (
  `IDSerieTV` int(11) NOT NULL,
  `IDCategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `IDUsuario` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `CorreoElectronico` varchar(255) DEFAULT NULL,
  `Contraseña` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`IDCategoria`);

--
-- Indices de la tabla `listareproduccion`
--
ALTER TABLE `listareproduccion`
  ADD PRIMARY KEY (`IDListaReproduccion`),
  ADD KEY `IDUsuario` (`IDUsuario`);

--
-- Indices de la tabla `listareproduccionpelicula`
--
ALTER TABLE `listareproduccionpelicula`
  ADD PRIMARY KEY (`IDListaReproduccion`,`IDPelicula`),
  ADD KEY `IDPelicula` (`IDPelicula`);

--
-- Indices de la tabla `listareproduccionserietv`
--
ALTER TABLE `listareproduccionserietv`
  ADD PRIMARY KEY (`IDListaReproduccion`,`IDSerieTV`),
  ADD KEY `IDSerieTV` (`IDSerieTV`);

--
-- Indices de la tabla `pelicula`
--
ALTER TABLE `pelicula`
  ADD PRIMARY KEY (`IDPelicula`);

--
-- Indices de la tabla `peliculacategoria`
--
ALTER TABLE `peliculacategoria`
  ADD PRIMARY KEY (`IDPelicula`,`IDCategoria`),
  ADD KEY `IDCategoria` (`IDCategoria`);

--
-- Indices de la tabla `serietv`
--
ALTER TABLE `serietv`
  ADD PRIMARY KEY (`IDSerieTV`);

--
-- Indices de la tabla `serietvcategoria`
--
ALTER TABLE `serietvcategoria`
  ADD PRIMARY KEY (`IDSerieTV`,`IDCategoria`),
  ADD KEY `IDCategoria` (`IDCategoria`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IDUsuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `listareproduccion`
--
ALTER TABLE `listareproduccion`
  ADD CONSTRAINT `listareproduccion_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuario` (`IDUsuario`);

--
-- Filtros para la tabla `listareproduccionpelicula`
--
ALTER TABLE `listareproduccionpelicula`
  ADD CONSTRAINT `listareproduccionpelicula_ibfk_1` FOREIGN KEY (`IDListaReproduccion`) REFERENCES `listareproduccion` (`IDListaReproduccion`),
  ADD CONSTRAINT `listareproduccionpelicula_ibfk_2` FOREIGN KEY (`IDPelicula`) REFERENCES `pelicula` (`IDPelicula`);

--
-- Filtros para la tabla `listareproduccionserietv`
--
ALTER TABLE `listareproduccionserietv`
  ADD CONSTRAINT `listareproduccionserietv_ibfk_1` FOREIGN KEY (`IDListaReproduccion`) REFERENCES `listareproduccion` (`IDListaReproduccion`),
  ADD CONSTRAINT `listareproduccionserietv_ibfk_2` FOREIGN KEY (`IDSerieTV`) REFERENCES `serietv` (`IDSerieTV`);

--
-- Filtros para la tabla `peliculacategoria`
--
ALTER TABLE `peliculacategoria`
  ADD CONSTRAINT `peliculacategoria_ibfk_1` FOREIGN KEY (`IDPelicula`) REFERENCES `pelicula` (`IDPelicula`),
  ADD CONSTRAINT `peliculacategoria_ibfk_2` FOREIGN KEY (`IDCategoria`) REFERENCES `categoria` (`IDCategoria`);

--
-- Filtros para la tabla `serietvcategoria`
--
ALTER TABLE `serietvcategoria`
  ADD CONSTRAINT `serietvcategoria_ibfk_1` FOREIGN KEY (`IDSerieTV`) REFERENCES `serietv` (`IDSerieTV`),
  ADD CONSTRAINT `serietvcategoria_ibfk_2` FOREIGN KEY (`IDCategoria`) REFERENCES `categoria` (`IDCategoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
