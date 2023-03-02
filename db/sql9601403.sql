-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql9.freemysqlhosting.net
-- Generation Time: Mar 02, 2023 at 02:30 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql9601403`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `email`, `password`, `phone`) VALUES
(1, 'admin1@gmail.com', 's123456', 123456),
(2, 'admin@gmail.com', 's123456', 123456),
(3, 'fdsf', 'sdfds', NULL),
(4, 'nvsang.18it2@vku.udn.vn', '123456789', NULL),
(5, 'nvsang.18it2@vku.udn.vn', '12345', NULL),
(6, 'khao&gmail.com', '$2b$10$hTXjhcU3nsBadRyCn./DcO.sN3vkCXFx3.5zsxTEZCN9OlxlyXJgi', 123456789),
(7, 'test@gmail.com', '$2b$10$nv5ZJIEIW4NFE2j2d0oUKeP96kS/uEiwp6.zsAU/E9n1Y6gFEfMMK', 1234567890),
(8, 'testAgain@gmail.com', '$2b$10$ojWToUgYl5g.ht82Om5kC.tTc3c9tE/XqNCGDGqt/5oNSh7eBViOG', 1234567890),
(9, 'tesjtAgain@gmail.com', '$2b$10$C.jacB23AnKuQ1CrFWgW5uyRNvjpvasiQWDF.EhZpdmHTGNXWVOUu', 1234567890),
(10, 'klook@gmail.com', '$2b$10$57hWDHEy8gFT0MT9fbgVR.OrvxBUSE9r/WXVd.PiVSl30MmLsVdVe', 123456789),
(11, 'sang@gmail.com', '$2b$10$yLIYL/44OhsNjrvNFU2jEu767TnAeCkL1DKY/kSJ0sZ.qa9PcNKfa', 123444),
(12, 'cuongbaby&gmail.com', '$2b$10$qJrA1dPxNzqyT2iseeE6a.egHY1e48vwet1hckSvVSBJPVQomG40u', 123456789),
(13, 'nvsang2670@gmail.com', '123123', NULL),
(14, 'Again@gmail.com', '$2b$10$6PBIRysyE.If5c9z4aGN7.zDqDpH1ca8ZCCjKG5cGKG6W8LuqmjHW', 1234567890),
(15, 'test@gmail.com', '$2b$10$ylVhDr8hb4Vrl.WtfZciL.99ym3Dq9BUwI1D38FmjW6v7u7npHoWa', NULL),
(16, 'khaoba@gmail.com', '$2b$10$0XbAHpDX2Jxjo0gSTn8OZumJ2cHyC66PlGCN7LiyqY4QdfyY98nUW', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `tilte` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `banner`, `tilte`) VALUES
(1, 'https://res.klook.com/image/upload/Hotspring_d1mwjk.webp', 'Suối nước nóng'),
(2, 'https://res.klook.com/image/upload/City_luxury_dl5nhz.webp', 'category 2'),
(3, 'https://res.klook.com/image/upload/Nature_Retreats_wkdpv9.webp', 'categori 24'),
(4, 'https://res.klook.com/image/upload/Affordable_mgyhbm.webp', 'categori 24'),
(5, 'https://res.klook.com/image/upload/Island_tkjcvz.webp', ''),
(6, 'https://res.klook.com/image/upload/staycation%20icon/Parent-Child_Activities_lcephu.webp', ''),
(7, 'https://res.klook.com/image/upload/staycation%20icon/swimming_pool_zkd2wk.webp', ''),
(8, 'https://res.klook.com/image/upload/Citystay_bu9f74.webp', ''),
(9, 'https://res.klook.com/image/upload/Themepark_c9horr.webp', ''),
(10, 'https://res.klook.com/image/upload/staycation%20icon/Boutique_wbo6dq.webp', ''),
(11, 'https://res.klook.com/image/upload/Alternative_ct5jnh.webp', ''),
(12, 'https://res.klook.com/image/upload/Adventure_cfbmje.webp', '');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `banner`, `address`, `title`, `price`) VALUES
(1, 'https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,c_fill,w_375,q_85/travelapi/2000000/1450000/1443700/1443688/74095469_z.webp', 'address123', 'product12', 240000),
(2, 'https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,c_fill,w_375,q_85/travelapi/2000000/1450000/1443700/1443688/74095469_z.webp', 'address123', 'product12', 240000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
